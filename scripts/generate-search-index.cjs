/**
 * Build-time Search Index Generator
 *
 * This script generates a pre-built search index JSON (public/search-index.json)
 * so the Sidebar doesn't need to fetch and parse every document
 * to build its search index.
 *
 * Run as: node scripts/generate-search-index.cjs
 * Called automatically via "prebuild" in package.json
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content');
const SEARCH_INDEX_PATH = path.join(ROOT, 'public', 'search-index.json');

// Document registry (keep in sync with lib/docs.ts)
const DOCS = [
  { id: 'index', file: 'INDEX.md' },
  { id: 'roadmap', file: 'ROADMAP.md' },
  { id: 'study-plan', file: '01_TPM_24_Week_Consolidated_Study_Plan.md' },
  { id: 'playbook', file: 'core/TPM_Transition_24_Week_Playbook_v5.md' },
  { id: 'frameworks', file: '02_TPM_Frameworks_Beginners_Guide.md' },
  { id: 'competencies', file: '03_TPM_Six_Core_Competencies_Deep_Dive.md' },
  { id: 'planning', file: '04_TPM_Planning_Estimation_Guide.md' },
  { id: 'risk', file: '05_TPM_Risk_Dependency_Management.md' },
  { id: 'metrics', file: '06_TPM_Metrics_Execution_Tracking.md' },
  { id: 'stakeholder', file: '07_TPM_Stakeholder_Communication_Guide.md' },
  { id: 'tools', file: '08_TPM_Tools_Artifacts_Guide.md' },
  { id: 'tech-depth', file: '09_TPM_Technical_Depth_Research_Report.md' },
  { id: 'interview', file: '10_TPM_Interview_Prep_Guide.md' },
  { id: 'cheatsheet', file: '11_TPM_Quick_Reference_Cheat_Sheet.md' },
  { id: 'glossary', file: '12_TPM_Glossary.md' },
  { id: 'question-bank', file: '13_TPM_Question_Bank.md' },
];

function main() {
  console.log('🔨 Generating search index...');

  // Ensure public/ directory exists
  const publicDir = path.join(ROOT, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Read all markdown files and build search index
  const searchIndex = [];

  for (const doc of DOCS) {
    const filePath = path.join(CONTENT_DIR, doc.file);
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      searchIndex.push({
        docId: doc.id,
        text: content,
      });
    } catch (err) {
      console.warn(`  ⚠ Could not read ${doc.file}: ${err.message}`);
    }
  }

  // Write search index
  fs.writeFileSync(SEARCH_INDEX_PATH, JSON.stringify(searchIndex), 'utf-8');
  console.log(`  ✅ Search index written to public/search-index.json (${searchIndex.length} documents)`);

  // Report file sizes
  const stats = fs.statSync(SEARCH_INDEX_PATH);
  const sizeKB = (stats.size / 1024).toFixed(1);
  console.log(`  📦 Search index size: ${sizeKB} KB`);

  console.log('✅ Done!');
}

main();
