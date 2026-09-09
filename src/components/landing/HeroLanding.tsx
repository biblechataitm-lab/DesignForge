'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section class="artboard-hero">
  <div class="artboard-canvas container">
    <div class="artboard-toolbar">
      <div class="artboard-tools">
        <span class="tool-btn tool-active" title="Select">↖</span>
        <span class="tool-btn" title="Frame">#</span>
        <span class="tool-btn" title="Pen">✎</span>
        <span class="tool-btn" title="Text">T</span>
      </div>
      <span class="artboard-scale">100% · Canvas Active</span>
    </div>
    <div class="artboard-hero-content">
      <div class="artboard-cursor cursor-1">
        <span class="cursor-pointer"></span>
        <span class="cursor-label">@sarah: "Check this icon kit"</span>
      </div>
      <div class="artboard-tag">THE CRAFT DIRECTORY</div>
      <h1 class="artboard-title">
        The Studio for <span class="artboard-serif">Excellence in Design</span>
      </h1>
      <p class="artboard-desc">
        A curated showcase of world-class UI component libraries, vector iconography, motion frameworks, and typography.
      </p>
      <div class="artboard-search">
        <input type="text" placeholder="Search icon sets, shaders, Figma kits..." class="artboard-input" />
        <button class="artboard-btn">Explore Craft</button>
      </div>
    </div>
  </div>
</section>
  );
}
