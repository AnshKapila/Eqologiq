'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '../../components/Reveal';

const TIMELINE_ITEMS = [
  {
    id: '2022',
    year: '2022',
    index: '01',
    heading: 'The decision.',
    body: 'After deciding to pursue sustainability as a career, the search began for plastic-free daily essentials. It was surprising to find that not a single steel bottle in the market was completely free of plastic. No matter which bottle you picked, there was plastic in the cap or the coating.',
  },
  {
    id: '2023',
    year: '2023',
    index: '02',
    heading: 'The first bottle.',
    body: 'Introduced our bottle into a crowded market of water bottles. Reach was slow to begin with.',
  },
  {
    id: '2024',
    year: '2024',
    index: '03',
    heading: 'Learning out loud.',
    body: 'We made mistakes. From the beginning we were not able to deliver a fully plastic-free experience: there was plastic left in places we had not resolved yet. We came back with a better bottle, more options, and a product that was finally completely plastic-free.',
  },
  {
    id: '2025',
    year: '2025',
    index: '04',
    heading: 'Early traction.',
    body: 'Started seeing traction, trust, and repeat customers. Growing from feedback.',
  },
  {
    id: 'now',
    year: 'Now',
    index: '→',
    indexStyle: { color: 'rgba(0,107,150,0.12)' },
    heading: 'Improving and expanding.',
    body: 'Working on improving the experience and building on what is working.',
  },
];

function TimelineItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`tl-item${isOpen ? ' tl-open' : ''}`}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="tl-track" />
      <span className="tl-year">{item.year}</span>
      <span className="tl-index" style={item.indexStyle}>
        {item.index}
      </span>
      <div className="tl-content">
        <h3 className="tl-heading">{item.heading}</h3>
        <div className="tl-body">
          <p className="tl-body-inner">{item.body}</p>
        </div>
      </div>
      <div className="tl-arrow">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  );
}

export default function AboutContent() {
  const [openTimelineId, setOpenTimelineId] = useState(null);

  const handleTimelineToggle = (id) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) return;
    setOpenTimelineId((current) => (current === id ? null : id));
  };

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden min-h-[55vh] flex items-end" style={{ background: '#0D1F0E' }}>
        <img
          src="/images/about-hero.png"
          alt="Eqo Logiq lifestyle"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top,rgba(13,31,14,0.9) 0%,rgba(13,31,14,0.2) 100%)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          <Reveal className="active">
            <p className="kicker mb-6 flex items-center gap-3" style={{ color: '#A8E6A3' }}>
              <span className="w-6 h-px" style={{ background: '#A8E6A3' }} />
              Our Story
            </p>
            <h1 className="font-sans font-bold text-4xl md:text-6xl text-white leading-[1.05] tracking-tight max-w-3xl">
              Eqo Logiq makes plastic-free steel bottles and daily essentials.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-base py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <Reveal className="lg:w-5/12">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-surface">
                <img
                  src="/images/about-founder.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.1)', transformOrigin: 'top center', objectPosition: 'top' }}
                />
              </div>
            </Reveal>
            <Reveal className="lg:w-7/12" style={{ transitionDelay: '100ms' }}>
              <p className="kicker text-brand-primary mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-brand-primary" />A note from our founder
              </p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-10 leading-tight">
                Health and sustainability were always important to me, until I saw how badly the basics were failing both.
              </h2>
              <div className="space-y-6 font-body text-brand-text/70 leading-relaxed text-lg">
                <p>Being into health &amp; sustainability from an early age, after reading about the damage to us and the environment.</p>
                <p>
                  I was shocked to see there&apos;s still no truly plastic-free option in something as basic and necessary as water bottle
                  considering that its the one thing we consume the most and also see being littered the most.
                </p>
                <p>
                  And whenever shopping for sustainable its easier to see &apos;green branding and claims&apos; but hard to see the real
                  information about the material used.
                </p>
                <p>So to bridge the gap and make an impact I started Eqo Logiq.</p>
                <p>Homegrown and Bootstrapped.</p>
              </div>
              <div className="mt-10 pt-8 border-t border-brand-text/10">
                <p className="font-sans font-bold text-lg text-brand-text">Vaibhav</p>
                <p className="font-body text-sm text-brand-text/50 mt-1">Founder, Eqo Logiq</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 overflow-hidden" style={{ background: '#F2EFE8' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <Reveal className="w-full lg:w-[44%] flex-shrink-0">
              <div className="relative mx-auto" style={{ maxWidth: 420, minHeight: 480 }}>
                <div
                  className="absolute top-0 right-0 w-[72%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(34,34,34,0.12)]"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src="/images/about-hero-portrait.png"
                    alt="Eqo Logiq products — quality materials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 w-[62%] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(34,34,34,0.16)]"
                  style={{ aspectRatio: '2/3', zIndex: 2 }}
                >
                  <img
                    src="/images/daily-use-wide.png"
                    alt="Eqo Logiq — intentional daily use"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-primary" />
                </div>
              </div>
            </Reveal>
            <Reveal className="w-full lg:w-[56%]" style={{ transitionDelay: '100ms' }}>
              <p className="kicker mb-6 flex items-center gap-3 text-brand-primary">
                <span className="w-6 h-px bg-brand-primary" />
                Our Principles
              </p>
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-brand-text leading-[1.05] tracking-tight mb-6">
                What we use and why.
              </h2>
              <p className="font-body text-brand-text/60 text-base leading-relaxed mb-10 max-w-md">
                Every product uses 304 food-grade stainless steel or food-grade silicone. No plastic in any component.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
                {[
                  'Tested for daily use including Indian summer conditions.',
                  '304 food-grade stainless steel, food-grade silicone, no plastic.',
                  'Tested for Indian climate and daily use conditions.',
                  'Designed for years of daily use, not seasonal replacement.',
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0,107,150,0.1)' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#006B96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="font-sans font-bold text-sm text-brand-text">{text}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-brand-text/10 mb-8" />
              <div className="flex items-center justify-between gap-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-brand-surface flex items-center justify-center font-bold text-brand-text text-sm">
                    V
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-brand-text">Vaibhav</p>
                    <p className="font-body text-xs text-brand-text/45">Founder, Eqo Logiq</p>
                  </div>
                </div>
                <Link
                  href="/shop/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors duration-200"
                >
                  Shop the Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-base py-24 md:py-40 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal className="mb-16">
            <p className="kicker text-brand-primary mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-brand-primary" />
              How We Got Here
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-brand-text">From the Beginning</h2>
          </Reveal>
          <Reveal className="relative">
            {TIMELINE_ITEMS.map((item) => (
              <TimelineItem
                key={item.id}
                item={item}
                isOpen={openTimelineId === item.id}
                onToggle={() => handleTimelineToggle(item.id)}
              />
            ))}
          </Reveal>
        </div>
      </section>

      <Reveal className="bg-brand-primary py-28 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">Ready to switch?</h2>
          <p className="font-body text-white/70 text-lg mb-10">
            Browse the full range. Free shipping above ₹1,500. Returns within 7 days.
          </p>
          <Link
            href="/shop/"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-primary font-sans font-bold text-base rounded-xl hover:bg-brand-surface transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
