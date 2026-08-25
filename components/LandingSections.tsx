'use client';

import React from 'react';
import Link from 'next/link';
import { Palette, Layers, Box, Sparkles, ArrowRight, CheckCircle2, Sliders, PenTool, Wand2 } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Sparkles size={12} className="text-black" />
            <span>Curated Design Foundry</span>
          </div>
          <h2 className="landing-section-heading">Engineered for Product & UI/UX Designers</h2>
          <p className="landing-section-sub">
            Curated Figma design systems, 3D shader textures, Tailwind UI libraries, dynamic icon sets, and micro-interaction tokens.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Figma Design Systems */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box yellow">
                <Layers size={20} />
              </div>
              <span className="bento-badge">Figma Auto-Layout 5.0</span>
            </div>
            <h3 className="bento-card-title">Figma UI Kits & Multi-Brand Systems</h3>
            <p className="bento-card-desc">
              Tokens-studio compatible design systems featuring light/dark variables, fluid typography, and accessible contrast palettes.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">5,600+</span>
                <span className="pill-lbl">Design Assets</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">120k+</span>
                <span className="pill-lbl">Designers</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">100%</span>
                <span className="pill-lbl">Vector Pure</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 3D Shader Textures */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box orange">
                <Box size={20} />
              </div>
              <span className="bento-badge">Spline / Three.js</span>
            </div>
            <h3 className="bento-card-title">3D Glass & Raytraced Assets</h3>
            <p className="bento-card-desc">
              Photorealistic glassmorphism, iridescent gradients, and interactive Spline 3D scenes.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> 8K Alpha Channels</span>
              <span className="check-item"><CheckCircle2 size={13} /> GLTF & USDZ Exports</span>
            </div>
          </div>

          {/* Bento Card 3: Design Tokens & CSS */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box green">
                <Sliders size={20} />
              </div>
              <span className="bento-badge">CSS & Tailwind v4</span>
            </div>
            <h3 className="bento-card-title">Design Token Exporter</h3>
            <p className="bento-card-desc">
              1-click export variables to Tailwind v4 theme configs, CSS custom properties, and Style Dictionary.
            </p>
          </div>

          {/* Bento Card 4: Iconography & Vectors */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box pink">
                <Palette size={20} />
              </div>
              <span className="bento-badge">Pixel Perfect</span>
            </div>
            <h3 className="bento-card-title">Geometric & Neo-Brutalist Iconography</h3>
            <p className="bento-card-desc">
              Custom SVG stroke icon packs with 1.5px and 2.0px optical weights, Lucide-compatible glyphs, and animated Lottie icons.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">Figma Variables</span>
              <span className="tag-chip">Tokens Studio</span>
              <span className="tag-chip">Tailwind CSS v4</span>
              <span className="tag-chip">Lottie Motion</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Wand2 size={12} className="text-black" />
            <span>Foundry Pipeline</span>
          </div>
          <h2 className="landing-section-heading">How DesignForge Curates Assets</h2>
          <p className="landing-section-sub">
            Every submission is checked for proper vector hierarchy, auto-layout responsiveness, and WCAG AA contrast.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Vector & Component Audit</h4>
            <p className="step-desc">
              We verify nested component structures, naming conventions, and auto-layout sizing behaviors.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">Contrast & Dark Mode Testing</h4>
            <p className="step-desc">
              Every token pair is audited across light, dark, and high-contrast accessibility profiles.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Featured Design Foundry</h4>
            <p className="step-desc">
              Approved design kits get featured placement and reach over 120,000+ UI/UX designers and art directors.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ PUBLISH ON DESIGNFORGE</span>
          <h3 className="launch-cta-heading">Publish Your UI Kit or 3D Pack to 120,000+ Designers</h3>
          <p className="launch-cta-desc">
            Monetize your design assets, grow your Figma Community followers, and gain instant industry recognition.
          </p>
          <div className="launch-cta-buttons">
            <Link href="/submit" className="launch-cta-primary">
              Submit Design Asset <ArrowRight size={15} />
            </Link>
            <Link href="/category/design" className="launch-cta-secondary">
              Browse Foundry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
