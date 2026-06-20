import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function BlogCard({ image, title, date, excerpt, link }) {
  return (
    <Link href={link || "/blog/example-post/"} className="group cursor-pointer reveal flex flex-col gap-6">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-surface">
        <Image src={image} alt={title || "Blog post cover"} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      </div>
      <div>
        <p className="font-body text-xs text-brand-text/50 mb-3">{date}</p>
        <h3 className="font-sans font-bold text-xl text-brand-text mb-3 leading-tight group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="font-body text-sm text-brand-text/70 line-clamp-3">{excerpt}</p>
      </div>
    </Link>
  );
}
