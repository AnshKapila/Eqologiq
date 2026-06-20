'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function SiteFooter() {
  const pathname = usePathname();
  const variant = pathname === '/' ? 'home' : 'default';
  return <Footer variant={variant} />;
}
