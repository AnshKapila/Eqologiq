'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import Reveal from '../../components/Reveal';

const FAQ_CATEGORIES = [
  { id: 'products', label: 'Products' },
  { id: 'orders', label: 'Orders & Delivery' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'returns', label: 'Returns' },
];

const FAQ_DATA = {
  products: {
    title: 'Products',
    items: [
      {
        question: 'Are the bottles truly food-grade? What does that mean?',
        answer:
          "Yes. Our bottles use 18/8 stainless steel, which means 18% chromium and 8% nickel. This is the same grade used in surgical instruments and high-quality cookware. It will not leach chemicals into your water, won't impart taste, and won't corrode under normal use. The cap gasket is food-grade silicone, not rubber.",
      },
      {
        question: 'How long does the insulation actually work in hot Indian weather?',
        answer:
          "We test at 42°C ambient temperature. In those conditions, cold water stays cold for a minimum of 18 hours. In a typical air-conditioned office or cooler environment, you'll easily hit the 24-hour mark. Hot liquids stay hot for 12 hours. These are real test numbers, not claims under ideal lab conditions.",
      },
      {
        question: 'Do the bamboo toothbrushes really have vegan bristles?',
        answer:
          "Yes. Most bamboo toothbrushes use boar-hair bristles, which are not vegan. Ours use nylon-6 bristles with a charcoal infusion. They're synthetic, durable, and clean effectively without any animal byproduct. The handle is 100% bamboo and compostable. The bristles should be removed and disposed of separately before composting the handle.",
      },
      {
        question: 'How do I care for the copper tongue cleaner?',
        answer:
          'Rinse under running water after each use. Occasionally scrub with a small amount of salt and lime juice to remove any tarnish. Copper naturally oxidises and the tarnish is harmless, but if you prefer it bright, a 30-second salt-lime scrub restores it immediately. Do not use harsh chemical cleaners on it. Store dry.',
      },
      {
        question: 'Can I put carbonated drinks or hot coffee in the Core Bottle?',
        answer:
          'Yes to hot coffee. It works brilliantly and stays hot for 12 hours. For carbonated drinks, we recommend not fully sealing the lid immediately after filling, as pressure can build. Let it settle for 30 seconds, then seal. The bottle handles carbonated liquids fine; just be aware of pressure when opening.',
      },
    ],
  },
  orders: {
    title: 'Orders & Delivery',
    items: [
      {
        question: 'How long does delivery take?',
        answer:
          'Standard delivery within metro cities (Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Pune) takes 3–5 business days. Tier-2 cities and other areas take 5–7 business days. Express delivery is available at checkout for an additional fee and delivers within 1–2 business days in metros.',
      },
      {
        question: 'What are the shipping charges?',
        answer:
          'Shipping is free on all orders above ₹1,500. Below that, a flat shipping fee of ₹79 applies. We ship with Delhivery and Shiprocket partners depending on your pin code. A tracking link will be emailed to you within 24 hours of dispatch.',
      },
      {
        question: 'Can I modify or cancel my order after placing it?',
        answer:
          "You can modify or cancel within 2 hours of placing your order by emailing us at mail@eqologiq.in with your order number. After that, the order enters the fulfilment queue and we cannot guarantee a change. If the order has already shipped, you'll need to use our returns process after receiving it.",
      },
      {
        question: 'Do you ship outside India?',
        answer:
          'Not yet. We currently ship within India only. International shipping is on the roadmap for 2025. If you\'re based outside India and want to be notified when we launch there, drop your email on our contact page and mention "International Shipping" in the message.',
      },
    ],
  },
  sustainability: {
    title: 'Sustainability',
    items: [
      {
        question: 'Is the packaging really plastic-free?',
        answer:
          "Yes. Every Eqo Logiq order ships in 100% recycled kraft cardboard with no bubble wrap, no plastic inserts, no plastic tape. The void fill is shredded paper. Even the sticker on the box uses water-based adhesive. If you find any plastic in an Eqo Logiq package, we want to hear about it immediately. That's a fulfilment error on our end.",
      },
      {
        question: 'What happens to the bottle at end of life?',
        answer:
          "Stainless steel is 100% recyclable and retains its properties indefinitely through the recycling process. When your bottle has genuinely reached the end of its life, you can drop it off at any scrap metal dealer in India (raddiwalas accept steel). We're building a take-back programme for 2025 that will handle this more formally.",
      },
      {
        question: 'Do you donate to environmental causes?',
        answer:
          'Yes. ₹25 from every Core Bottle sold goes to NGO partners working on clean water access in tier-2 cities across Maharashtra and Rajasthan. We publish an annual impact report with exact numbers, not just vague claims. You can read the latest report on our Impact page.',
      },
      {
        question: 'Where are the products manufactured?',
        answer:
          "The Core Bottle is manufactured in Gujarat. The bamboo brushes are manufactured in Tamil Nadu. The copper tongue cleaners are made by a family-run workshop in Rajasthan that has been working with copper for three generations. We visit every supplier and don't outsource that responsibility to auditors alone.",
      },
    ],
  },
  returns: {
    title: 'Returns',
    items: [
      {
        question: 'What is your return policy?',
        answer:
          "We offer a 7-day return window from the date of delivery. Products must be in original condition, unused, and with original packaging. Oral care products (toothbrushes, tongue cleaners) are non-returnable for hygiene reasons. If a product arrives damaged or defective, we'll replace it at no charge regardless of the 7-day window.",
      },
      {
        question: 'How do I initiate a return?',
        answer:
          "Email mail@eqologiq.in with your order number and the reason for return. We'll respond within 24 hours with a prepaid return label and instructions. You don't need to print anything. You can QR-scan the label at most courier drop-off points. Refunds are processed within 5–7 business days of receiving the return.",
      },
      {
        question: 'My bottle arrived dented. What do I do?',
        answer:
          "Email us at mail@eqologiq.in with a photo of the damage and your order number. We'll dispatch a replacement within 2 business days, free of charge. You don't need to return the damaged item. We'll arrange collection or ask you to dispose of it responsibly if it's not worth the shipping carbon.",
      },
      {
        question: 'Can I exchange a colour or size instead of returning?',
        answer:
          "Yes. Contact us within 7 days of delivery and we'll process an exchange. The returned item must be in original condition. We'll cover the return shipping; you pay the standard shipping on the replacement if the order total is below ₹1,500 after the exchange.",
      },
    ],
  },
};

function FaqAccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]${isOpen ? ' open' : ''}`}>
      <button type="button" className="faq-trigger w-full flex items-center justify-between p-6 text-left" onClick={onToggle}>
        <span className="font-body font-medium text-brand-text">{question}</span>
        <Plus className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" />
      </button>
      <div className="faq-answer px-6 pb-6">
        <p className="font-body text-brand-text/65 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqContent() {
  const [activeSection, setActiveSection] = useState('products');
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleToggleQuestion = (sectionId, index) => {
    const key = `${sectionId}-${index}`;
    setOpenQuestion((current) => (current === key ? null : key));
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setOpenQuestion(null);
  };

  return (
    <main className="pt-20">
      <section className="bg-brand-base py-16 md:py-24 border-b border-brand-text/8">
        <Reveal className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="kicker text-brand-primary mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-brand-primary" />
            Support
          </p>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-text mb-4">Questions, answered.</h1>
          <p className="font-body text-brand-text/60 text-lg">If something is not here, reach us directly.</p>
        </Reveal>
      </section>

      <section className="bg-brand-base py-8 border-b border-brand-text/8 sticky top-[72px] z-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {FAQ_CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleSectionChange(id)}
              className={`faq-cat-btn px-6 py-2 rounded-full border font-body font-medium text-sm whitespace-nowrap ${
                activeSection === id
                  ? 'active border-brand-primary'
                  : 'border-brand-text/20 text-brand-text/70'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-brand-base py-16 md:py-24">
        <div className="max-w-[860px] mx-auto px-6 md:px-12">
          {FAQ_CATEGORIES.map(({ id }) => {
            const section = FAQ_DATA[id];
            if (activeSection !== id) return null;

            return (
              <Reveal key={id}>
                <h2 className="font-sans font-bold text-2xl text-brand-text mb-8">{section.title}</h2>
                <div className="space-y-4">
                  {section.items.map((item, index) => (
                    <FaqAccordionItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openQuestion === `${id}-${index}`}
                      onToggle={() => handleToggleQuestion(id, index)}
                    />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Reveal className="bg-brand-surface py-20 border-t border-brand-text/8">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-sans font-bold text-3xl text-brand-text mb-4">Still have a question?</h2>
          <p className="font-body text-brand-text/60 mb-8">
            We typically respond within 24 hours. If it&apos;s about a bulk order, mention that in the subject line and
            we&apos;ll prioritise it.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-sans font-bold rounded-xl hover:bg-[#005580] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
