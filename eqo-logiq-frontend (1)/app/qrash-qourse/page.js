import QrashQourseContent from './QrashQourseContent';

export const metadata = {
  title: 'The Qrash Qourse | Plastic-Free Living Explained | Eqo Logiq',
  description:
    'The science behind plastic-free living. Materials, health data, and environmental impact — why what you use every day matters more than you think.',
  alternates: { canonical: 'https://eqologiq.kite.space/qrash-qourse/' },
  openGraph: {
    title: 'The Qrash Qourse | Plastic-Free Living Explained | Eqo Logiq',
    description:
      'The science behind plastic-free living. Materials, health data, and environmental impact — why what you use every day matters more than you think.',
    images: [
      {
        url: '/images/about-hero.png',
      },
    ],
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Qrash Qourse: What You Use Every Day, Explained',
  description:
    'Material science, environmental data, and documented health research relevant to plastic-free daily essentials.',
  image:
    '/images/about-hero.png',
  url: 'https://eqologiq.kite.space/qrash-qourse/',
  author: {
    '@type': 'Organization',
    name: 'Eqo Logiq',
    url: 'https://eqologiq.kite.space/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Eqo Logiq',
    logo: {
      '@type': 'ImageObject',
      url: '/images/logo-mark.png',
    },
  },
  dateModified: '2026-06-12',
};

export default function QrashQoursePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Qrash Qourse: What You Use Every Day, Explained",
    "description": "Material science, environmental data, and documented health research relevant to plastic-free daily essentials.",
    "image": "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/v1778268332/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/p791vnujzavosqtj0yla.png",
    "url": "https://eqologiq.kite.space/qrash-qourse.html",
    "author": {
      "@type": "Organization",
      "name": "Eqo Logiq",
      "url": "https://eqologiq.kite.space/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eqo Logiq",
      "logo": {
        "@type": "ImageObject",
        "url": "https://static.kite.ai/image/upload/v1780371329/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/fdqs1mpfbswxcq4trn6k.png"
      }
    },
    "dateModified": "2026-06-12"
  }
  ` }} />
<div>
  {/* SEARCH MODAL */}
  <div id="search-modal" className="fixed inset-0 z-[70] flex flex-col items-center pt-24 px-4 pointer-events-none opacity-0 transition-opacity duration-200" style={{background: 'rgba(34,34,34,0.6)', backdropFilter: 'blur(6px)'}}>
    <div className="w-full max-w-2xl bg-brand-base rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-brand-text/10">
        <i data-lucide="search" className="w-5 h-5 text-brand-text/40 flex-shrink-0" />
        <input id="search-input" type="text" placeholder="Search products, pages…" autoComplete="off" className="flex-1 bg-transparent font-body text-base text-brand-text placeholder-brand-text/35 outline-none" />
        <button id="search-close" className="p-1 text-brand-text/40 hover:text-brand-text transition-colors" aria-label="Close search"><i data-lucide="x" className="w-5 h-5" /></button>
      </div>
      <div id="search-results" className="max-h-[60vh] overflow-y-auto py-2" />
    </div>
  </div>
  <main className="pt-20">
    {/* PAGE HEADER */}
    <section className="relative overflow-hidden min-h-[55vh] flex items-end" style={{background: '#0D1535'}}>
      <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_1600,c_fill,g_auto/v1778268332/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/p791vnujzavosqtj0yla.png" alt className="absolute inset-0 w-full h-full object-cover opacity-40" aria-hidden="true" />
      <div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(13,21,53,0.90) 0%,rgba(13,21,53,0.20) 100%)'}} />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-20 w-full">
        <div className="reveal">
          <p className="kicker mb-6 flex items-center gap-3" style={{color: 'rgba(147,185,255,0.85)'}}><span className="w-6 h-px" style={{background: 'rgba(147,185,255,0.85)'}} />Knowledge Base</p>
          <h1 className="font-sans font-bold text-white mb-6 leading-[1.05]" style={{fontSize: 'clamp(2.5rem,5vw,4.5rem)'}}>The Qrash Qourse.<br />What you use every day, explained.</h1>
          <p className="font-body mb-16 max-w-[600px]" style={{color: 'rgba(255,255,255,0.65)', fontSize: 18, lineHeight: '1.7'}}>Material science, environmental data, and documented health research relevant to plastic-free daily essentials. Sources linked where available.</p>
        </div>
        {/* Stat callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 reveal" style={{transitionDelay: '100ms'}}>
          <div>
            <p className="font-sans font-bold mb-2" style={{fontSize: 'clamp(2.5rem,4vw,3.5rem)', lineHeight: 1, color: '#006B96'}}>400+</p>
            <p className="font-body text-sm" style={{color: 'rgba(255,255,255,0.55)'}}>Plastic bottles per Indian household per year</p>
          </div>
          <div>
            <p className="font-sans font-bold mb-2" style={{fontSize: 'clamp(2.5rem,4vw,3.5rem)', lineHeight: 1, color: '#006B96'}}>8.76kg</p>
            <p className="font-body text-sm" style={{color: 'rgba(255,255,255,0.55)'}}>Plastic waste from water consumption annually per household</p>
          </div>
          <div>
            <p className="font-sans font-bold mb-2" style={{fontSize: 'clamp(2.5rem,4vw,3.5rem)', lineHeight: 1, color: '#006B96'}}>400 years</p>
            <p className="font-body text-sm" style={{color: 'rgba(255,255,255,0.55)'}}>PET bottle decomposition time in landfill</p>
          </div>
        </div>
      </div>
    </section>
    {/* SECTION ONE: THE MATERIAL QUESTION */}
    <section className="w-full py-24 md:py-40" style={{background: '#F7F5F0'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="reveal mb-12">
          <p className="kicker mb-4 flex items-center gap-3" style={{color: '#006B96'}}><span className="w-6 h-px" style={{background: '#006B96'}} />Why Material Comes First</p>
          <h2 className="font-sans font-bold text-brand-text leading-tight" style={{fontSize: 'clamp(2rem,3.5vw,2.75rem)'}}>What the material is and what it means for daily use.</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left: text */}
          <div className="w-full md:w-[55%] reveal">
            <div className="mb-10">
              <p className="font-sans font-bold text-brand-text text-lg mb-3">The problem with plastic.</p>
              <p className="font-body text-brand-text/70 leading-relaxed text-base">Plastic leaches chemical compounds into whatever it contains, particularly under heat, UV exposure, and repeated use. BPA is the most discussed but it is far from the only compound of concern. The science on microplastic ingestion through water containers is documented.</p>
            </div>
            <div className="mb-10">
              <p className="font-sans font-bold text-brand-text text-lg mb-3">Why stainless steel is different.</p>
              <p className="font-body text-brand-text/70 leading-relaxed text-base">Food-grade 304 stainless steel is chemically inert. It does not react with water, heat, or acidic liquids. It does not leach. It does not degrade over time. The same material grade is used in surgical instruments because its inertness is its defining property.</p>
            </div>
            <div>
              <p className="font-sans font-bold text-brand-text text-lg mb-3">What food-grade actually means.</p>
              <p className="font-body text-brand-text/70 leading-relaxed text-base">Not all steel is equal. Food-grade 18/8 stainless steel, 18 percent chromium, 8 percent nickel, is certified safe for direct food and water contact. It is the minimum standard Eqo Logiq uses across every product. Not a marketing term. A material specification.</p>
              <p className="font-body text-brand-text/70 leading-relaxed text-base mt-4">Eqo Logiq products have been independently tested to verify the 304 food-grade steel composition. The full test report is available on request. Contact mail@eqologiq.in to receive a copy.</p>
            </div>
          </div>
          {/* Right: graphic */}
          <div className="w-full md:w-[45%] reveal" style={{transitionDelay: '80ms'}}>
            <div className="rounded-2xl overflow-hidden" style={{background: '#EAE6DF'}}>
              <img src="/images/impact-material-science.jpg" alt="Material science graphic: plastic vs stainless steel" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* SECTION TWO: THE HEALTH REALITY */}
    <section className="w-full py-24 md:py-40" style={{background: '#F2EFE8'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="reveal mb-8">
          <p className="kicker mb-4 flex items-center gap-3" style={{color: '#006B96'}}><span className="w-6 h-px" style={{background: '#006B96'}} />What the Research Shows</p>
          <h2 className="font-sans font-bold text-brand-text leading-tight" style={{fontSize: 'clamp(2rem,3.5vw,2.75rem)'}}>Documented health research on plastic exposure.</h2>
        </div>
        <p className="font-body text-brand-text/70 leading-relaxed mb-14 reveal" style={{fontSize: 17, maxWidth: 720}}>Several decades of peer-reviewed research have documented the effects of plastic exposure on human health. They are published studies from institutions including the National Institutes of Health, the World Health Organization, and universities across India, Europe, and the United States. The following is a summary of published research.</p>
        {/* Health graphic full width */}
        <div className="reveal mb-14 flex justify-center">
          <div className="rounded-2xl overflow-hidden w-full" style={{maxWidth: 900, background: '#EAE6DF'}}>
            <img src="/images/impact-health-research.png" alt="Health impact research graphic" className="w-full" />
          </div>
        </div>
        {/* Impact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div className="bg-white rounded-xl p-6 reveal impact-card impact-card-hormone">
            <div className="w-8 h-8 rounded-full flex items-center justify-center mb-5" style={{background: 'rgba(0,107,150,0.08)'}}>
              <i data-lucide="activity" className="w-4 h-4" style={{color: '#006B96'}} />
            </div>
            <p className="font-sans font-bold text-brand-text text-base mb-2">Hormone Disruption</p>
            <p className="font-body text-brand-text/60 text-sm leading-relaxed">Compounds including BPA, BPS, and phthalates found in plastic mimic oestrogen and interfere with endocrine function. This has been observed at exposure levels consistent with normal daily use.</p>
          </div>
          <div className="bg-white rounded-xl p-6 reveal impact-card impact-card-neuro" style={{transitionDelay: '60ms'}}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center mb-5" style={{background: 'rgba(0,107,150,0.08)'}}>
              <i data-lucide="cpu" className="w-4 h-4" style={{color: '#006B96'}} />
            </div>
            <p className="font-sans font-bold text-brand-text text-base mb-2">Neurological Impact</p>
            <p className="font-body text-brand-text/60 text-sm leading-relaxed">Studies in rodent models and emerging human research suggest links between plastic chemical exposure and neurological development, particularly in foetal and early childhood stages.</p>
          </div>
          <div className="bg-white rounded-xl p-6 reveal impact-card impact-card-reproductive" style={{transitionDelay: '120ms'}}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center mb-5" style={{background: 'rgba(0,107,150,0.08)'}}>
              <i data-lucide="heart" className="w-4 h-4" style={{color: '#006B96'}} />
            </div>
            <p className="font-sans font-bold text-brand-text text-base mb-2">Reproductive Health</p>
            <p className="font-body text-brand-text/60 text-sm leading-relaxed">Endocrine-disrupting compounds from plastics have been associated with reduced fertility markers in both male and female subjects across multiple independent studies.</p>
          </div>
          <div className="bg-white rounded-xl p-6 reveal impact-card impact-card-cellular" style={{transitionDelay: '180ms'}}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center mb-5" style={{background: 'rgba(0,107,150,0.08)'}}>
              <i data-lucide="shield-off" className="w-4 h-4" style={{color: '#006B96'}} />
            </div>
            <p className="font-sans font-bold text-brand-text text-base mb-2">Cellular Exposure</p>
            <p className="font-body text-brand-text/60 text-sm leading-relaxed">Microplastics have been detected in human blood, lung tissue, and breast milk in studies published between 2021 and 2023. Long-term cellular implications are an active area of research.</p>
          </div>
        </div>
        <p className="text-center font-body" style={{fontSize: 13, color: 'rgba(34,34,34,0.40)'}}>This section summarises published peer-reviewed research. Eqo Logiq does not make medical claims. Links to source studies available on request.</p>
        <p className="text-center font-body mt-4" style={{fontSize: 13, color: 'rgba(34,34,34,0.40)'}}>Source studies available on request via mail@eqologiq.in</p>
      </div>
    </section>
    {/* SECTION THREE: THE LIFECYCLE */}
    <section className="w-full py-24 md:py-40" style={{background: '#1C1C1C'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="reveal mb-14">
          <p className="kicker mb-4 flex items-center gap-3" style={{color: 'rgba(147,185,255,0.85)'}}><span className="w-6 h-px" style={{background: 'rgba(147,185,255,0.85)'}} />The Numbers</p>
          <h2 className="font-sans font-bold text-white leading-tight" style={{fontSize: 'clamp(2rem,3.5vw,2.75rem)'}}>Product lifecycle - plastic versus steel.</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left: lifecycle graphic */}
          <div className="w-full md:w-1/2 reveal">
            <div className="rounded-2xl overflow-hidden" style={{background: '#2A2A2A'}}>
              <img src="/images/impact-lifecycle.png" alt="Lifecycle comparison graphic: plastic bottle vs Eqo Logiq bottle" className="w-full h-auto" />
            </div>
          </div>
          {/* Right: timeline */}
          <div className="w-full md:w-1/2 reveal" style={{transitionDelay: '80ms'}}>
            <div className="space-y-0">
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 text-white font-sans font-bold text-sm">1</div>
                  <div className="w-px flex-1 my-2" style={{background: 'rgba(255,255,255,0.12)'}} />
                </div>
                <div className="pb-10">
                  <p className="font-sans font-bold text-white text-xl leading-tight mb-2">2 minutes.</p>
                  <p className="font-body text-sm" style={{color: 'rgba(255,255,255,0.60)'}}>The average time a single-use plastic bottle is actively used before being discarded.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 text-white font-sans font-bold text-sm">2</div>
                  <div className="w-px flex-1 my-2" style={{background: 'rgba(255,255,255,0.12)'}} />
                </div>
                <div className="pb-10">
                  <p className="font-sans font-bold text-white text-xl leading-tight mb-2">450 years.</p>
                  <p className="font-body text-sm" style={{color: 'rgba(255,255,255,0.60)'}}>The minimum time a PET plastic bottle takes to decompose in landfill conditions.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 text-white font-sans font-bold text-sm">3</div>
                  <div className="w-px flex-1 my-2" style={{background: 'rgba(255,255,255,0.12)'}} />
                </div>
                <div className="pb-10">
                  <p className="font-sans font-bold text-white text-xl leading-tight mb-2">10 years.</p>
                  <p className="font-body text-sm" style={{color: 'rgba(255,255,255,0.60)'}}>The designed minimum lifespan of an Eqo Logiq steel bottle under normal daily use.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 text-white font-sans font-bold text-sm">4</div>
                </div>
                <div className="pb-4">
                  <p className="font-sans font-bold text-white text-xl leading-tight mb-2">3,650.</p>
                  <p className="font-body text-sm" style={{color: 'rgba(255,255,255,0.60)'}}>The approximate number of single-use bottles one Eqo Logiq bottle displaces over its lifetime.</p>
                </div>
              </div>
            </div>
            <p className="font-body mt-10 pt-8 border-t" style={{color: 'rgba(255,255,255,0.80)', fontSize: 16, fontWeight: 500, borderColor: 'rgba(255,255,255,0.12)'}}>These figures are based on standard product lifecycle data.</p>
          </div>
        </div>
      </div>
    </section>
    {/* SECTION FOUR: OUR POSITION */}
    <section className="bg-brand-primary py-28 text-center px-6 reveal">
      <div className="max-w-[800px] mx-auto">
        <p className="kicker mb-6 flex items-center justify-center gap-3" style={{color: 'rgba(255,255,255,0.60)'}}><span className="w-6 h-px" style={{background: 'rgba(255,255,255,0.40)'}} />Our Position<span className="w-6 h-px" style={{background: 'rgba(255,255,255,0.40)'}} /></p>
        <h2 className="font-sans font-bold text-white leading-[1.05] mb-8" style={{fontSize: 'clamp(1.75rem,3.5vw,3rem)'}}>At the junction of personal health and environmental responsibility, material selection comes first.</h2>
        <p className="font-body text-white/70 mb-10" style={{fontSize: 17, lineHeight: '1.8'}}>Every Eqo Logiq product begins with a material decision. The environmental outcome follows from that decision. The two are not separate considerations.</p>
        <hr style={{borderColor: 'rgba(255,255,255,0.20)', marginBottom: '2.5rem'}} />
        <div className="grid grid-cols-2 gap-8 md:gap-16">
          <div>
            <p className="font-sans font-bold text-white mb-2" style={{fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1}}>Zero</p>
            <p className="font-body text-sm" style={{color: 'rgba(255,255,255,0.60)'}}>Plastic in any Eqo Logiq product. By design, not compromise.</p>
          </div>
          <div>
            <p className="font-sans font-bold text-white mb-2" style={{fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1}}>One</p>
            <p className="font-body text-sm" style={{color: 'rgba(255,255,255,0.60)'}}>Question we ask before every material decision. Is this the best it can be?</p>
          </div>
        </div>
      </div>
    </section>
    {/* SECTION FIVE: CLOSING CTA */}
    <section className="w-full py-24 md:py-32 text-center" style={{background: '#F7F5F0'}}>
      <div className="max-w-[600px] mx-auto px-6 md:px-12 reveal">
        <p className="kicker mb-6 flex items-center justify-center gap-3" style={{color: '#006B96'}}><span className="w-6 h-px" style={{background: '#006B96'}} />Ready to Switch<span className="w-6 h-px" style={{background: '#006B96'}} /></p>
        <h2 className="font-sans font-bold text-brand-text mb-5" style={{fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: '1.1'}}>See the products.</h2>
        <p className="font-body text-brand-text/60 mb-10" style={{fontSize: 16, lineHeight: '1.7'}}>Plastic-free steel bottles and daily essentials. Free shipping above ₹1,500.</p>
        <a href="/shop/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-sans font-bold text-white transition-colors mb-6" style={{background: '#006B96'}} onmouseover="this.style.background='#005580'" onmouseout="this.style.background='#006B96'">Shop the collection.</a>
        <br />
        <a href="/about/" className="font-body font-medium text-sm hover:underline" style={{color: '#006B96'}}>Read our story →</a>
      </div>
    </section>
    {/* Internal link: Journal */}
    <section className="w-full py-10 border-t border-brand-text/8" style={{background: '#F7F5F0'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <p className="font-body text-brand-text/60 text-sm">More reading on plastic-free living: <a href="/blog/" className="text-brand-primary font-medium hover:underline">Journal</a></p>
      </div>
    </section>
  </main>
</div>

</>
  );
}
