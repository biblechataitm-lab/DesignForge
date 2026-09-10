'use client';

import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="df-cta">
      <div className="df-cta-glow" aria-hidden="true" />
      <div className="df-cta-content">
        <h2 className="df-cta-title">Showcase Your Design Tool</h2>
        <p className="df-cta-subtitle">Get your design tool in front of designers, design engineers, and creative leads.</p>
        <div className="df-cta-buttons">
          <a href="/submit" className="df-cta-btn-primary">
            <Rocket size={15} /> Submit Product
          </a>
          <a href="/sponsor" className="df-cta-btn-secondary">
            Sponsor <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
