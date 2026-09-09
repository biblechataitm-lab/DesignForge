'use client';

import React from 'react';

const STATS = [
  { value: '1,600+', label: 'Design Tools' },
  { value: '500+', label: 'Components' },
  { value: '25K+', label: 'Designers' },
  { value: '97%', label: 'Satisfaction' },
];

export function StatsSection() {
  return (
    <section className="df-stats">
      <div className="df-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="df-stat-card">
            <div className="df-stat-value">{s.value}</div>
            <div className="df-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
