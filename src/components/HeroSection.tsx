'use client';

import React from 'react';
import Hero15 from '@/components/ui/hero-15';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero15
        brandName="DesignForge"
        headingLine1="The Design Systems Hub for"
        headingLine2="Figma Kits & 3D Assets."
        description="Curated high-craft Figma components, token architectures, WebGL shader textures, and vector icon collections for world-class product designers."
        primaryCtaLabel="Explore 780+ Design Kits"
        primaryCtaHref="/category/design"
        secondaryCtaLabel="Submit Asset"
        secondaryCtaHref="/submit"
        signupLabel="Submit Kit"
        signupHref="/submit"
        trustedEyebrow="FEATURED BY PRODUCT DESIGNERS WORLDWIDE"
      />
    </div>
  );
}
