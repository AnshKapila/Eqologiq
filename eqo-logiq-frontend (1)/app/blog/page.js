import Link from 'next/link';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: `Journal | Eqo Logiq Blog on Plastic-Free Living`,
  description: `Short reads. Real thoughts. The Eqo Logiq journal on plastic-free products, materials science, and daily life without plastic.`,
  alternates: { canonical: `https://eqologiq.kite.space/blog/` },
  openGraph: {
    title: `Journal | Eqo Logiq Blog on Plastic-Free Living`,
    description: `Short reads. Real thoughts. The Eqo Logiq journal on plastic-free products, materials science, and daily life without plastic.`,
    images: [{ url: `/images/hero-banner.png` }],
  },
};

const POSTS = [
  {
    slug: 'example-post',
    title: 'Five things I noticed after switching from plastic to steel for six months.',
    excerpt:
      'Water tastes different. Not better, exactly. Just neutral. Like how it should taste. That was the first thing I noticed, and it was unexpected.',
    image: '/images/proof-1.png',
    imageAlt: 'Person using an Eqo Logiq steel bottle',
    delayMs: 0,
  },
  {
    slug: 'example-post',
    title: 'What I actually keep in my gym bag now, and why the bottle matters more than I expected.',
    excerpt:
      "Every litre you drink from plastic during a workout is a litre that's spent time in a container that wasn't designed for heat. Here's what I use instead.",
    image: '/images/proof-2.png',
    imageAlt: 'Steel water bottle in a gym bag',
    delayMs: 80,
  },
  {
    slug: 'example-post',
    title: 'The honest review: I gave our Core Bottle to someone who buys cheap plastics and this is what they said.',
    excerpt:
      'I handed it to my flatmate without any sales pitch. Three weeks later, she asked where to buy one for her sister.',
    image: '/images/feature-lifestyle.png',
    imageAlt: 'Eqo Logiq Core Bottle in everyday lifestyle use',
    delayMs: 160,
  },
  {
    slug: 'example-post',
    title: 'Bamboo toothbrushes: the good, the bad, and the bristle problem most brands ignore.',
    excerpt:
      "Most bamboo brushes advertise themselves as eco but use nylon-bristle alternatives that don't biodegrade. Here's the full picture.",
    image: '/images/prod-brush.png',
    imageAlt: 'Eqo Logiq bamboo toothbrush with vegan bristles',
    delayMs: 0,
  },
  {
    slug: 'example-post',
    title: "I replaced my entire morning routine with three products. Here's what happened.",
    excerpt:
      "Steel bottle, bamboo brush, copper tongue cleaner. That's the whole stack. Two months in, I haven't added anything back.",
    image: '/images/prod-cleaner.png',
    imageAlt: 'Copper tongue cleaner from Eqo Logiq morning routine',
    delayMs: 80,
  },
  {
    slug: 'example-post',
    title: 'Why "eco-friendly" has become meaningless and what to look for instead.',
    excerpt:
      'Any brand can print "eco-friendly" on a label. Here are the four questions that actually separate real from performance-washing.',
    image: '/images/daily-use.png',
    imageAlt: 'Eco-friendly product packaging vs plastic alternatives',
    delayMs: 160,
  },
];

export default function Page() {
  return (
    <main className="pt-20">
      <section className="bg-brand-base py-16 md:py-24 border-b border-brand-text/8">
        <Reveal className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="kicker text-brand-primary mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-brand-primary" />
            Blogs
          </p>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-text mb-4">Blogs.</h1>
          <p className="font-body text-brand-text/60 text-lg">Short reads. Real thoughts.</p>
        </Reveal>
      </section>

      <section className="bg-brand-base py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {POSTS.map((post) => (
              <Reveal
                key={post.title}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col group"
                style={{ transitionDelay: `${post.delayMs}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-brand-surface">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-sans font-bold text-lg text-brand-text mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-brand-text/60 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="font-body text-sm font-medium text-brand-primary hover:underline inline-flex items-center gap-1"
                  >
                    Read more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-base py-10 border-t border-brand-text/8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <p className="font-body text-brand-text/60 text-sm">
            Want the full science behind plastic-free living? Read the{' '}
            <Link href="/qrash-qourse/" className="text-brand-primary font-medium hover:underline">
              Qrash Qourse
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
