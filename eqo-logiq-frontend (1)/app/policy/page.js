import React from 'react';
import PolicyContent from './PolicyContent';

export const metadata = {
  title: 'Shipping, Returns & Privacy Policy',
  description: 'Eqo Logiq shipping policy, returns policy, privacy policy, and terms of service. Free shipping over ₹1,500. 7-day returns on eligible items.',
  openGraph: {
    title: 'Shipping, Returns & Privacy Policy',
    description: 'Eqo Logiq shipping policy, returns policy, privacy policy, and terms of service. Free shipping over ₹1,500. 7-day returns on eligible items.',
    images: [{ url: '/images/hero-banner.png' }],
  },
  twitter: {
    title: 'Shipping, Returns & Privacy Policy',
    description: 'Eqo Logiq shipping policy, returns policy, privacy policy, and terms of service. Free shipping over ₹1,500. 7-day returns on eligible items.',
  },
};

export default function Page() {
  return <PolicyContent />;
}
