/**
 * Document Registry
 *
 * Central registry of all markdown documents in the study library.
 * This is the single source of truth for document metadata.
 * Add new documents here to make them appear in navigation and search.
 */

export interface DocMeta {
  /** Unique identifier used in URLs */
  id: string;
  /** Relative path from content/ directory */
  file: string;
  /** Display title */
  title: string;
  /** Navigation group for sidebar organization */
  group: GroupName;
  /** Emoji icon */
  icon: string;
  /** Optional badge text (e.g., line count) */
  badge: string;
}

export type GroupName = 'Start Here' | 'Core Knowledge' | 'Deep Dive' | 'Interview Prep';

export const GROUP_ORDER: GroupName[] = ['Start Here', 'Core Knowledge', 'Deep Dive', 'Interview Prep'];

export const GROUP_ICONS: Record<GroupName, string> = {
  'Start Here': '🚀',
  'Core Knowledge': '🏗️',
  'Deep Dive': '📘',
  'Interview Prep': '🎤',
};

export const DOCS: DocMeta[] = [
  // Start Here
  { id: 'index', file: 'INDEX.md', title: 'Navigation Index', group: 'Start Here', icon: '🗺️', badge: '' },
  { id: 'roadmap', file: 'ROADMAP.md', title: 'Learning Roadmap', group: 'Start Here', icon: '🧭', badge: '' },
  { id: 'study-plan', file: '01_TPM_24_Week_Consolidated_Study_Plan.md', title: '24-Week Study Plan', group: 'Start Here', icon: '📅', badge: '' },
  { id: 'playbook', file: 'core/TPM_Transition_24_Week_Playbook_v5.md', title: 'Career Playbook', group: 'Start Here', icon: '🎯', badge: 'Personal' },

  // Core Knowledge
  { id: 'frameworks', file: '02_TPM_Frameworks_Beginners_Guide.md', title: 'Frameworks Beginners Guide', group: 'Core Knowledge', icon: '🏗️', badge: '2120 ln' },
  { id: 'competencies', file: '03_TPM_Six_Core_Competencies_Deep_Dive.md', title: 'Six Core Competencies', group: 'Core Knowledge', icon: '⭐', badge: '1615 ln' },
  { id: 'planning', file: '04_TPM_Planning_Estimation_Guide.md', title: 'Planning & Estimation', group: 'Core Knowledge', icon: '📐', badge: '1735 ln' },

  // Deep Dive
  { id: 'risk', file: '05_TPM_Risk_Dependency_Management.md', title: 'Risk & Dependency Mgmt', group: 'Deep Dive', icon: '🛡️', badge: '1504 ln' },
  { id: 'metrics', file: '06_TPM_Metrics_Execution_Tracking.md', title: 'Metrics & Execution', group: 'Deep Dive', icon: '📊', badge: '1435 ln' },
  { id: 'stakeholder', file: '07_TPM_Stakeholder_Communication_Guide.md', title: 'Stakeholder Comms', group: 'Deep Dive', icon: '🤝', badge: '1299 ln' },
  { id: 'tools', file: '08_TPM_Tools_Artifacts_Guide.md', title: 'Tools & Artifacts Guide', group: 'Deep Dive', icon: '🔧', badge: '1711 ln' },

  // Interview Prep
  { id: 'tech-depth', file: '09_TPM_Technical_Depth_Research_Report.md', title: 'Technical Depth Research', group: 'Interview Prep', icon: '🔬', badge: '529 ln' },
  { id: 'interview', file: '10_TPM_Interview_Prep_Guide.md', title: 'Interview Prep Guide', group: 'Interview Prep', icon: '🎤', badge: '1075 ln' },
  { id: 'cheatsheet', file: '11_TPM_Quick_Reference_Cheat_Sheet.md', title: 'Quick Reference Sheet', group: 'Interview Prep', icon: '⚡', badge: '289 ln' },
  { id: 'glossary', file: '12_TPM_Glossary.md', title: 'Glossary', group: 'Interview Prep', icon: '📖', badge: '435 ln' },
  { id: 'question-bank', file: '13_TPM_Question_Bank.md', title: 'Question Bank (320+)', group: 'Interview Prep', icon: '🎯', badge: 'NEW' },
];

/** Resolve the full filesystem path for a document's markdown file */
export function getDocPath(doc: DocMeta): string {
  return `${process.cwd()}/content/${doc.file}`;
}

/** Find document metadata by slug/ID */
export function getDocBySlug(slug: string): DocMeta | undefined {
  return DOCS.find((d) => d.id === slug);
}

/** Get all documents grouped by their navigation group */
export function getDocsByGroup(): Record<GroupName, DocMeta[]> {
  const groups: Record<string, DocMeta[]> = {};
  for (const doc of DOCS) {
    if (!groups[doc.group]) groups[doc.group] = [];
    groups[doc.group].push(doc);
  }
  return groups as Record<GroupName, DocMeta[]>;
}

/** Get all document slugs for static generation */
export function getAllSlugs(): string[] {
  return DOCS.map((d) => d.id);
}
