import React from 'react';
import Link from 'next/link';

export function BlogCard({ image, title, date, excerpt, link }) {
  return (
    <Link href={link || "/blog/example-post/"} className="group cursor-pointer reveal flex flex-col gap-6">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-surface">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div>
        <p className="font-body text-xs text-brand-text/50 mb-3">{date}</p>
        <h3 className="font-sans font-bold text-xl text-brand-text mb-3 leading-tight group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="font-body text-sm text-brand-text/70 line-clamp-3">{excerpt}</p>
      </div>
    </Link>
  );
}
