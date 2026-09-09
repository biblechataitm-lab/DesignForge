import React from 'react';
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
                <li><a href="/">Today's Launches</a></li>
                <li><a href="/trends">Trending</a></li>
                <li><a href="/collections/this-week">Weekly Top</a></li>
                <li><a href="/collections/this-month">Monthly Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="df-footer-heading">Categories</h4>
              <ul>
                <li><a href="/category/ui-kits">UI Kits</a></li>
                <li><a href="/category/icons">Icons</a></li>
                <li><a href="/category/3d---motion">3D & Motion</a></li>
                <li><a href="/category/figma-plugins">Figma Plugins</a></li>
              </ul>
            </div>
            <div>
              <h4 className="df-footer-heading">Directory</h4>
              <ul>
                <li><a href="/submit">Submit Product</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
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
