'use client';

import { useEffect } from 'react';

export default function HomePageEffects() {
  useEffect(() => {
    const observed = new WeakSet();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const observeNew = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        revealObserver.observe(el);
      });
    };

    observeNew();

    const mutationObserver = new MutationObserver(observeNew);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
