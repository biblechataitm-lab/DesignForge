'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="df-cta">
      <div className="df-cta-glow" aria-hidden="true" />
      <div className="df-cta-content">
        <h2 className="df-cta-title">Showcase Your Design Tool</h2>
        <p className="df-cta-subtitle">Get your design tool in front of 25K+ designers, design engineers, and creative leads.</p>
        <div className="df-cta-buttons">
          <Link href="/submit" className="df-cta-btn-primary">
            <Rocket size={15} /> Submit Product
          </Link>
          <Link href="/sponsor" className="df-cta-btn-secondary">
            Sponsor <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
