import { EQO_API_BASE, WC_FETCH_OPTIONS } from './woocommerce';

export async function handleDownloadInvoice(orderId, token) {
  if (!orderId) {
    throw new Error('Missing order ID.');
  }

  if (!token) {
    throw new Error('Please sign in to download your invoice.');
  }

  const response = await fetch(
    `${EQO_API_BASE}/download-invoice/${encodeURIComponent(orderId)}`,
    {
      ...WC_FETCH_OPTIONS,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    const message =
      data?.message || data?.code || `Unable to download invoice (${response.status}).`;
    throw new Error(message);
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `invoice-${orderId}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
