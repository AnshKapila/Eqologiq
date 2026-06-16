import Link from 'next/link';
import Reveal from '../../../components/Reveal';

const POST = {
  slug: 'example-post',
  title: `The math behind switching to a reusable bottle, and why it's simpler than you think.`,
  shortTitle: 'The math behind switching',
  description:
    `We ran the numbers on plastic bottle consumption for a typical Indian household. The results are not dramatic, they're just arithmetic.`,
  category: 'Impact',
  coverImage: '/images/feature-lifestyle.png',
  coverAlt: 'Eqo Logiq Core Bottle in use',
};

export function generateMetadata({ params }) {
  if (params?.slug !== POST.slug) return {};
  return {
    title: `The math behind switching to a reusable bottle | Eqo Logiq Journal`,
    description: POST.description,
    alternates: { canonical: `https://eqologiq.kite.space/blog/${POST.slug}/` },
    openGraph: {
      title: `The math behind switching to a reusable bottle | Eqo Logiq Journal`,
      description: POST.description,
      images: [{ url: POST.coverImage }],
    },
  };
}

export function generateStaticParams() {
  return [{ slug: 'example-post' }];
}

export default function Page({ params }) {
  if (params?.slug !== POST.slug) {
    return (
      <main className="pt-28 pb-24 bg-brand-base">
        <div className="max-w-[780px] mx-auto px-6 md:px-12">
          <h1 className="font-sans font-bold text-3xl text-brand-text">Post not found</h1>
          <p className="font-body text-brand-text/60 mt-3">
            This article hasn&apos;t been migrated yet.
          </p>
          <Link href="/blog/" className="inline-flex mt-6 text-brand-primary font-body font-medium hover:underline">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <div className="max-w-[780px] mx-auto px-6 md:px-12 pt-8 pb-4">
        <nav className="flex items-center gap-2 font-body text-sm text-brand-text/40">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <span className="w-1 h-1 rounded-full bg-brand-text/15" aria-hidden="true" />
          <Link href="/blog/" className="hover:text-brand-primary transition-colors">
            Blogs
          </Link>
          <span className="w-1 h-1 rounded-full bg-brand-text/15" aria-hidden="true" />
          <span className="text-brand-text/70 truncate">{POST.shortTitle}</span>
        </nav>
      </div>

      <article className="max-w-[780px] mx-auto px-6 md:px-12 pt-8 pb-20">
        <Reveal>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary mb-6">
            {POST.category}
          </span>
          <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-6 leading-[1.15]">
            {POST.title}
          </h1>
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-brand-surface mb-10">
            <img src={POST.coverImage} alt={POST.coverAlt} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal className="prose">
        <p>We ran the numbers on plastic bottle consumption for a typical household in Mumbai. Not the dramatic, globe-scale numbers that get used to make people feel guilty. The actual, household-scale numbers that are relevant to the decision you're considering right now.</p>
        <p>The results are not dramatic or abstract. They are just arithmetic, and the arithmetic is unambiguous.</p>
        <h2>The baseline assumption</h2>
        <p>A household of two adults in a metro Indian city, both of whom buy at least one 500ml plastic bottle of water per day when outside the home. That's a conservative estimate. Many households consume more. Call it 730 plastic bottles per year between both people.</p>
        <p>At 12 grams per bottle (the approximate weight of a standard 500ml single-use PET bottle), that's <strong>8.76 kilograms of plastic annually</strong>. From two people. From water alone. This does not include soft drinks, packaged juices, or any other beverage category.</p>
        <h2>What actually happens to those bottles</h2>
        <p>India's plastic recycling infrastructure, despite genuine improvements in the last decade, recycles less than 30% of post-consumer plastic. The rest goes to landfill, informal dumps, or water bodies. PET bottles take between 400 and 700 years to decompose in a landfill environment.</p>
        <blockquote>The bottle you drank from on your commute today will still exist in recognisable form when your great-great-great-grandchildren are alive. That is not an exaggeration. That is the chemical reality of PET plastic.</blockquote>
        <p>More immediately: microplastics shed from PET bottles have been detected in human blood, breast milk, and lung tissue in studies published in the last three years. The long-term health implications are still being studied, but the presence itself is documented and confirmed.</p>
        <h2>The reusable bottle calculation</h2>
        <p>A stainless steel bottle with a minimum 10-year lifespan replaces approximately 3,650 single-use bottles over that period for a daily user. The steel itself is 100% recyclable at end of life. The manufacturing carbon footprint of a stainless steel bottle is higher upfront than a single PET bottle, but it pays back within 3–4 months of use based on lifecycle analysis.</p>
        <p>The Core Bottle costs ₹1,299. At a conservative 150 plastic bottles saved per year (accounting for the fact that most people don't buy a plastic bottle every single day), the cost per prevented bottle works out to roughly ₹8.66 over a 10-year period. A single-use 500ml water bottle in most Indian cities costs ₹15–20. You are saving money, actively, from the first month.</p>
        <h2>The part nobody talks about</h2>
        <p>The most honest thing we can say is this: the environmental case for a reusable bottle does not require you to care about the environment at all. It works on performance grounds alone. Colder water, no taste, no sweat on the outside, no morning rush to find a bottle to buy.</p>
        <p>The environmental benefit is not a sacrifice you make for the planet. It is a natural consequence of choosing something better. That distinction matters to us, and it should matter to you. Products that require sacrifice to justify themselves eventually get abandoned. Products that simply perform better, don't.</p>
        </Reveal>

        <Reveal className="mt-16 pt-10 border-t border-brand-text/8">
          <p className="kicker text-brand-text/40 mb-6">What we recommend</p>
          <div className="flex flex-col sm:flex-row gap-6 items-center bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
            <div className="w-24 h-24 bg-brand-surface rounded-xl flex-shrink-0 overflow-hidden">
              <img src="/images/prod-bottle.png" alt="Core Bottle" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans font-bold text-lg text-brand-text mb-1">The Core Bottle</h3>
              <p className="font-body text-sm text-brand-text/60 mb-1">
                Matte Cobalt • 750ml • Food-grade stainless steel
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-sans font-bold text-xl text-brand-text">₹1,299</span>
                <span className="text-sm text-brand-text/35 line-through font-body">₹1,799</span>
              </div>
            </div>
            <Link
              href="/product/example-product/"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Shop this
            </Link>
          </div>
        </Reveal>
      </article>
    </main>
  );
}
