'use client';

import React from 'react';
import Link from 'next/link';

export default function PolicyContent() {
  const [activeTab, setActiveTab] = React.useState('shipping');

  const tabClass = (tabId) => {
    return activeTab === tabId
      ? 'border-b-2 border-brand-primary py-4 font-body font-semibold text-sm text-brand-text'
      : 'py-4 font-body font-medium text-sm text-brand-text/50 hover:text-brand-text transition-colors';
  };

  const contentClass = (tabId) => {
    return activeTab === tabId ? 'block' : 'hidden';
  };

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') setActiveTab('privacy');
      else if (hash === '#terms') setActiveTab('terms');
      else if (hash === '#returns') setActiveTab('returns');
      else if (hash === '#shipping') setActiveTab('shipping');
    };

    // Run on initial mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main className="pt-20">
      {/* BACK LINK + HEADER */}
      <div className="max-w-[860px] mx-auto px-6 md:px-12 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 font-body text-sm text-brand-text/50 hover:text-brand-primary transition-colors mb-8">
          Back to Home
        </Link>
      </div>
      <section className="max-w-[860px] mx-auto px-6 md:px-12 pb-6">
        <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-2">Policies &amp; Terms</h1>
        <p className="font-body text-brand-text/55 text-base">Last updated: January 2025</p>
      </section>
      
      {/* POLICY TABS */}
      <div className="max-w-[860px] mx-auto px-6 md:px-12 border-b border-brand-text/10 mb-10 overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          <button className={tabClass('shipping')} onClick={() => setActiveTab('shipping')}>Shipping Policy</button>
          <button className={tabClass('returns')} onClick={() => setActiveTab('returns')}>Returns Policy</button>
          <button className={tabClass('privacy')} onClick={() => setActiveTab('privacy')}>Privacy Policy</button>
          <button className={tabClass('terms')} onClick={() => setActiveTab('terms')}>Terms of Service</button>
        </div>
      </div>

      <section className="max-w-[860px] mx-auto px-6 md:px-12 pb-24">
        {/* SHIPPING POLICY */}
        <div className={contentClass('shipping')}>
          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Shipping Charges</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Shipping charges are applicable as per the courier service used for your order. The total shipping cost is calculated based on the weight, dimensions, and destination of your order and will be displayed during checkout before you confirm your purchase.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Order Processing Time</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            We aim to process and dispatch all orders within 24 hours on business days after receiving payment. You will receive a tracking number via email or phone once your order has been shipped.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Delivery Timeframes</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Delivery usually takes between 2 to 7 business days depending on the distance from our dispatch location. These timeframes are estimates and may vary due to weather conditions, courier delays, or other factors outside our control.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Cash on Delivery</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Cash on delivery is available, but it is not recommended as additional charges may apply from the courier service. We suggest prepaid payment methods to avoid these extra costs.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Courier Preferences</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            If you are unable to receive delivery from a specific courier due to serviceability issues in your area, please let us know and we will arrange a different courier provider for your order. Fast/speed post can also be requested.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">International Shipping</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            We ship to select countries internationally. Please note that any additional customs duties, taxes, and fees applicable at the destination are the responsibility of the customer and are not included in the shipping cost shown at checkout.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Address Accuracy</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Customers must provide accurate and complete shipping information at the time of placing an order. Eqo Logiq is not responsible for delays or lost packages resulting from incorrect or incomplete addresses provided by the customer.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Order Status and Support</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            For assistance with your order status or tracking information, please contact our support team at <Link href="mailto:mail@eqologiq.in" className="text-brand-primary font-semibold hover:underline">mail@eqologiq.in</Link>. If you have any further questions or concerns regarding your shipment, feel free to reach out and we will be happy to help.
          </p>
          
          <p className="mt-8 text-xs text-brand-text/40">Last updated: 12/12/25</p>
        </div>

        {/* RETURNS POLICY */}
        <div className={contentClass('returns')}>
          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Return Window</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Our refund and returns policy lasts 7 days from the date you receive the product. If 7 days have passed since your purchase, we are unable to offer a refund or exchange.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Non-Returnable Items</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Several types of goods are exempt from being returned, including perishable goods such as food and flowers, intimate or sanitary goods, hazardous materials, flammable liquids or gases, and some health and personal care items. Please do not send your purchase back to the manufacturer.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Proof of Purchase</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            A receipt or proof of purchase is required to complete a return. Please ensure you have this ready when contacting us to initiate a return.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Refunds</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If approved, your refund will be processed and a credit will be automatically applied to your original payment method within a certain number of days.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Late or Missing Refunds</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            If you have not received your refund, please first check your bank account or statement again. If you still have not received it, please contact us and we will look into it for you.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Exchanges</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            If you need to exchange an item for the same product, please email <Link href="mailto:mail@eqologiq.in" className="text-brand-primary font-semibold hover:underline">mail@eqologiq.in</Link> and send your item to our business address.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Shipping Returns</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Customers are responsible for paying their own shipping costs when returning an item, unless the item is damaged, defective, or incorrect. Shipping costs are non-refundable in standard return cases.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Need Help?</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            For any questions related to refunds and returns, please contact us at <Link href="mailto:mail@eqologiq.in" className="text-brand-primary font-semibold hover:underline">mail@eqologiq.in</Link>.
          </p>
        </div>

        {/* PRIVACY POLICY */}
        <div className={contentClass('privacy')}>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            This is the Privacy Policy regarding your data and information that is collected by us. It is our responsibility to disclose the details about its collection and usage. We understand the importance and threats when it comes to data protection and want to provide people a shopping experience that respects their privacy.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Information We Receive and Collect</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            We receive information when customers checkout from the website or purchase products through other websites or sources through their billing details. Some embedded content on our pages — such as YouTube videos — may also collect data independently.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">How We Use Your Information</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            We use the information we collect to process your order and to contact you regarding your order, promotions, offers, and feedback. If you prefer not to receive such communications, you can opt out at any time by contacting us on WhatsApp or via email.
          </p>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Data collected by embedded third-party content such as YouTube does not benefit Eqo Logiq and is subject to those platforms' own data policies.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Who We Share Data With</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            We do not share your data outside the organisation. We use the information only for our relationship with customers regarding the trade of products and services.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Data Retention and Deletion</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            If you would like your data to be deleted or would like confirmation of what data we hold about you, please contact us at <Link href="mailto:mail@eqologiq.in" className="text-brand-primary font-semibold hover:underline">mail@eqologiq.in</Link>.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Your Data &amp; Privacy Rights</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Different countries have their own privacy rights and regulations. While India does not currently have the most comprehensive privacy laws, Eqo Logiq aims to take care of user data through the use of open source software and encryption wherever possible.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">Grievance Redressal</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-4">
            For any privacy-related concerns, please contact our grievance officer:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 font-body text-brand-text/70 text-base leading-relaxed">
            <li><strong>Name:</strong> Vaibhav</li>
            <li><strong>Email:</strong> <Link href="mailto:mail@eqologiq.in" className="text-brand-primary font-semibold hover:underline">mail@eqologiq.in</Link></li>
            <li><strong>Phone:</strong> +91 9667691316</li>
          </ul>
        </div>

        {/* TERMS OF SERVICE */}
        <div className={contentClass('terms')}>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            This website is owned and operated by Eqo Logiq. Throughout these Terms &amp; Conditions, "we," "us," and "our" refer to Eqo Logiq. By using this website, you confirm that you are at least 18 years old, or that you have the consent of a parent or legal guardian.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">1. Products</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            We strive to provide accurate and up-to-date information about our products, including descriptions, images, and prices. However, we do not guarantee 100% accuracy, completeness, or reliability, as mistakes are natural. Products are subject to availability and may be discontinued or modified at any time without prior notice. Some images on this website are illustrative only; the actual product may vary slightly in appearance, including due to differences in camera settings or screen calibration.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">2. Orders and Payments</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Placing an order constitutes an offer to purchase the selected products. We may accept or reject any order at our discretion. Prices are listed in Indian Rupees (₹). For orders within India, applicable taxes and shipping charges will be added during checkout. By placing an order, you agree to provide accurate and complete payment information through the payment methods provided on the site.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">3. Shipping and Delivery</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            We aim to process and ship orders promptly, but specific delivery times are not guaranteed. Shipping costs and estimated delivery times are calculated during checkout. Customers are responsible for any customs duties, taxes, or additional charges applicable at the destination.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">4. Returns and Refunds</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            Please contact us within 7 days of receiving your product to request a return or refund. Returned products must be unused, in their original packaging, and in the same condition as received. Refunds will be issued to the original payment method, excluding shipping charges.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">5. Intellectual Property</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            All branding text, images, logos, and trademarks on this website are the property of Eqo Logiq and are protected by applicable law. Content may not be reproduced, distributed, modified, or used without prior written consent, except as stated under the applicable Creative Commons licence.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            To the maximum extent permitted by law, Eqo Logiq is not liable for any indirect, incidental, consequential, or punitive damages arising out of your use of this website or the purchase of products. We do not guarantee that the website will be error-free, uninterrupted, or free from viruses or harmful components. Users are responsible for implementing appropriate security measures on their own devices.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">7. Governing Law and Jurisdiction</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            These Terms &amp; Conditions are governed by the laws of India. Any disputes arising under these terms are subject to the exclusive jurisdiction of the courts of India.
          </p>

          <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-text mt-8 mb-4">8. Amendments</h2>
          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            We may update or modify these terms at any time without prior notice. Changes are effective upon posting to the website. You are responsible for reviewing these terms periodically or before making any new purchase.
          </p>

          <p className="font-body text-brand-text/70 text-base leading-relaxed mb-6">
            By using this website and making a purchase, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions.
          </p>
        </div>
      </section>
    </main>
  );
}
