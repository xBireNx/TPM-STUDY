'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { DOCS } from '@/lib/docs';
import AnimatedCounter from '@/components/AnimatedCounter';
import { triggerNavProgress } from '@/lib/navigation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const quickStartItems = [
  { icon: '🗺️', title: 'Navigation Index', desc: 'Start here — the master map', slug: 'index' },
  { icon: '🧭', title: 'Learning Roadmap', desc: 'Big-picture 24-week path', slug: 'roadmap' },
  { icon: '📅', title: '24-Week Study Plan', desc: 'Day-by-day schedule', slug: 'study-plan' },
  { icon: '🎤', title: 'Interview Prep', desc: '1075 lines of interview prep', slug: 'interview' },
  { icon: '⚡', title: 'Cheat Sheet', desc: 'Cram in 15 minutes', slug: 'cheatsheet' },
  { icon: '🎯', title: 'Question Bank', desc: '320+ interview questions', slug: 'question-bank' },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <motion.div
      className="welcome"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div className="welcome-hero" variants={itemVariants}>
        <div className="welcome-icon-wrapper">
          <span>📚</span>
        </div>
        <h1 className="welcome-title">TPM Interview Prep Library</h1>
        <p className="welcome-subtitle">
          Your complete TPM study library — 17 documents, 24-week plan, 320+ interview questions.
          Built for Biren&apos;s TPM transition journey.
        </p>
      </motion.div>

      {/* Animated Stats */}
      <motion.div className="welcome-stats" variants={itemVariants}>
        <div className="stat-card">
          <AnimatedCounter target={DOCS.length} />
          <span className="stat-label">Documents</span>
        </div>
        <div className="stat-card">
          <AnimatedCounter target={24} suffix=" wks" />
          <span className="stat-label">Study Plan</span>
        </div>
        <div className="stat-card">
          <AnimatedCounter target={320} suffix="+" />
          <span className="stat-label">Questions</span>
        </div>
        <div className="stat-card">
          <AnimatedCounter target={16500} prefix="~" />
          <span className="stat-label">Total Lines</span>
        </div>
      </motion.div>

      {/* Quick Start Cards */}
      <motion.div className="quick-start-section" variants={itemVariants}>
        <h2 className="quick-start-section-title">Quick Start</h2>
        <div className="quick-start-grid">
          {quickStartItems.map((item, i) => (
            <motion.div
              key={item.slug}
              className="quick-start-card"
              onClick={() => { triggerNavProgress(); router.push(`/docs/${item.slug}`); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="quick-start-card-icon">{item.icon}</span>
              <div className="quick-start-card-content">
                <div className="quick-start-card-text">{item.title}</div>
                <div className="quick-start-card-desc">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      <motion.div variants={itemVariants}>
        <p className="welcome-hint">
          Select a document from the sidebar or click a card above to begin studying.
        </p>
        <div className="welcome-features">
          {[
            { icon: '⌨️', text: 'Press  ', kbd: '/', textAfter: ' to search across all documents' },
            { icon: '🌓', text: 'Toggle dark/light theme in sidebar' },
            { icon: '📱', text: 'Works on desktop & mobile' },
            { icon: '⚡', text: 'Built with Next.js — fast static site on Vercel' },
          ].map((feat, i) => (
            <motion.div
              key={i}
              className="feature-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
            >
              <span className="feature-icon">{feat.icon}</span>
              {feat.kbd ? (
                <>
                  {feat.text}<kbd>{feat.kbd}</kbd>{feat.textAfter}
                </>
              ) : (
                feat.text
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
