'use client';

import { useEffect, useState } from 'react';
import { DOCS, GROUP_ORDER, GROUP_ICONS } from '@/lib/docs';
import { useRouter } from 'next/navigation';

/**
 * Welcome / Home page
 * Shows an overview of the library with stats and quick-start links.
 */
export default function HomePage() {
  const router = useRouter();

  return (
    <div className="welcome">
      <div className="welcome-icon">📚</div>
      <h1 className="welcome-title">TPM Interview Prep Library</h1>
      <p className="welcome-subtitle">
        Your complete TPM study library — 17 documents, 24-week plan, 320+ interview questions.
      </p>

      <div className="welcome-stats">
        <div className="stat-card">
          <span className="stat-number">{DOCS.length}</span>
          <span className="stat-label">Documents</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">24</span>
          <span className="stat-label">Week Plan</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">320+</span>
          <span className="stat-label">Questions</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">~16K</span>
          <span className="stat-label">Total Lines</span>
        </div>
      </div>

      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: 'var(--text-secondary)' }}>
        Quick Start
      </h2>
      <div className="quick-start-grid">
        <QuickStartCard
          icon="🗺️"
          title="Navigation Index"
          desc="Start here — the master map"
          onClick={() => router.push('/docs/index')}
        />
        <QuickStartCard
          icon="🧭"
          title="Learning Roadmap"
          desc="Big-picture 24-week path"
          onClick={() => router.push('/docs/roadmap')}
        />
        <QuickStartCard
          icon="📅"
          title="Study Plan"
          desc="Day-by-day schedule"
          onClick={() => router.push('/docs/study-plan')}
        />
        <QuickStartCard
          icon="🎤"
          title="Interview Prep"
          desc="1075 lines of interview prep"
          onClick={() => router.push('/docs/interview')}
        />
        <QuickStartCard
          icon="⚡"
          title="Cheat Sheet"
          desc="Cram in 15 minutes"
          onClick={() => router.push('/docs/cheatsheet')}
        />
        <QuickStartCard
          icon="🎯"
          title="Question Bank"
          desc="320+ interview questions"
          onClick={() => router.push('/docs/question-bank')}
        />
      </div>

      <p className="welcome-hint">
        Select a document from the sidebar or click a card above to begin studying.
      </p>

      <div className="welcome-features">
        <div className="feature-item">
          <span className="feature-icon">⌨️</span> Press <kbd>/</kbd> to search across all documents
        </div>
        <div className="feature-item">
          <span className="feature-icon">🌓</span> Toggle dark/light theme in sidebar
        </div>
        <div className="feature-item">
          <span className="feature-icon">📱</span> Works on desktop &amp; mobile
        </div>
        <div className="feature-item">
          <span className="feature-icon">⚡</span> Built with Next.js — fast static site on Vercel
        </div>
      </div>
    </div>
  );
}

function QuickStartCard({
  icon,
  title,
  desc,
  onClick,
}: {
  icon: string;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <div className="quick-start-card" onClick={onClick}>
      <span className="quick-start-card-icon">{icon}</span>
      <div>
        <div className="quick-start-card-text">{title}</div>
        <div className="quick-start-card-desc">{desc}</div>
      </div>
    </div>
  );
}
