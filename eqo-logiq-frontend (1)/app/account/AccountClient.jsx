'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Image as ImageIcon, Infinity, Leaf, Package, Search, TrendingUp, User, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useSavedItems } from '../../context/SavedItemsContext';
import { handleDownloadInvoice } from '../../lib/downloadInvoice';
import { INDIAN_STATE_CODES, WC_API_BASE, EQO_API_BASE, WC_FETCH_OPTIONS, formatProductPrice, resolveProductImageUrl } from '../../lib/woocommerce';

const EMPTY_ADDRESS_FORM = {
  billing_first_name: '',
  billing_last_name: '',
  billing_address_1: '',
  billing_city: '',
  billing_state: '',
  billing_postcode: '',
  billing_phone: '',
};

function getMetaValue(user, key) {
  const meta = user?.meta_data;
  if (!Array.isArray(meta)) return '';
  const entry = meta.find((item) => item?.key === key);
  return entry?.value ?? '';
}

function buildAddressFormFromUser(user) {
  if (!user) return { ...EMPTY_ADDRESS_FORM };

  const billing = user?.billing || {};

  return {
    billing_first_name:
      billing.first_name || user.billing_first_name || getMetaValue(user, 'billing_first_name') || user.first_name || '',
    billing_last_name:
      billing.last_name || user.billing_last_name || getMetaValue(user, 'billing_last_name') || user.last_name || '',
    billing_address_1:
      billing.address_1 || user.billing_address_1 || getMetaValue(user, 'billing_address_1') || '',
    billing_city: billing.city || user.billing_city || getMetaValue(user, 'billing_city') || '',
    billing_state: billing.state || user.billing_state || getMetaValue(user, 'billing_state') || '',
    billing_postcode:
      billing.postcode || user.billing_postcode || getMetaValue(user, 'billing_postcode') || '',
    billing_phone: billing.phone || user.billing_phone || getMetaValue(user, 'billing_phone') || '',
  };
}

function formatStateLabel(state) {
  if (!state) return '';
  const match = Object.entries(INDIAN_STATE_CODES).find(([, code]) => code === state);
  return match ? match[0] : state;
}

function displayValue(value) {
  const text = String(value ?? '').trim();
  return text || 'Not set';
}

function formatOrderDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getPriceMeta(order) {
  const firstItem = order?.items?.[0];

  return {
    currency_minor_unit:
      order?.totals?.currency_minor_unit ??
      firstItem?.totals?.currency_minor_unit ??
      firstItem?.prices?.currency_minor_unit ??
      2,
    currency_prefix:
      order?.totals?.currency_prefix ??
      firstItem?.totals?.currency_prefix ??
      firstItem?.prices?.currency_prefix ??
      '₹',
  };
}

function formatOrderMoney(order, amount) {
  if (amount == null || amount === '') return '—';
  return formatProductPrice({ price: amount, ...getPriceMeta(order) });
}

function formatRupees(value) {
  if (value == null || value === '') return '—';
  if (typeof value === 'string' && value.includes('₹')) return value;
  const n = Number(value);
  if (Number.isNaN(n)) return `₹${value}`;
  return `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
}

export default function AccountClient() {
  const router = useRouter();
  const { user, token, isHydrated, isAuthenticated, logout, updateUser } = useAuth();
  const { savedItems, toggleSavedItem } = useSavedItems();

  const displayName = user?.first_name || user?.display_name || user?.username || 'Customer';
  const displayEmail = user?.user_email || user?.email || '';

  const [activeTab, setActiveTab] = useState('Dashboard');
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [ordersError, setOrdersError] = useState(null);
  const [upsellProducts, setUpsellProducts] = useState([]);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [passwordMessageIsError, setPasswordMessageIsError] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [addressForm, setAddressForm] = useState(EMPTY_ADDRESS_FORM);
  const [savedAddressForm, setSavedAddressForm] = useState(EMPTY_ADDRESS_FORM);
  const [isUpdatingAddress, setIsUpdatingAddress] = useState(false);
  const [addressMessage, setAddressMessage] = useState(null);
  const [addressMessageIsError, setAddressMessageIsError] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState(null);
  const [profileError, setProfileError] = useState(null);
  const [downloadingOrderId, setDownloadingOrderId] = useState(null);
  const [downloadError, setDownloadError] = useState(null);

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) {
      const params = new URLSearchParams({ redirect: '/account/' });
      router.replace(`/login/?${params.toString()}`);
    }
  }, [isHydrated, isAuthenticated, router]);

  useEffect(() => {
    if (!user) return;
    setEditName(user.display_name || user.username || '');
    setEditEmail(user.user_email || user.email || '');
    setEditFirstName(user.first_name || '');
    setEditLastName(user.last_name || '');

    const initialAddress = buildAddressFormFromUser(user);
    setAddressForm(initialAddress);
    setSavedAddressForm(initialAddress);
  }, [user]);

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) return;
    if (!token) return;

    let cancelled = false;

    async function loadOrders() {
      setOrdersLoading(true);
      setOrdersError(null);

      try {
        const ordersUrl = `${EQO_API_BASE}/orders`;
        const response = await fetch(ordersUrl, {
          ...WC_FETCH_OPTIONS,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json().catch(() => null);

        if (!response.ok) {
          const message =
            data?.message ||
            data?.code ||
            `Unable to load orders (${response.status}).`;
          throw new Error(message);
        }

        if (!cancelled) {
          setOrders(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!cancelled) {
          setOrders([]);
          setOrdersError(err?.message || 'Unable to load orders.');
        }
      } finally {
        if (!cancelled) setOrdersLoading(false);
      }
    }

    loadOrders();

    return () => {
      cancelled = true;
    };
  }, [isHydrated, isAuthenticated, token]);

  useEffect(() => {
    let cancelled = false;

    async function loadUpsellProducts() {
      try {
        const response = await fetch(`${WC_API_BASE}/products?per_page=3`, {
          ...WC_FETCH_OPTIONS,
        });
        const data = await response.json().catch(() => []);
        if (!response.ok) return;
        if (!cancelled) setUpsellProducts(Array.isArray(data) ? data.slice(0, 3) : []);
      } catch {
        if (!cancelled) setUpsellProducts([]);
      }
    }

    loadUpsellProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  async function onDownloadInvoice(orderId) {
    if (!orderId) return;

    setDownloadingOrderId(orderId);
    setDownloadError(null);

    try {
      await handleDownloadInvoice(orderId, token);
    } catch (err) {
      setDownloadError(err?.message || 'Unable to download invoice.');
    } finally {
      setDownloadingOrderId(null);
    }
  }

  const initials = useMemo(() => {
    const source = displayName || displayEmail || 'U';
    const parts = String(source).trim().split(/\s+/).filter(Boolean);
    const first = (parts[0] || 'U')[0] || 'U';
    const last = (parts.length > 1 ? parts[parts.length - 1][0] : '') || '';
    return (first + last).toUpperCase();
  }, [displayName, displayEmail]);

  async function handleUpdateProfile() {
    if (!token) return;

    setIsUpdating(true);
    setUpdateMessage(null);
    setProfileError(null);

    try {
      const response = await fetch(
        `${EQO_API_BASE}/update-profile`,
        {
          ...WC_FETCH_OPTIONS,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: editEmail,
            display_name: editName,
          }),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          data?.message || data?.code || `Unable to update profile (${response.status}).`;
        throw new Error(message);
      }

      updateUser({
        display_name: editName,
        name: editName,
        user_email: editEmail,
        email: editEmail,
        ...(data?.user || {}),
      });

      setUpdateMessage('Your profile has been updated.');
    } catch (err) {
      setProfileError(err?.message || 'Unable to update profile.');
    } finally {
      setIsUpdating(false);
    }
  }

  async function handlePasswordChange() {
    if (!token) return;

    if (newPassword !== confirmPassword) {
      setPasswordMessage('New passwords do not match.');
      setPasswordMessageIsError(true);
      return;
    }

    setIsUpdatingPassword(true);
    setPasswordMessage(null);
    setPasswordMessageIsError(false);

    try {
      const response = await fetch(
        `${EQO_API_BASE}/change-password`,
        {
          ...WC_FETCH_OPTIONS,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            current_password: currentPassword,
            new_password: newPassword,
          }),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          data?.message || data?.code || `Unable to update password (${response.status}).`;
        throw new Error(message);
      }

      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setPasswordMessage('Your password has been updated.');
      setPasswordMessageIsError(false);
    } catch (err) {
      setPasswordMessage(err?.message || 'Unable to update password.');
      setPasswordMessageIsError(true);
    } finally {
      setIsUpdatingPassword(false);
    }
  }

  function handleAddressFieldChange(event) {
    const { name, value } = event.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCancelAddressEdit() {
    setAddressForm(savedAddressForm);
    setIsEditingAddress(false);
    setAddressMessage(null);
    setAddressMessageIsError(false);
  }

  async function handleAddressUpdate() {
    if (!token) return;

    setIsUpdatingAddress(true);
    setAddressMessage(null);
    setAddressMessageIsError(false);

    try {
      const response = await fetch(
        `${EQO_API_BASE}/update-address`,
        {
          ...WC_FETCH_OPTIONS,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(addressForm),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          data?.message || data?.code || `Unable to update address (${response.status}).`;
        throw new Error(message);
      }

      const billing = {
        first_name: addressForm.billing_first_name,
        last_name: addressForm.billing_last_name,
        address_1: addressForm.billing_address_1,
        city: addressForm.billing_city,
        state: addressForm.billing_state,
        postcode: addressForm.billing_postcode,
        phone: addressForm.billing_phone,
        country: 'IN',
      };

      updateUser({
        billing,
        billing_first_name: addressForm.billing_first_name,
        billing_last_name: addressForm.billing_last_name,
        billing_address_1: addressForm.billing_address_1,
        billing_city: addressForm.billing_city,
        billing_state: addressForm.billing_state,
        billing_postcode: addressForm.billing_postcode,
        billing_phone: addressForm.billing_phone,
        ...(data?.user || {}),
      });

      setSavedAddressForm(addressForm);
      setAddressMessage('Your billing address has been updated.');
      setAddressMessageIsError(false);
      setIsEditingAddress(false);
    } catch (err) {
      setAddressMessage(err?.message || 'Unable to update address.');
      setAddressMessageIsError(true);
    } finally {
      setIsUpdatingAddress(false);
    }
  }

  const billingName = [addressForm.billing_first_name, addressForm.billing_last_name]
    .filter(Boolean)
    .join(' ');
  const billingCityLine = [
    displayValue(addressForm.billing_city),
    formatStateLabel(addressForm.billing_state) || displayValue(addressForm.billing_state),
    displayValue(addressForm.billing_postcode),
  ]
    .filter((part) => part && part !== 'Not set')
    .join(', ');

  if (!isHydrated) {
    return (
      <main className="pt-20 min-h-[70vh] bg-brand-base">
        <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16">
          <p className="font-body text-brand-text/50">Loading your account…</p>
        </section>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="pt-20 min-h-[70vh] bg-brand-base">
        <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16">
          <p className="font-body text-brand-text/50">Redirecting to sign in…</p>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-20 bg-brand-base">
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-white shadow-sm rounded-lg flex flex-col md:flex-row min-h-[600px] border border-gray-100">
            <aside className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-100 p-6">
              <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div className="min-w-0">
                  <p className="font-sans font-bold text-base text-gray-900 truncate">
                    {displayName}
                  </p>
                  <p className="font-body text-xs text-gray-500 truncate">{displayEmail}</p>
                </div>
              </div>

              <nav className="pt-6 space-y-1">
                {[
                  'Dashboard',
                  'Orders',
                  'Saved Items',
                  'Address',
                  'Account details',
                ].map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={[
                        'w-full text-left font-body text-sm py-2.5 rounded-md transition-colors',
                        isActive
                          ? '-ml-6 pl-5 border-l-4 border-blue-600 text-gray-900 font-semibold'
                          : 'text-gray-600 hover:text-gray-900',
                      ].join(' ')}
                    >
                      {tab}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => {
                    logout();
                    router.replace('/');
                  }}
                  className="w-full text-left font-body text-sm py-2.5 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Log out
                </button>
              </nav>
            </aside>

            <section className="w-full md:w-3/4 p-6 md:p-10">
              {activeTab === 'Dashboard' ? (
                <div className="space-y-6">
                  <p className="font-body text-gray-800">
                    Hello <strong>{displayName}</strong> (not <strong>{displayName}</strong>?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        router.replace('/');
                      }}
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Log out
                    </button>
                    )
                  </p>

                  <p className="font-body text-gray-600 leading-relaxed">
                    From your account dashboard you can view your{' '}
                    <button
                      type="button"
                      onClick={() => setActiveTab('Orders')}
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      recent orders
                    </button>
                    , manage your{' '}
                    <button
                      type="button"
                      onClick={() => setActiveTab('Address')}
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      shipping and billing addresses
                    </button>
                    , and edit your{' '}
                    <button
                      type="button"
                      onClick={() => setActiveTab('Account details')}
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      password and account details
                    </button>
                    .
                  </p>
                </div>
              ) : activeTab === 'Orders' ? (
                <div>
                  <h2 className="font-sans font-bold text-xl text-gray-900 mb-6">Orders</h2>

                  {downloadError ? (
                    <p className="mb-4 font-body text-sm text-red-600">{downloadError}</p>
                  ) : null}

                  <div className="border border-gray-100 rounded-lg overflow-hidden">
                    {ordersLoading ? (
                      <div className="p-6">
                        <p className="font-body text-sm text-gray-600">Loading your orders…</p>
                      </div>
                    ) : ordersError ? (
                      <div className="p-6">
                        <p className="font-sans font-bold text-sm text-gray-900 mb-2">
                          Couldn’t load orders
                        </p>
                        <p className="font-body text-sm text-gray-600">{ordersError}</p>
                      </div>
                    ) : orders.length === 0 ? (
                      <div className="p-6">
                        <p className="font-body text-sm text-gray-600">No order has been made yet.</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead className="bg-gray-50">
                            <tr className="text-left">
                              <th className="px-5 py-3 font-semibold text-gray-700">Order</th>
                              <th className="px-5 py-3 font-semibold text-gray-700">Date</th>
                              <th className="px-5 py-3 font-semibold text-gray-700">Status</th>
                              <th className="px-5 py-3 font-semibold text-gray-700">Total</th>
                              <th className="px-5 py-3 font-semibold text-gray-700">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 bg-white">
                            {orders.map((order, idx) => {
                              const created = order?.date_created || order?.date || order?.created_at;
                              const status = String(order?.status || '—').replace(/[-_]/g, ' ').trim();
                              const totalValue =
                                order?.total ??
                                order?.total_price ??
                                order?.totals?.total_price ??
                                order?.totals?.total;

                              return (
                                <tr key={order?.id ?? created ?? idx} className="align-top">
                                  <td className="px-5 py-4 font-semibold text-gray-900">
                                    #{order?.id ?? '—'}
                                  </td>
                                  <td className="px-5 py-4 text-gray-700">{formatOrderDate(created)}</td>
                                  <td className="px-5 py-4 text-gray-700">{status || '—'}</td>
                                  <td className="px-5 py-4 text-gray-700">
                                    {totalValue != null
                                      ? formatRupees(totalValue)
                                      : formatOrderMoney(order, order?.totals?.total_price)}
                                  </td>
                                  <td className="px-5 py-4">
                                    <button
                                      type="button"
                                      className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full px-4 py-1 text-sm font-semibold mb-2 block w-max"
                                      onClick={() => setActiveTab('Orders')}
                                    >
                                      View
                                    </button>
                                    <button
                                      type="button"
                                      className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full px-4 py-1 text-sm font-semibold mb-2 block w-max disabled:opacity-60 disabled:cursor-not-allowed"
                                      disabled={downloadingOrderId === (order?.id ?? null)}
                                      onClick={() => onDownloadInvoice(order?.id)}
                                    >
                                      {downloadingOrderId === order?.id ? 'Downloading...' : 'Download Invoice'}
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              ) : activeTab === 'Saved Items' ? (
                <div>
                  <h2 className="font-sans font-bold text-xl text-gray-900 mb-6">Saved Items</h2>

                  {savedItems.length === 0 ? (
                    <div className="border border-gray-100 rounded-lg p-6">
                      <p className="font-body text-sm text-gray-600 mb-4">
                        You haven&apos;t saved any items yet.
                      </p>
                      <Link href="/shop/" className="text-blue-600 hover:text-blue-700 underline font-body text-sm">
                        Continue shopping
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {savedItems.map((item) => {
                        const image = resolveProductImageUrl(item?.images?.[0]?.src);
                        const imageAlt = item?.images?.[0]?.alt || item?.name || 'Product';
                        const price = formatProductPrice(item?.prices);

                        return (
                          <div key={item.id} className="border border-gray-100 rounded-lg p-5 flex gap-4 items-center">
                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 flex items-center justify-center">
                              {image ? (
                                <Image src={image} alt={imageAlt || "Purchased item"} fill sizes="48px" className="object-cover" />
                              ) : (
                                <Package className="w-6 h-6 text-gray-400" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-sans font-bold text-sm text-gray-900 truncate">{item.name}</p>
                              <p className="font-body text-xs text-gray-600 mt-1">{price || '—'}</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                <Link
                                  href={`/product/${item.slug}/`}
                                  className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full px-4 py-1 text-sm font-semibold mb-2 block w-max"
                                >
                                  View
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => toggleSavedItem(item)}
                                  className="border border-gray-200 text-gray-700 rounded-full px-4 py-1 text-sm font-semibold hover:bg-gray-50"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : activeTab === 'Address' ? (
                <div className="space-y-6">
                  <h2 className="font-sans font-bold text-xl text-gray-900">Addresses</h2>

                  {addressMessage ? (
                    <p
                      className={`font-body text-sm ${
                        addressMessageIsError ? 'text-red-600' : 'text-green-700'
                      }`}
                    >
                      {addressMessage}
                    </p>
                  ) : null}

                  <div className="border border-gray-100 rounded-lg p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-sans font-bold text-base text-gray-900">Billing address</p>
                        {!isEditingAddress ? (
                          <button
                            type="button"
                            onClick={() => {
                              setAddressMessage(null);
                              setAddressMessageIsError(false);
                              setIsEditingAddress(true);
                            }}
                            className="text-blue-600 hover:text-blue-700 underline font-body text-sm mt-1"
                          >
                            Edit Billing address
                          </button>
                        ) : null}
                      </div>
                    </div>

                    {!isEditingAddress ? (
                      <div className="mt-5 font-body text-sm text-gray-700 leading-relaxed">
                        <p>{displayValue(billingName)}</p>
                        <p>{displayValue(addressForm.billing_address_1)}</p>
                        <p>{billingCityLine || 'Not set'}</p>
                        <p>India</p>
                        <p className="mt-2 text-gray-600">{displayValue(addressForm.billing_phone)}</p>
                        <p className="text-gray-600">{displayEmail || 'Not set'}</p>
                      </div>
                    ) : (
                      <form
                        className="mt-5 space-y-4"
                        onSubmit={(event) => {
                          event.preventDefault();
                          handleAddressUpdate();
                        }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block font-body text-sm text-gray-700 mb-1">First name</label>
                            <input
                              type="text"
                              name="billing_first_name"
                              value={addressForm.billing_first_name}
                              onChange={handleAddressFieldChange}
                              className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                            />
                          </div>
                          <div>
                            <label className="block font-body text-sm text-gray-700 mb-1">Last name</label>
                            <input
                              type="text"
                              name="billing_last_name"
                              value={addressForm.billing_last_name}
                              onChange={handleAddressFieldChange}
                              className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm text-gray-700 mb-1">Street address</label>
                          <input
                            type="text"
                            name="billing_address_1"
                            value={addressForm.billing_address_1}
                            onChange={handleAddressFieldChange}
                            className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block font-body text-sm text-gray-700 mb-1">City</label>
                            <input
                              type="text"
                              name="billing_city"
                              value={addressForm.billing_city}
                              onChange={handleAddressFieldChange}
                              className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                            />
                          </div>
                          <div>
                            <label className="block font-body text-sm text-gray-700 mb-1">State</label>
                            <select
                              name="billing_state"
                              value={addressForm.billing_state}
                              onChange={handleAddressFieldChange}
                              className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300 bg-white"
                            >
                              <option value="">Select state</option>
                              {Object.entries(INDIAN_STATE_CODES).map(([label, code]) => (
                                <option key={code} value={code}>
                                  {label}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block font-body text-sm text-gray-700 mb-1">PIN code</label>
                            <input
                              type="text"
                              name="billing_postcode"
                              value={addressForm.billing_postcode}
                              onChange={handleAddressFieldChange}
                              className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-body text-sm text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            name="billing_phone"
                            value={addressForm.billing_phone}
                            onChange={handleAddressFieldChange}
                            className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                          />
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                          <button
                            type="submit"
                            disabled={isUpdatingAddress}
                            className="bg-cyan-400 text-white rounded-full px-6 py-2 font-bold hover:bg-cyan-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isUpdatingAddress ? 'Saving…' : 'Save Address'}
                          </button>
                          <button
                            type="button"
                            onClick={handleCancelAddressEdit}
                            disabled={isUpdatingAddress}
                            className="border border-gray-200 text-gray-700 rounded-full px-6 py-2 font-bold hover:bg-gray-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <h2 className="font-sans font-bold text-xl text-gray-900">Account details</h2>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-sm text-gray-700 mb-1">First name</label>
                        <input
                          type="text"
                          value={editFirstName}
                          onChange={(e) => setEditFirstName(e.target.value)}
                          className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm text-gray-700 mb-1">Last name</label>
                        <input
                          type="text"
                          value={editLastName}
                          onChange={(e) => setEditLastName(e.target.value)}
                          className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-sm text-gray-700 mb-1">Display name</label>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                      />
                    </div>

                    <div>
                      <label className="block font-body text-sm text-gray-700 mb-1">Email address</label>
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                      />
                    </div>

                    <div className="border border-gray-100 rounded-lg p-6">
                      <p className="font-sans font-bold text-base text-gray-900 mb-4">Password change</p>
                      <div className="space-y-4">
                        <div>
                          <label className="block font-body text-sm text-gray-700 mb-1">Current password</label>
                          <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                          />
                        </div>
                        <div>
                          <label className="block font-body text-sm text-gray-700 mb-1">New password</label>
                          <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                          />
                        </div>
                        <div>
                          <label className="block font-body text-sm text-gray-700 mb-1">Confirm new password</label>
                          <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full rounded-md border border-gray-200 px-4 py-2.5 font-body text-sm outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300"
                          />
                        </div>
                      </div>

                      {passwordMessage ? (
                        <p
                          className={`mt-4 font-body text-sm ${
                            passwordMessageIsError ? 'text-red-600' : 'text-green-700'
                          }`}
                        >
                          {passwordMessage}
                        </p>
                      ) : null}

                      <button
                        type="button"
                        onClick={handlePasswordChange}
                        disabled={isUpdatingPassword}
                        className="mt-4 bg-cyan-400 text-white rounded-full px-6 py-2 font-bold hover:bg-cyan-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isUpdatingPassword ? 'Updating…' : 'Update Password'}
                      </button>
                    </div>

                    {profileError ? (
                      <p className="font-body text-sm text-red-600">{profileError}</p>
                    ) : null}
                    {updateMessage ? (
                      <p className="font-body text-sm text-green-700">{updateMessage}</p>
                    ) : null}

                    <button
                      type="button"
                      onClick={handleUpdateProfile}
                      disabled={isUpdating}
                      className="bg-cyan-400 text-white rounded-full px-6 py-2 font-bold hover:bg-cyan-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isUpdating ? 'Saving…' : 'Save changes'}
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

