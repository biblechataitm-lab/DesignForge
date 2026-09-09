'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

export function HeroLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const children = hero.querySelectorAll('.df-animate');
    children.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section ref={heroRef} className="df-hero">
      <div className="df-hero-bg" aria-hidden="true" />
      <div className="df-hero-container">
        <div className="df-hero-content">
          <div className="df-animate df-hero-badge">
            <span>Where Design Meets Code</span>
          </div>
          <h1 className="df-animate df-hero-title">
            Your Creative{' '}
            <span className="df-accent-text">Design Arsenal</span>
          </h1>
          <p className="df-animate df-hero-subtitle">
            Discover 1,600+ curated design tools — from Figma plugins and icon libraries to 3D assets, motion kits, and component systems.
          </p>
          <form
            className="df-animate df-hero-search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
              }
            }}
          >
            <Search size={16} className="df-hero-search-icon" />
            <input type="text" placeholder="Search design tools, Figma plugins..." />
            <button type="submit">Explore <ArrowRight size={14} /></button>
          </form>
          <div className="df-animate df-hero-tags">
            <Link href="/category/design" className="df-tag">UI Kits</Link>
            <Link href="/category/developer-tools" className="df-tag">Dev Design</Link>
            <Link href="/category/ai" className="df-tag">AI Design</Link>
            <Link href="/trends" className="df-tag df-tag-hot">
              <TrendingUp size={12} /> Trending
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
