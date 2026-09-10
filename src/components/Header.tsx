'use client';

import React from 'react';

export function Header({ siteName = 'DesignForge' }: { siteName?: string }) {
  return (
    <header className="artboard-navbar">
      <div className="container artboard-nav-inner">
        <a href="/" className="artboard-logo">
          <span className="logo-box">DF</span>
          <span className="artboard-logo-text">{siteName}</span>
          <span className="artboard-meta-tag">[ARCHITECTURAL·UI]</span>
        </a>

        <div className="artboard-nav-links">
          <a href="/" className="artboard-nav-item active">Components</a>
          <a href="/category/icons" className="artboard-nav-item">Icons &amp; Assets</a>
          <a href="/category/figma" className="artboard-nav-item">Figma Systems</a>
          <a href="/category/design" className="artboard-nav-item">Typography</a>
          <a href="/sponsor" className="artboard-nav-item artboard-nav-highlight">Advertise</a>
        </div>

        <div className="artboard-nav-actions">
          <div className="artboard-zoom-indicator">
            <span className="artboard-dot"></span>
            <span>GRID: 8PT SYSTEM</span>
          </div>
          <a href="/submit" className="artboard-nav-btn">
            + Publish Resource
          </a>
        </div>
      </div>
    </header>
  );
}

