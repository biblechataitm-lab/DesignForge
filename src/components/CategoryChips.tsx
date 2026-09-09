'use client';

import React from 'react';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "Figma Kits",
    "path": "/category/figma"
  },
  {
    "label": "Icons & Assets",
    "path": "/category/icons"
  },
  {
    "label": "3D & Motion",
    "path": "/category/3d-motion"
  },
  {
    "label": "Typography",
    "path": "/category/typography"
  },
  {
    "label": "UI Patterns",
    "path": "/category/ui-patterns"
  },
  {
    "label": "Design Systems",
    "path": "/category/design"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-scroll">
        {CATEGORIES.map((cat) => {
          const isAll = cat.path === '/';
          const isActive = isAll ? !activeCategory : activeCategory === cat.path.replace('/category/', '');
          return (
            <a
              key={cat.path}
              href={cat.path}
              className={`chip ${isActive ? 'chip-active' : ''}`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
