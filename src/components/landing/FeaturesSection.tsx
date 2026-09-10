'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section className="artboard-features container">
  <div className="artboard-section-heading">
    <span className="artboard-mini-tag">// DESIGN SYSTEM SPEC</span>
    <h2>Built with Uncompromising Standards</h2>
  </div>
  <div className="artboard-token-grid">
    <div className="token-card">
      <div className="token-swatch swatch-dark"></div>
      <h4>Sub-Pixel Precision</h4>
      <p>Clean 4px and 8px spacing scales designed for high-density displays.</p>
    </div>
    <div className="token-card">
      <div className="token-swatch swatch-blue"></div>
      <h4>Accessible Contrast</h4>
      <p>Strict WCAG AAA contrast guarantees across both light and dark themes.</p>
    </div>
    <div className="token-card">
      <div className="token-swatch swatch-neutral"></div>
      <h4>Vector Scalability</h4>
      <p>Lossless SVG vector geometry with optimized paths and zero raster artifacts.</p>
    </div>
  </div>
</section>
  );
}
