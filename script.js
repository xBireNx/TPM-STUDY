/* =============================================
   TPM Study Library - Application Script
   ============================================= */

(function() {
  'use strict';

  // --- Configuration ---
  const IS_FILE_PROTOCOL = location.protocol === 'file:';
  // Markdown files are in the content/ subfolder
  const BASE_PATH = './content/';

  const STORAGE_KEY_THEME = 'tpm-theme';
  const STORAGE_KEY_LAST_DOC = 'tpm-last-doc';
  const STORAGE_KEY_GROUPS = 'tpm-nav-groups';

  // --- Document Registry ---
  const DOCS = [
    // Master Plan & Career
    { id: 'index',         file: 'INDEX.md',              title: 'Navigation Index',        group: 'Start Here',          icon: '🗺️', badge: '' },
    { id: 'roadmap',       file: 'ROADMAP.md',            title: 'Learning Roadmap',        group: 'Start Here',          icon: '🧭', badge: '' },
    { id: 'study-plan',    file: '01_TPM_24_Week_Consolidated_Study_Plan.md', title: '24-Week Study Plan', group: 'Start Here', icon: '📅', badge: '' },
    { id: 'playbook',      file: 'core/TPM_Transition_24_Week_Playbook_v5.md', title: 'Career Playbook', group: 'Start Here', icon: '🎯', badge: 'Personal' },

    // Core Frameworks
    { id: 'frameworks',    file: '02_TPM_Frameworks_Beginners_Guide.md', title: 'Frameworks Beginners Guide', group: 'Core Knowledge', icon: '🏗️', badge: '2120 ln' },
    { id: 'competencies',  file: '03_TPM_Six_Core_Competencies_Deep_Dive.md', title: 'Six Core Competencies', group: 'Core Knowledge', icon: '⭐', badge: '1615 ln' },
    { id: 'planning',      file: '04_TPM_Planning_Estimation_Guide.md', title: 'Planning & Estimation', group: 'Core Knowledge', icon: '📐', badge: '1735 ln' },

    // Deep Dive
    { id: 'risk',          file: '05_TPM_Risk_Dependency_Management.md', title: 'Risk & Dependency Mgmt', group: 'Deep Dive', icon: '🛡️', badge: '1504 ln' },
    { id: 'metrics',       file: '06_TPM_Metrics_Execution_Tracking.md', title: 'Metrics & Execution', group: 'Deep Dive', icon: '📊', badge: '1435 ln' },
    { id: 'stakeholder',   file: '07_TPM_Stakeholder_Communication_Guide.md', title: 'Stakeholder Comms', group: 'Deep Dive', icon: '🤝', badge: '1299 ln' },
    { id: 'tools',         file: '08_TPM_Tools_Artifacts_Guide.md', title: 'Tools & Artifacts Guide', group: 'Deep Dive', icon: '🔧', badge: '1711 ln' },

    // Advanced & Interview
    { id: 'tech-depth',    file: '09_TPM_Technical_Depth_Research_Report.md', title: 'Technical Depth Research', group: 'Interview Prep', icon: '🔬', badge: '529 ln' },
    { id: 'interview',     file: '10_TPM_Interview_Prep_Guide.md', title: 'Interview Prep Guide', group: 'Interview Prep', icon: '🎤', badge: '1075 ln' },
    { id: 'cheatsheet',    file: '11_TPM_Quick_Reference_Cheat_Sheet.md', title: 'Quick Reference Sheet', group: 'Interview Prep', icon: '⚡', badge: '289 ln' },
    { id: 'glossary',      file: '12_TPM_Glossary.md', title: 'Glossary', group: 'Interview Prep', icon: '📖', badge: '435 ln' },
    { id: 'question-bank', file: '13_TPM_Question_Bank.md', title: 'Question Bank (320+)', group: 'Interview Prep', icon: '🎯', badge: 'NEW' },
  ];

  // Group order
  const GROUP_ORDER = ['Start Here', 'Core Knowledge', 'Deep Dive', 'Interview Prep'];
  const GROUP_ICONS = {
    'Start Here': '🚀',
    'Core Knowledge': '🏗️',
    'Deep Dive': '📘',
    'Interview Prep': '🎤',
  };

  // --- DOM References ---
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const sidebar = $('#sidebar');
  const overlay = $('#sidebar-overlay');
  const sidebarToggle = $('#sidebar-toggle');
  const sidebarClose = $('#sidebar-close');
  const sidebarNav = $('#sidebar-nav');
  const searchInput = $('#search-input');
  const themeToggle = $('#theme-toggle');
  const docTitle = $('#doc-title');
  const docContent = $('#doc-content');
  const docHeading = $('#doc-heading');
  const docMeta = $('#doc-meta');
  const docBody = $('#doc-body');
  const welcome = $('#welcome');
  const loading = $('#loading');
  const error = $('#error');
  const errorMessage = $('#error-message');
  const errorRetry = $('#error-retry');

  // --- State ---
  let currentDocId = null;
  let allTextContent = {};        // cache for search: docId -> full text
  let searchResults = [];         // current search results
  let searchIdx = 0;              // selected search result index
  let abortController = null;     // for cancelling fetch

  // --- Markdown Configuration ---
  const RENDERER = new marked.Renderer();

  // Custom heading renderer with IDs for anchor linking
  RENDERER.heading = function({ text, depth }) {
    const slug = text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return `<h${depth} id="${slug}">${text}</h${depth}>`;
  };

  // Open external links in new tab
  RENDERER.link = function({ href, title, text }) {
    const isExternal = href && href.startsWith('http');
    const attrs = isExternal ? ' target="_blank" rel="noopener"' : '';
    const titleAttr = title ? ` title="${title}"` : '';
    return `<a href="${href}"${titleAttr}${attrs}>${text}</a>`;
  };

  marked.setOptions({
    renderer: RENDERER,
    breaks: true,
    gfm: true,
  });

  // --- Theme ---
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY_THEME);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  // --- Sidebar ---
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- Build Navigation ---
  function buildNav() {
    // Read collapsed state from localStorage
    let groupStates = {};
    try {
      groupStates = JSON.parse(localStorage.getItem(STORAGE_KEY_GROUPS)) || {};
    } catch(e) { /* ignore */ }

    const groups = {};
    DOCS.forEach(doc => {
      if (!groups[doc.group]) groups[doc.group] = [];
      groups[doc.group].push(doc);
    });

    let html = '';
    GROUP_ORDER.forEach(groupName => {
      const items = groups[groupName];
      if (!items || !items.length) return;
      const groupIcon = GROUP_ICONS[groupName] || '📄';
      const collapsed = groupStates[groupName] ? 'collapsed' : '';
      const arrowClass = collapsed ? 'nav-group-arrow collapsed' : 'nav-group-arrow';

      html += `<div class="nav-group">
        <div class="nav-group-header" data-group="${groupName}">
          <span class="${arrowClass}">▼</span>
          ${groupIcon} ${groupName}
        </div>
        <div class="nav-group-items ${collapsed}" data-group="${groupName}">`;

      items.forEach(doc => {
        const active = doc.id === currentDocId ? 'active' : '';
        html += `<div class="nav-item ${active}" data-doc="${doc.id}">
          <span class="nav-item-icon">${doc.icon || '📄'}</span>
          <span class="nav-item-text">${doc.title}</span>
          ${doc.badge ? `<span class="nav-item-badge">${doc.badge}</span>` : ''}
        </div>`;
      });

      html += `</div></div>`;
    });

    sidebarNav.innerHTML = html;

    // Navigation click handlers
    $$('.nav-item').forEach(el => {
      el.addEventListener('click', () => {
        const docId = el.dataset.doc;
        loadDocument(docId);
        closeSidebar();
      });
    });

    // Group collapse/expand
    $$('.nav-group-header').forEach(el => {
      el.addEventListener('click', () => {
        const groupName = el.dataset.group;
        const items = el.nextElementSibling;
        const arrow = el.querySelector('.nav-group-arrow');
        items.classList.toggle('collapsed');
        arrow.classList.toggle('collapsed');

        // Save state
        const isCollapsed = items.classList.contains('collapsed');
        let states = {};
        try { states = JSON.parse(localStorage.getItem(STORAGE_KEY_GROUPS)) || {}; } catch(e) {}
        if (isCollapsed) states[groupName] = true;
        else delete states[groupName];
        localStorage.setItem(STORAGE_KEY_GROUPS, JSON.stringify(states));
      });
    });
  }

  // --- Update active nav ---
  function updateActiveNav(docId) {
    $$('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.doc === docId);
    });
  }

  // --- Load Document ---
  async function loadDocument(docId) {
    const doc = DOCS.find(d => d.id === docId);
    if (!doc) return;

    // Cancel previous fetch
    if (abortController) abortController.abort();
    abortController = new AbortController();

    currentDocId = docId;
    localStorage.setItem(STORAGE_KEY_LAST_DOC, docId);

    // On file:// protocol, show welcome banner instead of attempting fetch
    if (IS_FILE_PROTOCOL) {
      loading.style.display = 'none';
      welcome.style.display = 'block';
      const banner = document.getElementById('file-protocol-banner');
      if (banner) banner.style.display = 'flex';
      error.style.display = 'none';
      docContent.style.display = 'none';
      docTitle.textContent = 'TPM Study Library';
      updateActiveNav(null);
      return;
    }

    // Show loading
    welcome.style.display = 'none';
    docContent.style.display = 'none';
    error.style.display = 'none';
    loading.style.display = 'flex';

    // Update title
    docTitle.textContent = doc.title;
    updateActiveNav(docId);
    searchInput.value = '';
    clearSearchResults();

    try {
      const response = await fetch(BASE_PATH + doc.file, {
        signal: abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`Failed to load (${response.status} ${response.statusText})`);
      }

      let text = await response.text();

      // Show content
      loading.style.display = 'none';
      docContent.style.display = 'block';

      // Set heading and meta
      const firstLine = text.split('\n')[0] || '';
      const headingText = firstLine.replace(/^#+\s*/, '').trim();
      docHeading.textContent = headingText || doc.title;

      let metaHtml = `<span class="doc-meta-tag">📄 ${doc.file.split('/').pop()}</span>`;
      metaHtml += `<span class="doc-meta-tag">📏 ~${doc.file === '13_TPM_Question_Bank.md' ? '320+' : doc.badge || ''}</span>`;
      docMeta.innerHTML = metaHtml;

      // Render markdown
      const html = marked.parse(text);

      // Process HTML to fix anchor links from markdown cross-refs
      // Only process links outside of <code> and <pre> blocks
      const codeBlockRegex = /<(code|pre)[^>]*>[\s\S]*?<\/(code|pre)>/gi;
      let processed;
      let lastIndex = 0;
      let parts = [];
      let match;

      // Reset regex state
      codeBlockRegex.lastIndex = 0;

      while ((match = codeBlockRegex.exec(html)) !== null) {
        // Add text before this code block, with links processed
        const beforeBlock = html.slice(lastIndex, match.index);
        const processedBefore = beforeBlock.replace(/href="([^"]+\.md)"/gi, (m, filePath) => {
          const linkedDoc = DOCS.find(d => filePath.includes(d.file.split('/').pop()));
          if (linkedDoc) {
            return `href="#" class="doc-link" data-doc="${linkedDoc.id}"`;
          }
          return m;
        });
        parts.push(processedBefore);
        // Keep code block as-is
        parts.push(match[0]);
        lastIndex = match.index + match[0].length;
      }

      // Process remaining text after last code block
      const remaining = html.slice(lastIndex);
      parts.push(remaining.replace(/href="([^"]+\.md)"/gi, (m, filePath) => {
        const linkedDoc = DOCS.find(d => filePath.includes(d.file.split('/').pop()));
        if (linkedDoc) {
          return `href="#" class="doc-link" data-doc="${linkedDoc.id}"`;
        }
        return m;
      }));

      processed = parts.join('');

      docBody.innerHTML = processed;

      // Bind cross-doc links
      docBody.querySelectorAll('.doc-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = link.dataset.doc;
          if (target) loadDocument(target);
        });
      });

      // Scroll to top
      document.querySelector('.content-wrapper').scrollTop = 0;

    } catch (err) {
      if (err.name === 'AbortError') return;
      loading.style.display = 'none';
      error.style.display = 'flex';
      errorMessage.textContent = err.message || 'An unexpected error occurred.';
      errorRetry.onclick = () => loadDocument(docId);
    }
  }

  // --- Search ---
  let searchCachePromise = null;

  async function ensureTextCache() {
    if (searchCachePromise) return searchCachePromise;

    searchCachePromise = (async () => {
      const searchStatus = document.getElementById('search-status');
      if (searchStatus) searchStatus.textContent = 'Indexing documents for search...';

      // Load documents sequentially to avoid overwhelming the browser/server
      for (const doc of DOCS) {
        if (allTextContent[doc.id]) continue;
        try {
          const resp = await fetch(BASE_PATH + doc.file);
          if (resp.ok) {
            allTextContent[doc.id] = await resp.text();
          }
        } catch(e) { /* skip */ }
      }

      if (searchStatus) searchStatus.textContent = '';
    })();

    return searchCachePromise;
  }

  function performSearch(query) {
    query = query.toLowerCase().trim();
    if (!query || query.length < 2) {
      clearSearchResults();
      return;
    }

    // Show loading state if cache may not be ready
    const cachedCount = Object.keys(allTextContent).length;
    if (cachedCount < DOCS.length) {
      sidebarNav.innerHTML = `<div class="search-empty">⏳ Indexing documents... (${cachedCount}/${DOCS.length})</div>`;
      // Re-trigger search once indexing completes
      ensureTextCache().then(() => performSearch(query));
      return;
    }

    const results = [];
    DOCS.forEach(doc => {
      const text = allTextContent[doc.id];
      if (!text) return;

      const lower = text.toLowerCase();
      let idx = lower.indexOf(query);
      let count = 0;
      while (idx !== -1 && count < 3) {
        count++;
        // Extract context around the match
        const start = Math.max(0, idx - 60);
        const end = Math.min(text.length, idx + query.length + 60);
        let preview = text.substring(start, end);
        if (start > 0) preview = '...' + preview;
        if (end < text.length) preview += '...';

        // Bold the matching portion
        const queryIdxInPreview = preview.toLowerCase().indexOf(query);
        if (queryIdxInPreview !== -1) {
          preview = preview.substring(0, queryIdxInPreview) +
            '<mark>' + preview.substring(queryIdxInPreview, queryIdxInPreview + query.length) + '</mark>' +
            preview.substring(queryIdxInPreview + query.length);
        }

        // Get line number (approximate)
        const beforeText = text.substring(0, idx);
        const lineNum = (beforeText.match(/\n/g) || []).length + 1;

        results.push({
          docId: doc.id,
          docTitle: doc.title,
          docIcon: doc.icon || '📄',
          preview: preview,
          lineNum: lineNum,
        });

        idx = lower.indexOf(query, idx + 1);
      }
    });

    // Sort by doc group order
    results.sort((a, b) => {
      const docA = DOCS.find(d => d.id === a.docId);
      const docB = DOCS.find(d => d.id === b.docId);
      const iA = GROUP_ORDER.indexOf(docA ? docA.group : '');
      const iB = GROUP_ORDER.indexOf(docB ? docB.group : '');
      return iA - iB || (docA ? docA.title.localeCompare(docB ? docB.title : '') : 0);
    });

    searchResults = results;
    searchIdx = 0;
    renderSearchResults(query);
  }

  function clearSearchResults() {
    searchResults = [];
    searchIdx = 0;
    // Restore normal nav
    buildNav();
    updateActiveNav(currentDocId);
  }

  function renderSearchResults(query) {
    if (!searchResults.length) {
      sidebarNav.innerHTML = `<div class="search-empty">No results found for "<strong>${query}</strong>"</div>`;
      return;
    }

    let html = `<div class="search-result-count" style="padding:8px 18px;font-size:11px;color:var(--text-tertiary);">
      ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "<strong>${query}</strong>"
    </div>`;

    searchResults.forEach((r, i) => {
      html += `<div class="search-result-item" data-index="${i}" data-doc="${r.docId}">
        <div class="search-result-title">${r.docIcon} ${r.docTitle} <span style="font-size:11px;color:var(--text-tertiary);">line ${r.lineNum}</span></div>
        <div class="search-result-preview">${r.preview}</div>
      </div>`;
    });

    sidebarNav.innerHTML = html;

    // Bind click
    $$('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const docId = el.dataset.doc;
        if (docId) {
          loadDocument(docId);
          closeSidebar();
        }
      });
    });
  }

  // --- Search Input ---
  let searchTimeout = null;

  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    const val = searchInput.value.trim();
    if (val.length < 2) {
      clearSearchResults();
      return;
    }
    searchTimeout = setTimeout(() => performSearch(val), 200);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      searchInput.blur();
      clearSearchResults();
    }

    // Navigate results with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (searchResults.length === 0) return;
      const dir = e.key === 'ArrowDown' ? 1 : -1;
      searchIdx = Math.max(0, Math.min(searchResults.length - 1, searchIdx + dir));

      // Update highlighted item
      $$('.search-result-item').forEach((el, i) => {
        el.style.background = i === searchIdx ? 'var(--bg-hover)' : '';
        el.style.borderLeftColor = i === searchIdx ? 'var(--accent)' : 'transparent';
      });

      // Scroll into view
      const active = document.querySelector(`.search-result-item[data-index="${searchIdx}"]`);
      if (active) active.scrollIntoView({ block: 'nearest' });
    }

    if (e.key === 'Enter' && searchResults.length > 0) {
      const result = searchResults[searchIdx] || searchResults[0];
      if (result) {
        loadDocument(result.docId);
        closeSidebar();
      }
    }
  });

  // --- Keyboard shortcut for search ---
  document.addEventListener('keydown', (e) => {
    // / key to focus search
    if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      searchInput.focus();
    }
    // Escape to close sidebar
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // --- Init ---
  async function init() {
    // Set theme
    setTheme(getPreferredTheme());

    // Build navigation
    buildNav();

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Sidebar toggle
    sidebarToggle.addEventListener('click', openSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Pre-cache text content for search
    ensureTextCache();

    // Load last document or welcome
    const lastDoc = localStorage.getItem(STORAGE_KEY_LAST_DOC);
    if (lastDoc && DOCS.find(d => d.id === lastDoc)) {
      loadDocument(lastDoc);
    }
  }

  // --- Detect file:// protocol ---
  function detectFileProtocol() {
    if (!IS_FILE_PROTOCOL) return;
    const banner = document.getElementById('file-protocol-banner');
    if (banner) banner.style.display = 'flex';
    console.warn('Running from file:// protocol. Use a local server or deploy to GitHub Pages.');
  }

  // Init
  init().then(detectFileProtocol);
})();
