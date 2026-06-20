'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, Cpu, Heart, ShieldOff } from 'lucide-react';
import Reveal from '../../components/Reveal';

function SafeImage({ src, alt, className, fallbackText, fallbackClassName = 'min-h-[360px]' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex items-center justify-center ${fallbackClassName}`}>
        <p className="text-brand-text/30 font-body text-sm text-center p-8">{fallbackText}</p>
      </div>
    );
  }

  return <Image src={src} alt={alt || "Educational impact graphic"} fill sizes="100vw" className={`object-cover ${className}`} onError={() => setFailed(true)} />;
}

const IMPACT_CARDS = [
  {
    icon: Activity,
    title: 'Hormone Disruption',
    text: 'Compounds including BPA, BPS, and phthalates found in plastic mimic oestrogen and interfere with endocrine function. This has been observed at exposure levels consistent with normal daily use.',
    className: 'impact-card-hormone',
    delay: undefined,
  },
  {
    icon: Cpu,
    title: 'Neurological Impact',
    text: 'Studies in rodent models and emerging human research suggest links between plastic chemical exposure and neurological development, particularly in foetal and early childhood stages.',
    className: 'impact-card-neuro',
    delay: '60ms',
  },
  {
    icon: Heart,
    title: 'Reproductive Health',
    text: 'Endocrine-disrupting compounds from plastics have been associated with reduced fertility markers in both male and female subjects across multiple independent studies.',
    className: 'impact-card-reproductive',
    delay: '120ms',
  },
  {
    icon: ShieldOff,
    title: 'Cellular Exposure',
    text: 'Microplastics have been detected in human blood, lung tissue, and breast milk in studies published between 2021 and 2023. Long-term cellular implications are an active area of research.',
    className: 'impact-card-cellular',
    delay: '180ms',
  },
];

const LIFECYCLE_STEPS = [
  { number: '1', title: '2 minutes.', text: 'The average time a single-use plastic bottle is actively used before being discarded.' },
  { number: '2', title: '450 years.', text: 'The minimum time a PET plastic bottle takes to decompose in landfill conditions.' },
  { number: '3', title: '10 years.', text: 'The designed minimum lifespan of an Eqo Logiq steel bottle under normal daily use.' },
  { number: '4', title: '3,650.', text: 'The approximate number of single-use bottles one Eqo Logiq bottle displaces over its lifetime.', last: true },
];

export default function QrashQourseContent() {
  return (
    <main className="pt-20">
      <section className="relative overflow-hidden min-h-[55vh] flex items-end" style={{ background: '#0D1535' }}>
        <img
          src="/images/about-hero.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top,rgba(13,21,53,0.90) 0%,rgba(13,21,53,0.20) 100%)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-20 w-full">
          <Reveal>
            <p className="kicker mb-6 flex items-center gap-3" style={{ color: 'rgba(147,185,255,0.85)' }}>
              <span className="w-6 h-px" style={{ background: 'rgba(147,185,255,0.85)' }} />
              Knowledge Base
            </p>
            <h1
              className="font-sans font-bold text-white mb-6 leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
            >
              The Qrash Qourse.
              <br />
              What you use every day, explained.
            </h1>
            <p
              className="font-body mb-16 max-w-[600px]"
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: 18, lineHeight: '1.7' }}
            >
              Material science, environmental data, and documented health research relevant to plastic-free daily
              essentials. Sources linked where available.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { stat: '400+', label: 'Plastic bottles per Indian household per year' },
              { stat: '8.76kg', label: 'Plastic waste from water consumption annually per household' },
              { stat: '400 years', label: 'PET bottle decomposition time in landfill' },
            ].map((item, i) => (
              <Reveal key={item.stat} style={{ transitionDelay: i === 0 ? undefined : '100ms' }}>
                <p className="font-sans font-bold mb-2 text-brand-primary" style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)', lineHeight: 1 }}>
                  {item.stat}
                </p>
                <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-40 bg-brand-base">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal className="mb-12">
            <p className="kicker mb-4 flex items-center gap-3 text-brand-primary">
              <span className="w-6 h-px bg-brand-primary" />
              Why Material Comes First
            </p>
            <h2 className="font-sans font-bold text-brand-text leading-tight" style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)' }}>
              What the material is and what it means for daily use.
            </h2>
          </Reveal>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <Reveal className="w-full md:w-[55%]">
              {[
                {
                  title: 'The problem with plastic.',
                  text: 'Plastic leaches chemical compounds into whatever it contains, particularly under heat, UV exposure, and repeated use. BPA is the most discussed but it is far from the only compound of concern. The science on microplastic ingestion through water containers is documented.',
                },
                {
                  title: 'Why stainless steel is different.',
                  text: 'Food-grade 304 stainless steel is chemically inert. It does not react with water, heat, or acidic liquids. It does not leach. It does not degrade over time. The same material grade is used in surgical instruments because its inertness is its defining property.',
                },
                {
                  title: 'What food-grade actually means.',
                  text: 'Not all steel is equal. Food-grade 18/8 stainless steel, 18 percent chromium, 8 percent nickel, is certified safe for direct food and water contact. It is the minimum standard Eqo Logiq uses across every product. Not a marketing term. A material specification.',
                  extra:
                    'Eqo Logiq products have been independently tested to verify the 304 food-grade steel composition. The full test report is available on request. Contact hello@eqologiq.in to receive a copy.',
                },
              ].map((block, i) => (
                <div key={block.title} className={i < 2 ? 'mb-10' : ''}>
                  <p className="font-sans font-bold text-brand-text text-lg mb-3">{block.title}</p>
                  <p className="font-body text-brand-text/70 leading-relaxed text-base">{block.text}</p>
                  {block.extra && (
                    <p className="font-body text-brand-text/70 leading-relaxed text-base mt-4">{block.extra}</p>
                  )}
                </div>
              ))}
            </Reveal>
            <Reveal className="w-full md:w-[45%]" style={{ transitionDelay: '80ms' }}>
              <div className="rounded-2xl overflow-hidden bg-brand-surface">
                <SafeImage
                  src="/images/qrash-feature-1.png"
                  alt="Material science graphic: plastic vs stainless steel"
                  className="w-full h-auto"
                  fallbackText="Material Science Graphic"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-40" style={{ background: '#F2EFE8' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal className="mb-8">
            <p className="kicker mb-4 flex items-center gap-3 text-brand-primary">
              <span className="w-6 h-px bg-brand-primary" />
              What the Research Shows
            </p>
            <h2 className="font-sans font-bold text-brand-text leading-tight" style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)' }}>
              Documented health research on plastic exposure.
            </h2>
          </Reveal>
          <Reveal className="font-body text-brand-text/70 leading-relaxed mb-14" style={{ fontSize: 17, maxWidth: 720 }}>
            Several decades of peer-reviewed research have documented the effects of plastic exposure on human health.
            They are published studies from institutions including the National Institutes of Health, the World Health
            Organization, and universities across India, Europe, and the United States. The following is a summary of
            published research.
          </Reveal>
          <Reveal className="mb-14 flex justify-center">
            <div className="rounded-2xl overflow-hidden w-full bg-brand-surface" style={{ maxWidth: 900 }}>
              <SafeImage
                src="/images/qrash-feature-2.png"
                alt="Health impact research graphic"
                className="w-full"
                fallbackText="Health Research Graphic"
                fallbackClassName="min-h-[300px]"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {IMPACT_CARDS.map(({ icon: Icon, title, text, className, delay }) => (
              <Reveal
                key={title}
                className={`bg-white rounded-xl p-6 impact-card ${className}`}
                style={delay ? { transitionDelay: delay } : undefined}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(0,107,150,0.08)' }}>
                  <Icon className="w-4 h-4 text-brand-primary" />
                </div>
                <p className="font-sans font-bold text-brand-text text-base mb-2">{title}</p>
                <p className="font-body text-brand-text/60 text-sm leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
          <p className="text-center font-body text-[13px] text-brand-text/40">
            This section summarises published peer-reviewed research. Eqo Logiq does not make medical claims. Links to
            source studies available on request.
          </p>
          <p className="text-center font-body text-[13px] text-brand-text/40 mt-4">
            Source studies available on request via hello@eqologiq.in
          </p>
        </div>
      </section>

      <section className="w-full py-24 md:py-40" style={{ background: '#1C1C1C' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal className="mb-14">
            <p className="kicker mb-4 flex items-center gap-3" style={{ color: 'rgba(147,185,255,0.85)' }}>
              <span className="w-6 h-px" style={{ background: 'rgba(147,185,255,0.85)' }} />
              The Numbers
            </p>
            <h2 className="font-sans font-bold text-white leading-tight" style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)' }}>
              Product lifecycle - plastic versus steel.
            </h2>
          </Reveal>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <Reveal className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden" style={{ background: '#2A2A2A' }}>
                <SafeImage
                  src="/images/qrash-feature-3.png"
                  alt="Lifecycle comparison graphic: plastic bottle vs Eqo Logiq bottle"
                  className="w-full h-auto"
                  fallbackText="Lifecycle Comparison Graphic"
                />
              </div>
            </Reveal>
            <Reveal className="w-full md:w-1/2" style={{ transitionDelay: '80ms' }}>
              <div className="space-y-0">
                {LIFECYCLE_STEPS.map((step) => (
                  <div key={step.number} className="flex gap-8">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 text-white font-sans font-bold text-sm">
                        {step.number}
                      </div>
                      {!step.last && <div className="w-px flex-1 my-2" style={{ background: 'rgba(255,255,255,0.12)' }} />}
                    </div>
                    <div className={step.last ? 'pb-4' : 'pb-10'}>
                      <p className="font-sans font-bold text-white text-xl leading-tight mb-2">{step.title}</p>
                      <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p
                className="font-body mt-10 pt-8 border-t text-base font-medium"
                style={{ color: 'rgba(255,255,255,0.80)', borderColor: 'rgba(255,255,255,0.12)' }}
              >
                These figures are based on standard product lifecycle data.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal className="bg-brand-primary py-28 text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <p className="kicker mb-6 flex items-center justify-center gap-3" style={{ color: 'rgba(255,255,255,0.60)' }}>
            <span className="w-6 h-px" style={{ background: 'rgba(255,255,255,0.40)' }} />
            Our Position
            <span className="w-6 h-px" style={{ background: 'rgba(255,255,255,0.40)' }} />
          </p>
          <h2
            className="font-sans font-bold text-white leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(1.75rem,3.5vw,3rem)' }}
          >
            At the junction of personal health and environmental responsibility, material selection comes first.
          </h2>
          <p className="font-body text-white/70 mb-10" style={{ fontSize: 17, lineHeight: '1.8' }}>
            Every Eqo Logiq product begins with a material decision. The environmental outcome follows from that
            decision. The two are not separate considerations.
          </p>
          <hr className="border-white/20 mb-10" />
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <p className="font-sans font-bold text-white mb-2" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1 }}>
                Zero
              </p>
              <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                Plastic in any Eqo Logiq product. By design, not compromise.
              </p>
            </div>
            <div>
              <p className="font-sans font-bold text-white mb-2" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1 }}>
                One
              </p>
              <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                Question we ask before every material decision. Is this the best it can be?
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="w-full py-24 md:py-32 text-center bg-brand-base">
        <Reveal className="max-w-[600px] mx-auto px-6 md:px-12">
          <p className="kicker mb-6 flex items-center justify-center gap-3 text-brand-primary">
            <span className="w-6 h-px bg-brand-primary" />
            Ready to Switch
            <span className="w-6 h-px bg-brand-primary" />
          </p>
          <h2 className="font-sans font-bold text-brand-text mb-5" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: '1.1' }}>
            See the products.
          </h2>
          <p className="font-body text-brand-text/60 mb-10" style={{ fontSize: 16, lineHeight: '1.7' }}>
            Plastic-free steel bottles and daily essentials. Free shipping above ₹1,500.
          </p>
          <Link
            href="/shop/"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-sans font-bold text-white transition-colors mb-6 bg-brand-primary hover:bg-[#005580]"
          >
            Shop the collection.
          </Link>
          <br />
          <Link href="/about/" className="font-body font-medium text-sm text-brand-primary hover:underline">
            Read our story →
          </Link>
        </Reveal>
      </section>

      <section className="w-full py-10 border-t border-brand-text/8 bg-brand-base">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <p className="font-body text-brand-text/60 text-sm">
            More reading on plastic-free living:{' '}
            <Link href="/blog/" className="text-brand-primary font-medium hover:underline">
              Journal
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
