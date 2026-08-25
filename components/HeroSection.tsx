'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Palette, Box, Layout, Type, Sparkles, Layers, MousePointer2, Copy, Check, Search, ArrowUpRight } from 'lucide-react';

const DESIGN_PRESETS = [
  {
    id: 'neo-brutal',
    name: 'Neo-Brutalism Kit',
    category: 'Figma UI Kit • v2.4',
    primaryColor: '#ff5733',
    accentColor: '#ffcc00',
    borderStyle: '2px solid #18181b',
    shadowStyle: '4px 4px 0px #18181b',
    tokens: '--radius: 4px; --shadow: 4px 4px 0 #18181b;',
    author: 'Elena (Design Ops)',
  },
  {
    id: 'swiss-minimal',
    name: 'Swiss Grid System',
    category: 'Typography & Editorial',
    primaryColor: '#09090b',
    accentColor: '#ef4444',
    borderStyle: '1px solid #e4e4e7',
    shadowStyle: '0 8px 24px rgba(0,0,0,0.06)',
    tokens: '--grid-col: 12; --baseline: 8px; --tracking: -0.02em;',
    author: 'Marcus (Typographer)',
  },
  {
    id: 'fluid-3d',
    name: '3D Glassmorphic Clay',
    category: 'Spline & 3D Assets',
    primaryColor: '#8b5cf6',
    accentColor: '#ec4899',
    borderStyle: '1px solid rgba(255,255,255,0.4)',
    shadowStyle: '0 12px 32px rgba(139,92,246,0.25)',
    tokens: '--glass-blur: 24px; --specular: 0.85; --mesh: active;',
    author: 'Alex (3D Lead)',
  },
];

export function HeroSection() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const currentPreset = DESIGN_PRESETS[activePresetIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPreset.tokens);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="designforge-hero">
      <div className="designforge-hero-grid">
        {/* Left: Neo-Brutalist Value Prop */}
        <div className="designforge-hero-content">
          <div className="designforge-sticker-badge">
            <Sparkles size={14} className="text-black" />
            <span>Curated UI/UX Assets • Figma • 3D • Design Systems</span>
          </div>

          <h1 className="designforge-title">
            The Raw Index for <span className="designforge-highlight">Elite Figma Kits</span>, 3D Assets & Design Systems.
          </h1>

          <p className="designforge-lead">
            Hand-picked design foundations, vector icon sets, production tokens, typography foundries, and shader components for modern product builders.
          </p>

          {/* Neo-brutalist search bar */}
          <form 
            action="/search" 
            method="GET" 
            className="designforge-search-bar"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="designforge-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search 5,600+ Figma kits, 3D icons, design systems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="designforge-search-input"
            />
            <button type="submit" className="designforge-search-btn">
              Explore Forge
            </button>
          </form>

          {/* Design category tags */}
          <div className="designforge-tags-row">
            <span className="designforge-tags-label">Categories:</span>
            <div className="designforge-tags-list">
              <Link href="/category/design" className="designforge-tag-pill">
                <Layout size={12} /> Figma Kits
              </Link>
              <Link href="/category/design" className="designforge-tag-pill">
                <Box size={12} /> 3D Renders
              </Link>
              <Link href="/category/developer-tools" className="designforge-tag-pill">
                <Palette size={12} /> Design Tokens
              </Link>
              <Link href="/category/productivity" className="designforge-tag-pill">
                <Type size={12} /> Typography
              </Link>
            </div>
          </div>

          {/* Metrics */}
          <div className="designforge-metrics-strip">
            <div className="designforge-metric-box">
              <span className="designforge-metric-val">5,600+</span>
              <span className="designforge-metric-label">UI Kits & Assets</span>
            </div>
            <div className="designforge-metric-box">
              <span className="designforge-metric-val">120k+</span>
              <span className="designforge-metric-label">Figma Duplicates</span>
            </div>
            <div className="designforge-metric-box">
              <span className="designforge-metric-val">100%</span>
              <span className="designforge-metric-label">Vector Precision</span>
            </div>
          </div>
        </div>

        {/* Right: Neo-Brutalist Interactive Canvas & Token Inspector */}
        <div className="designforge-canvas-card">
          {/* Top Bar with Live Collaborator Cursors */}
          <div className="canvas-card-top">
            <div className="canvas-tools-group">
              <span className="canvas-tool-dot" />
              <span className="canvas-title">Design Token Studio</span>
            </div>
            <div className="canvas-collaborator-tag">
              <MousePointer2 size={12} className="fill-black" />
              <span>{currentPreset.author}</span>
            </div>
          </div>

          {/* Preset Switcher Tabs */}
          <div className="canvas-preset-tabs">
            {DESIGN_PRESETS.map((preset, idx) => (
              <button
                key={preset.id}
                onClick={() => setActivePresetIndex(idx)}
                className={`canvas-preset-btn ${activePresetIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* Live Component Preview Sandbox */}
          <div className="canvas-sandbox-window">
            <div 
              className="sandbox-sample-card"
              style={{
                border: currentPreset.borderStyle,
                boxShadow: currentPreset.shadowStyle,
              }}
            >
              <div className="sandbox-sample-header">
                <div className="sandbox-color-swatches">
                  <span className="swatch" style={{ background: currentPreset.primaryColor }} />
                  <span className="swatch" style={{ background: currentPreset.accentColor }} />
                </div>
                <span className="sandbox-category-badge">{currentPreset.category}</span>
              </div>
              <h4 className="sandbox-card-title">{currentPreset.name}</h4>
              <p className="sandbox-card-desc">Token-driven components with auto-layout and variant properties.</p>
            </div>
          </div>

          {/* Copyable Token Variables Box */}
          <div className="canvas-token-box">
            <div className="token-box-header">
              <span className="token-label">CSS VARIABLES / TOKENS</span>
              <button 
                onClick={handleCopy} 
                className="token-copy-btn"
                title="Copy Tokens"
                type="button"
              >
                {copied ? <Check size={12} className="text-black" /> : <Copy size={12} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <code className="token-code-text">{currentPreset.tokens}</code>
          </div>

          {/* Bottom Card Footer */}
          <div className="canvas-card-footer">
            <span className="canvas-verified-badge">⚡ Auto-Layout Ready</span>
            <Link href="/submit" className="canvas-submit-link">
              Submit UI Kit <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
