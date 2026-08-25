'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Layers, Box, Palette, Type, MousePointer2, Copy, Check, Search, Sparkles, ArrowRight, ArrowUpRight, Star } from 'lucide-react';

const DESIGN_PRESETS = [
  {
    id: 'neo-brutalism',
    name: 'Neo-Brutalism Studio UI Kit',
    type: 'Design System (Figma & React)',
    tokens: {
      border: '2px solid #18181b',
      radius: '0px (Sharp Geometry)',
      shadow: '4px 4px 0px #18181b',
      accent: '#ffcc00 (Sticker Yellow)',
    },
    codeSnippet: `:root {
  --stroke: 2px solid #18181b;
  --shadow-hard: 4px 4px 0px #18181b;
  --color-accent: #ffcc00;
}`,
  },
  {
    id: 'swiss-grid',
    name: 'Swiss International Typographic',
    type: 'Typography & Layout Rules',
    tokens: {
      border: '1px solid #e4e4e7',
      radius: '6px (Minimal)',
      shadow: '0 1px 3px rgba(0,0,0,0.05)',
      accent: '#e63946 (Crimson Red)',
    },
    codeSnippet: `:root {
  --font-display: 'Neue Haas Grotesk';
  --baseline-grid: 8px;
  --color-swiss: #e63946;
}`,
  },
  {
    id: 'clay-3d',
    name: 'Glassmorphism & Clay 3D Pack',
    type: '3D Assets & Shader Textures',
    tokens: {
      border: '1px solid rgba(255,255,255,0.2)',
      radius: '20px (Clay Pill)',
      shadow: '0 20px 40px rgba(0,0,0,0.1)',
      accent: '#8b5cf6 (Electric Violet)',
    },
    codeSnippet: `:root {
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-blur: blur(16px);
  --color-glow: #8b5cf6;
}`,
  },
];

export function HeroSection() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const currentPreset = DESIGN_PRESETS[activePresetIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPreset.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="designforge-hero">
      <div className="designforge-hero-grid">
        {/* Left: Neo-Brutalist Value Proposition */}
        <div className="designforge-hero-content">
          <div className="designforge-badge">
            <span className="designforge-badge-star">✦</span>
            <span>The Figma & Design System Foundry • 2026</span>
            <span className="designforge-badge-tag">v3.0</span>
          </div>

          <h1 className="designforge-title">
            The Design Foundry for <span className="designforge-marker">Figma Kits</span>, 3D Assets & Tokens.
          </h1>

          <p className="designforge-lead">
            Hand-curated design systems, vector icon sets, wireframe kits, 3D blender assets, and production-ready React component libraries.
          </p>

          {/* Neo-brutalist Search Box */}
          <form 
            action="/search" 
            method="GET" 
            className="designforge-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="designforge-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search 5,600+ Figma kits, 3D packs, design tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="designforge-search-input"
            />
            <button type="submit" className="designforge-search-btn">
              Explore Foundry
            </button>
          </form>

          {/* Dual Action CTAs */}
          <div className="designforge-cta-row">
            <Link href="/category/design" className="designforge-primary-btn">
              Explore 5,600+ UI Kits <ArrowRight size={15} />
            </Link>
            <Link href="/submit" className="designforge-secondary-btn">
              Submit Design Asset
            </Link>
          </div>

          {/* Social Proof */}
          <div className="designforge-social-proof">
            <div className="designforge-avatar-stack">
              <span className="design-avatar av-1">🎨</span>
              <span className="design-avatar av-2">📐</span>
              <span className="design-avatar av-3">✨</span>
              <span className="design-avatar av-4">🖋️</span>
            </div>
            <div className="designforge-proof-text">
              <div className="designforge-proof-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="designforge-rating">4.9/5.0</span>
              </div>
              <span className="designforge-subtext">Used by 120,000+ UI/UX designers and art directors</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="designforge-tags-row">
            <span className="designforge-tags-label">Foundry:</span>
            <div className="designforge-tags-list">
              <Link href="/category/design" className="designforge-tag-pill">
                <Layout size={12} /> Figma Systems
              </Link>
              <Link href="/category/productivity" className="designforge-tag-pill">
                <Box size={12} /> 3D Packs
              </Link>
              <Link href="/category/developer-tools" className="designforge-tag-pill">
                <Palette size={12} /> CSS Tokens
              </Link>
              <Link href="/category/ai" className="designforge-tag-pill">
                <Type size={12} /> Fonts & Icons
              </Link>
            </div>
          </div>

          {/* Brutalist metrics strip */}
          <div className="designforge-metrics-strip">
            <div className="designforge-metric-box">
              <span className="designforge-metric-val">5,600+</span>
              <span className="designforge-metric-desc">UI Kits & Assets</span>
            </div>
            <div className="designforge-metric-divider" />
            <div className="designforge-metric-box">
              <span className="designforge-metric-val">120k+</span>
              <span className="designforge-metric-desc">Figma Copies</span>
            </div>
            <div className="designforge-metric-divider" />
            <div className="designforge-metric-box">
              <span className="designforge-metric-val">100%</span>
              <span className="designforge-metric-desc">Vector Precision</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Canvas & Token Studio Card */}
        <div className="designforge-canvas-card">
          {/* Collaborator Cursor Mock */}
          <div className="canvas-collaborator-tag">
            <MousePointer2 size={12} className="fill-blue-500 text-blue-500" />
            <span>Elena (Design Ops)</span>
          </div>

          <div className="canvas-header">
            <div className="canvas-title-group">
              <span className="canvas-yellow-dot" />
              <span className="canvas-header-title">Live Token Studio</span>
            </div>
            <span className="canvas-preset-type">{currentPreset.type}</span>
          </div>

          {/* Preset Selector */}
          <div className="canvas-preset-tabs">
            {DESIGN_PRESETS.map((preset, idx) => (
              <button
                key={preset.id}
                onClick={() => setActivePresetIndex(idx)}
                className={`canvas-preset-btn ${activePresetIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {preset.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Token Visualizer Box */}
          <div className="canvas-tokens-grid">
            <div className="token-item">
              <span className="token-label">Stroke</span>
              <span className="token-val">{currentPreset.tokens.border}</span>
            </div>
            <div className="token-item">
              <span className="token-label">Border Radius</span>
              <span className="token-val">{currentPreset.tokens.radius}</span>
            </div>
            <div className="token-item">
              <span className="token-label">Drop Shadow</span>
              <span className="token-val">{currentPreset.tokens.shadow}</span>
            </div>
            <div className="token-item">
              <span className="token-label">Accent Token</span>
              <span className="token-val">{currentPreset.tokens.accent}</span>
            </div>
          </div>

          {/* Interactive CSS Output Preview */}
          <div className="canvas-code-box">
            <div className="canvas-code-top">
              <span className="canvas-code-lang">CSS VARIABLES</span>
              <button 
                onClick={handleCopy} 
                className="canvas-copy-btn"
                title="Copy CSS Tokens"
                type="button"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                <span>{copied ? 'Copied' : 'Copy Tokens'}</span>
              </button>
            </div>
            <pre className="canvas-code-content">
              <code>{currentPreset.codeSnippet}</code>
            </pre>
          </div>

          {/* Bottom Card Footer */}
          <div className="canvas-card-footer">
            <span className="canvas-verified-text">✦ Figma Component Library</span>
            <Link href="/submit" className="canvas-submit-link">
              Submit UI Kit <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
