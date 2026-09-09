'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section class="artboard-features container">
  <div class="artboard-section-heading">
    <span class="artboard-mini-tag">// DESIGN SYSTEM SPEC</span>
    <h2>Built with Uncompromising Standards</h2>
  </div>
  <div class="artboard-token-grid">
    <div class="token-card">
      <div class="token-swatch swatch-dark"></div>
      <h4>Sub-Pixel Precision</h4>
      <p>Clean 4px and 8px spacing scales designed for high-density displays.</p>
    </div>
    <div class="token-card">
      <div class="token-swatch swatch-blue"></div>
      <h4>Accessible Contrast</h4>
      <p>Strict WCAG AAA contrast guarantees across both light and dark themes.</p>
    </div>
    <div class="token-card">
      <div class="token-swatch swatch-neutral"></div>
      <h4>Vector Scalability</h4>
      <p>Lossless SVG vector geometry with optimized paths and zero raster artifacts.</p>
    </div>
  </div>
</section>
  );
}
