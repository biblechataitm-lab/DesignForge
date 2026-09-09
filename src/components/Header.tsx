'use client';

import React from 'react';

export function Header({ siteName = 'DesignForge' }: { siteName?: string }) {
  return (
    <header className="artboard-navbar">
      <div className="container artboard-nav-inner">
        <a href="/" className="artboard-logo">
          <span className="logo-box">DF</span>
          <span>DesignForge</span>
        </a>
        <div className="artboard-nav-links">
        <a href="/">Components</a>
        <a href="/category/icons">Icons & Assets</a>
        <a href="/category/figma">Figma Kits</a>
        <a href="/trends">Typography</a>
        <a href="/sponsor">Advertise</a>
        </div>
        <a href="/submit" className="artboard-nav-btn">Launch Craft</a>
      </div>
    </header>
  );
}
