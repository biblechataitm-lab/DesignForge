'use client';

import React from 'react';

const STATS = [
  { value: '100%', label: 'Direct Maker Submissions' },
  { value: 'Realtime', label: 'Verified Catalog Updates' },
  { value: 'Community', label: 'Upvote & Feedback Engine' },
  { value: 'Zero Tracking', label: 'Privacy First Directory' },
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
