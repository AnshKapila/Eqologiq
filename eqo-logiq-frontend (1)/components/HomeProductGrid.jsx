'use client';

import ProductGrid from '../components/ProductGrid';

export default function HomeProductGrid() {
  return (
    <ProductGrid
      variant="home"
      limit={3}
      embedded
      columnsClass="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
    />
  );
}
