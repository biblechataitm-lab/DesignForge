import React from 'react';
import Link from 'next/link';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer({ siteName = 'DesignForge' }: { siteName?: string }) {
  return (
    <footer className="df-footer">
      <div className="df-footer-content">
        <div className="df-footer-top">
          <div className="df-footer-brand-area">
            <div className="df-footer-brand"><span>{siteName}</span></div>
            <p className="df-footer-tagline">The curated design resource directory. Discover UI kits, icon libraries, 3D assets, and design systems for modern digital products.</p>
            <div className="df-footer-socials">
              <a href="#" aria-label="Website"><ExternalLink size={16} /></a>
              <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
              <a href="#" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div className="df-footer-links-grid">
            <div>
              <h4 className="df-footer-heading">Explore</h4>
              <ul>
                <li><Link href="/">Today's Launches</Link></li>
                <li><Link href="/trends">Trending</Link></li>
                <li><Link href="/collections/this-week">Weekly Top</Link></li>
                <li><Link href="/collections/this-month">Monthly Top</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="df-footer-heading">Categories</h4>
              <ul>
                <li><Link href="/category/ui-kits">UI Kits</Link></li>
                <li><Link href="/category/icons">Icons</Link></li>
                <li><Link href="/category/3d---motion">3D & Motion</Link></li>
                <li><Link href="/category/figma-plugins">Figma Plugins</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="df-footer-heading">Directory</h4>
              <ul>
                <li><Link href="/submit">Submit Product</Link></li>
                <li><Link href="/sponsor">Sponsor</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="df-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span>Powered by the Publisher Ad Network</span>
        </div>
      </div>
    </footer>
  );
}
