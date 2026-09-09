'use client';

import React from 'react';
import { Palette, Layers, Zap, Globe, Cpu, TrendingUp } from 'lucide-react';

const FEATURES = [
  { icon: Palette, title: 'Color Systems', desc: 'Curated palettes, gradients, and design token libraries for every brand.' },
  { icon: Layers, title: 'Component Library', desc: 'Browse 500+ ready-to-use components across Figma, Framer, and code.' },
  { icon: Zap, title: 'Motion Kits', desc: 'Lottie animations, GSAP templates, and interaction design patterns.' },
  { icon: Globe, title: 'Design Systems', desc: 'Complete design systems with tokens, guidelines, and documentation.' },
  { icon: Cpu, title: '3D & AR Assets', desc: 'Blender models, glTF exports, and augmented reality design tools.' },
  { icon: TrendingUp, title: 'Trend Reports', desc: 'Weekly design trend analysis — colors, typography, and UI patterns.' },
];

export function FeaturesSection() {
  return (
    <section className="df-features">
      <div className="df-features-header">
        <h2 className="df-section-title">
          Why <span className="df-accent-text">DesignForge</span>
        </h2>
        <p className="df-section-subtitle">More than a directory — a curated ecosystem built for your workflow.</p>
      </div>
      <div className="df-features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="df-feature-card">
            <div className="df-feature-icon"><f.icon size={22} /></div>
            <h3 className="df-feature-title">{f.title}</h3>
            <p className="df-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
