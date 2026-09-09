'use client';

import React from 'react';

export function Header({ siteName = 'DesignForge' }: { siteName?: string }) {
  return (
    <header class="artboard-navbar">
  <div class="container artboard-nav-inner">
    <a href="/" class="artboard-logo">
      <span class="logo-box">DF</span>
      <span>DesignForge</span>
    </a>
    <div class="artboard-nav-links">
      <a href="/">Components</a>
      <a href="/category/design">Icons & Kits</a>
      <a href="/trends">Typography</a>
      <a href="/sponsor">Advertise</a>
    </div>
    <a href="/submit" class="artboard-nav-btn">Launch Craft</a>
  </div>
</header>
  );
}
