'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Package, ShieldCheck, Lock, RotateCcw } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatProductPrice, resolvePaymentRedirectUrl, resolveProductImageUrl } from '../../lib/woocommerce';

const STATES = [
  'Andhra Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu & Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Tamil Nadu',
  'Telangana',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  pincode: '',
  state: '',
};

function getPaymentMethodId(method) {
  return typeof method === 'string' ? method : method?.id;
}

function getPaymentMethodLabel(method) {
  if (typeof method === 'string') {
    if (method === 'phonepe') return 'PhonePe';
    if (method === 'cod') return 'Cash on Delivery';
    return method;
  }
  return method?.title || method?.id || 'Payment';
}

function isAddressComplete(form) {
  return Boolean(
    form.name?.trim() &&
      form.phone?.trim() &&
      form.address?.trim() &&
      form.city?.trim() &&
      form.pincode?.trim() &&
      form.state
  );
}

export default function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    cart,
    isCheckingOut,
    isUpdating,
    error,
    submitCheckout,
    updateCustomer,
    selectShippingRate,
  } = useCart();

  const paymentError = searchParams?.get('payment_error');
  const showPaymentError = paymentError === 'failed' || paymentError === 'cancelled';

  const [form, setForm] = useState(initialForm);
  const [checkoutError, setCheckoutError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [selectedShippingRate, setSelectedShippingRate] = useState(null);
  const [isUpdatingShipping, setIsUpdatingShipping] = useState(false);
  const addressSyncRef = useRef(null);

  const priceMeta = useMemo(
    () => ({
      currency_minor_unit: cart?.totals?.currency_minor_unit ?? 2,
      currency_prefix: cart?.totals?.currency_prefix ?? '₹',
    }),
    [cart?.totals?.currency_minor_unit, cart?.totals?.currency_prefix]
  );

  const shippingPackage = cart?.shipping_rates?.[0];
  const shippingRates = shippingPackage?.shipping_rates || [];
  const paymentMethods = cart?.payment_methods || [];

  useEffect(() => {
    if (!paymentMethods.length) return;

    const ids = paymentMethods.map(getPaymentMethodId);
    if (ids.includes(paymentMethod)) return;

    if (ids.includes('cod')) {
      setPaymentMethod('cod');
    } else {
      setPaymentMethod(ids[0]);
    }
  }, [paymentMethods, paymentMethod]);

  useEffect(() => {
    if (!shippingRates.length) return;

    const validIds = shippingRates.map((rate) => rate.rate_id);
    if (selectedShippingRate && validIds.includes(selectedShippingRate)) return;

    setSelectedShippingRate(shippingRates[0].rate_id);
  }, [shippingRates, selectedShippingRate]);

  useEffect(() => {
    if (!isAddressComplete(form)) return;

    if (addressSyncRef.current) {
      clearTimeout(addressSyncRef.current);
    }

    addressSyncRef.current = setTimeout(async () => {
      try {
        await updateCustomer(form);
      } catch (err) {
        setCheckoutError(err.message || 'Unable to update shipping options.');
      }
    }, 600);

    return () => {
      if (addressSyncRef.current) {
        clearTimeout(addressSyncRef.current);
      }
    };
  }, [form, updateCustomer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingChange = async (rateId) => {
    setSelectedShippingRate(rateId);
    setCheckoutError(null);
    setIsUpdatingShipping(true);

    try {
      if (isAddressComplete(form)) {
        await updateCustomer(form);
      }

      await selectShippingRate(shippingPackage?.package_id ?? 0, rateId);
    } catch (err) {
      setCheckoutError(err.message || 'Unable to update shipping method.');
    } finally {
      setIsUpdatingShipping(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCheckoutError(null);

    try {
      if (isAddressComplete(form)) {
        await updateCustomer(form);
      }

      if (selectedShippingRate) {
        await selectShippingRate(shippingPackage?.package_id ?? 0, selectedShippingRate);
      }

      const responseData = await submitCheckout(form, { payment_method: paymentMethod });

      if (paymentMethod === 'phonepe') {
        const redirectUrl = responseData?.payment_result?.redirect_url;
        if (redirectUrl) {
          window.location.href = resolvePaymentRedirectUrl(redirectUrl);
          return;
        }
      }

      if (paymentMethod === 'cod' && responseData?.order_id) {
        router.push(`/checkout/success?order_id=${encodeURIComponent(responseData.order_id)}`);
      } else if (!responseData?.payment_result?.redirect_url) {
        router.push('/account/');
      }
    } catch (err) {
      setCheckoutError(err.message || 'Checkout failed. Please try again.');
    }
  };

  const items = cart?.items || [];
  const subtotal = cart?.totals?.total_items
    ? formatProductPrice({ price: cart.totals.total_items, ...priceMeta })
    : '₹0';
  const total = cart?.totals?.total_price
    ? formatProductPrice({ price: cart.totals.total_price, ...priceMeta })
    : subtotal;

  const isPhonePe = paymentMethod === 'phonepe';
  const isCod = paymentMethod === 'cod';

  return (
    <main className="pt-20">
      <section className="bg-brand-base py-10 border-b border-brand-text/8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3">
            <Link
              href="/cart/"
              className="inline-flex items-center gap-1.5 font-body text-sm text-brand-text/50 hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to cart
            </Link>
            <span className="text-brand-text/20">/</span>
            <span className="font-body text-sm text-brand-text/50">Checkout</span>
          </div>
          <h1 className="font-sans font-bold text-3xl text-brand-text mt-4">Checkout</h1>
        </div>
      </section>

      <section className="bg-brand-base py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:flex-1 w-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
                <h2 className="font-sans font-bold text-lg text-brand-text mb-6 pb-4 border-b border-brand-text/8">
                  Delivery Address
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {showPaymentError ? (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                      <p className="font-body text-sm text-red-700">
                        Your payment failed or was cancelled. Your cart has been safely restored. Please try a
                        different payment method.
                      </p>
                    </div>
                  ) : null}
                  <div>
                    <label htmlFor="name" className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="form-field"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="form-field"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">
                      Email Address <span className="text-brand-text/30 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="form-field"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">
                      Address <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      required
                      placeholder="House/flat no., building name, street, area"
                      className="form-field resize-none"
                      value={form.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">
                        City <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        required
                        placeholder="Mumbai"
                        className="form-field"
                        value={form.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">
                        Pincode <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="pincode"
                        type="text"
                        name="pincode"
                        required
                        maxLength={6}
                        placeholder="400001"
                        className="form-field"
                        value={form.pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="state" className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">
                      State <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="state"
                      name="state"
                      required
                      className="form-field appearance-none bg-white"
                      value={form.state}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select state
                      </option>
                      {STATES.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:w-[400px] w-full">
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.08)] sticky top-24">
                <h2 className="font-sans font-bold text-lg text-brand-text mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {items.length === 0 ? (
                    <p className="font-body text-sm text-brand-text/50">Your cart is empty.</p>
                  ) : (
                    items.map((item) => (
                      <div key={item.key || item.id} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-surface flex-shrink-0 overflow-hidden flex items-center justify-center">
                          {item.images?.[0]?.src ? (
                            <img
                              src={resolveProductImageUrl(item.images[0].src)}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Package className="w-5 h-5 text-brand-text/30" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-sans font-bold text-sm text-brand-text truncate">{item.name}</p>
                          <p className="font-body text-xs text-brand-text/45 mt-0.5">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-sans font-bold text-sm text-brand-text flex-shrink-0">
                          {formatProductPrice({
                            price: item.totals?.line_total || item.prices?.price,
                            currency_minor_unit: item.prices?.currency_minor_unit ?? 2,
                            currency_prefix: item.prices?.currency_prefix ?? '₹',
                          })}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                <div className="border-t border-brand-text/8 pt-4 mb-4">
                  <div className="flex justify-between font-body text-sm text-brand-text/70">
                    <span>Subtotal</span>
                    <span>{subtotal}</span>
                  </div>
                </div>

                {shippingRates.length > 0 && (
                  <div className="border-t border-brand-text/8 pt-4 mb-4">
                    <p className="font-sans font-bold text-sm text-brand-text mb-3">Shipping Method</p>
                    <fieldset className="space-y-2" disabled={isUpdatingShipping || isUpdating}>
                      {shippingRates.map((rate) => {
                        const ratePrice =
                          Number(rate.price) === 0
                            ? 'Free'
                            : formatProductPrice({ price: rate.price, ...priceMeta });

                        return (
                          <label
                            key={rate.rate_id}
                            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                              selectedShippingRate === rate.rate_id
                                ? 'border-brand-primary bg-brand-primary/5'
                                : 'border-brand-text/10 hover:border-brand-text/20'
                            }`}
                          >
                            <input
                              type="radio"
                              name="shipping_method"
                              value={rate.rate_id}
                              checked={selectedShippingRate === rate.rate_id}
                              onChange={() => handleShippingChange(rate.rate_id)}
                              className="mt-1 accent-brand-primary"
                            />
                            <span className="flex-1 min-w-0">
                              <span className="block font-sans font-bold text-sm text-brand-text">
                                {rate.name}
                              </span>
                              {rate.description ? (
                                <span className="block font-body text-xs text-brand-text/50 mt-0.5">
                                  {rate.description}
                                </span>
                              ) : null}
                            </span>
                            <span className="font-sans font-bold text-sm text-brand-text flex-shrink-0">
                              {ratePrice}
                            </span>
                          </label>
                        );
                      })}
                    </fieldset>
                    {isUpdatingShipping && (
                      <p className="font-body text-xs text-brand-text/45 mt-2">Updating shipping…</p>
                    )}
                  </div>
                )}

                <div className="border-t border-brand-text/8 pt-4 mb-4">
                  <div className="flex justify-between font-sans font-bold text-lg text-brand-text">
                    <span>Total</span>
                    <span>{total}</span>
                  </div>
                  <p className="font-body text-xs text-brand-text/45 mt-1">Inclusive of all taxes (GST)</p>
                </div>

                {paymentMethods.length > 0 && (
                  <div className="border-t border-brand-text/8 pt-4 mb-6">
                    <p className="font-sans font-bold text-sm text-brand-text mb-2">Payment Method</p>
                    <p className="font-body text-xs text-red-500 mb-3">
                      PhonePe is not available. Use Cash On Delivery only.
                    </p>
                    <fieldset className="space-y-2" disabled={isCheckingOut}>
                      {paymentMethods.map((method) => {
                        const methodId = getPaymentMethodId(method);

                        return (
                          <label
                            key={methodId}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                              paymentMethod === methodId
                                ? 'border-brand-primary bg-brand-primary/5'
                                : 'border-brand-text/10 hover:border-brand-text/20'
                            }`}
                          >
                            <input
                              type="radio"
                              name="payment_method"
                              value={methodId}
                              checked={paymentMethod === methodId}
                              onChange={() => setPaymentMethod(methodId)}
                              className="accent-brand-primary"
                            />
                            <span className="font-sans font-bold text-sm text-brand-text flex items-center">
                              {getPaymentMethodLabel(method)}
                              {methodId === 'phonepe' && (
                                <img
                                  src="https://imgstatic.phonepe.com/images/online-merchant-assets/plugins/woocommerce/2529/405/payment_gateway_logo.png"
                                  alt="PhonePe"
                                  className="h-9 object-contain ml-3 inline-block"
                                />
                              )}
                            </span>
                          </label>
                        );
                      })}
                    </fieldset>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2 mb-6 pb-4 border-b border-brand-text/8">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <ShieldCheck className="w-4 h-4 text-brand-secondary" />
                    <span className="font-body text-xs text-brand-text/50 leading-tight">Plastic-free</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Lock className="w-4 h-4 text-brand-primary" />
                    <span className="font-body text-xs text-brand-text/50 leading-tight">Secure</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <RotateCcw className="w-4 h-4 text-brand-primary" />
                    <span className="font-body text-xs text-brand-text/50 leading-tight">7-day returns</span>
                  </div>
                </div>

                {(checkoutError || error) && (
                  <p className="font-body text-sm text-red-500 mb-4 text-center">{checkoutError || error}</p>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isCheckingOut || isUpdatingShipping || isUpdating || items.length === 0}
                  className="w-full py-4 rounded-xl font-sans font-bold text-base text-white transition-colors duration-200 bg-brand-primary hover:bg-[#005580] disabled:opacity-60"
                >
                  {isCheckingOut
                    ? isPhonePe
                      ? 'Redirecting to PhonePe…'
                      : 'Placing order…'
                    : 'Place Order'}
                </button>
                <p className="font-body text-xs text-brand-text/40 mt-4 text-center leading-relaxed">
                  {isPhonePe
                    ? 'You will be redirected to PhonePe to complete payment securely.'
                    : isCod
                      ? 'Pay with cash when your order is delivered.'
                      : 'Complete your order using the selected payment method.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
