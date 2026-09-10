'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section className="artboard-hero">
      <div className="artboard-canvas container">
        <div className="artboard-toolbar">
          <div className="artboard-tools">
            <span className="tool-btn tool-active" title="Select Pointer">↖</span>
            <span className="tool-btn" title="Artboard Frame">#</span>
            <span className="tool-btn" title="Bezier Pen">✎</span>
            <span className="tool-btn" title="Typography">T</span>
            <span className="tool-btn" title="Design System Tokens">❖</span>
          </div>
          <div className="artboard-meta-strip">
            <span className="artboard-coord">X: 1920 · Y: 1080</span>
            <span className="artboard-scale">100% · CANVAS ACTIVE</span>
          </div>
        </div>

        <div className="artboard-hero-content">
          <div className="artboard-cursor cursor-1">
            <span className="cursor-pointer"></span>
            <span className="cursor-label">@lead-designer: "Zero-dependency icon kit"</span>
          </div>

          <div className="artboard-tag">
            <span className="tag-index">[DIR·01]</span> THE SWISS DESIGN SYSTEM DIRECTORY
          </div>

          <h1 className="artboard-title">
            The Studio for <span className="artboard-serif">Excellence in Design</span>
          </h1>

          <p className="artboard-desc">
            An exacting architectural curation of world-class UI component libraries, vector iconography, motion physics engines, and typographic specimens.
          </p>

          <div className="artboard-search">
            <span className="artboard-search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Filter by React, Tailwind, Figma kits, shaders, Lucide..." 
              className="artboard-input" 
              aria-label="Search design resources"
            />
            <button className="artboard-btn" type="button">
              Explore Craft →
            </button>
          </div>

          <div className="artboard-specs-strip">
            <div className="spec-item"><span className="spec-key">GRID:</span> 8pt / 12-col</div>
            <div className="spec-item"><span className="spec-key">COLORWAYS:</span> Monochrome + International Orange</div>
            <div className="spec-item"><span className="spec-key">CURATION:</span> Continuous Verified Releases</div>
          </div>
        </div>
      </div>
    </section>
  );
}

