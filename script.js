// ============================================================
// SCRIPT.JS — Soubhik Das Portfolio
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Build all sections (order matters)
  buildNavbar();
  buildHero();
  buildAbout();
  buildSkills();
  buildProjects();
  buildEducation();
  buildJourney();
  buildContact();
  buildFooter();

  // Init interactive features after DOM is fully built
  initTheme();
  initNavScroll();
  initMobileMenu();
  initTypingAnimation();
  initScrollReveal();
  initActiveNav();
  initContactForm();
  initSkillsFilter();
});

// ─── NAVBAR ─────────────────────────────────────────────────
function buildNavbar() {
  const nav = document.getElementById('navbar');
  const sections = ['home','about','skills','projects','education','journey','contact'];
  nav.innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <a href="#home" class="nav-logo">SOUBHIK</a>
        <nav aria-label="Main navigation">
          <ul class="nav-links">
            ${sections.map(s => `<li><a href="#${s}" data-section="${s}">${cap(s)}</a></li>`).join('')}
          </ul>
        </nav>
        <div class="nav-actions">
          <button class="theme-btn" id="themeToggle" aria-label="Toggle theme">🌙</button>
          <a href="${personal.resume}" download class="btn btn-primary nav-resume">
            ${icoDownload()} Resume
          </a>
          <button class="hamburger" id="hamburger" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>`;

  const mob = document.getElementById('mobileMenu');
  mob.innerHTML = sections.map(s =>
    `<a href="#${s}" class="mob-link">${cap(s)}</a>`
  ).join('') +
  `<a href="${personal.resume}" download style="color:var(--accent);font-weight:600;padding:10px 24px;display:block;font-size:0.87rem;">
    ${icoDownload()} Download Resume
  </a>`;
}

// ─── HERO ────────────────────────────────────────────────────
function buildHero() {
  document.getElementById('hero-left').innerHTML = `
    <div class="hero-eyebrow">
      <span class="dot"></span> Available for Opportunities
    </div>
    <h1 class="hero-name">Hi, I'm <span class="accent">${personal.name}</span></h1>
    <p class="hero-title">${personal.title} · ${personal.subtitle}</p>
    <div class="typing-row">
      <span class="typing-prefix">&gt;&nbsp;</span>
      <span id="typing-text"></span><span class="cursor"></span>
    </div>
    <p class="hero-desc">${personal.intro}</p>
    <div class="hero-actions">
      <a href="#projects" class="btn btn-primary">${icoCode()} View Projects</a>
      <a href="${personal.resume}" download class="btn btn-outline">${icoDownload()} Resume</a>
    </div>
    <div class="hero-socials">
      <a href="${personal.github}"   target="_blank" rel="noopener" class="hero-social" aria-label="GitHub">${icoGithub()}</a>
      <a href="${personal.linkedin}" target="_blank" rel="noopener" class="hero-social" aria-label="LinkedIn">${icoLinkedin()}</a>
      <a href="mailto:${personal.email}" class="hero-social" aria-label="Email">${icoMail()}</a>
    </div>`;

  document.getElementById('hero-right').innerHTML = `
    <div class="hero-card">
      ${[
        { icon:'🎓', label:'Degree', value:'BCA – 2027' },
        { icon:'⭐', label:'CGPA',   value:'9.14 / 10' },
        { icon:'📍', label:'Location',value:'Pune, Maharashtra' },
        { icon:'💼', label:'Status',  value:'Open to Opportunities' },
      ].map(r => `
        <div class="hero-card-item">
          <div class="hero-card-icon">${r.icon}</div>
          <div>
            <div class="hero-card-label">${r.label}</div>
            <div class="hero-card-value">${r.value}</div>
          </div>
        </div>`).join('')}
    </div>`;
}

// ─── ABOUT ───────────────────────────────────────────────────
function buildAbout() {
  const interests = [
    { icon:'⚙️', title:'Backend Engineering', chips:['Java','Spring Boot','REST APIs','JPA/Hibernate'] },
    { icon:'☁️', title:'Cloud Engineering',    chips:['AWS EC2','AWS S3','AWS RDS','Cloud Deployment'] },
    { icon:'🔄', title:'DevOps Engineering',   chips:['Docker','Linux','GitHub Actions','CI/CD'] },
  ];
  document.getElementById('about-content').innerHTML = `
    <div class="about-grid">
      <div class="about-text reveal">
        ${personal.about.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')}
        <blockquote class="about-quote">"${personal.quote}"</blockquote>
        <div class="about-tags">
          ${['Pune, India','BCA Graduate (2027)','Open to Work'].map(t =>
            `<span class="about-tag">📌 ${t}</span>`).join('')}
        </div>
      </div>
      <div class="interest-list reveal reveal-d1">
        ${interests.map(c => `
          <div class="interest-item">
            <div class="interest-icon">${c.icon}</div>
            <div>
              <div class="interest-title">${c.title}</div>
              <div class="interest-chips">
                ${c.chips.map(ch => `<span class="chip">${ch}</span>`).join('')}
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

// ─── SKILLS ──────────────────────────────────────────────────
function buildSkills() {
  const cats = [
    { key:'languages', label:'Programming Languages', icon:'💻', data: skills.languages },
    { key:'backend',   label:'Backend Development',   icon:'🍃', data: skills.backend },
    { key:'databases', label:'Databases',             icon:'🗄️', data: skills.databases },
    { key:'cloud',     label:'Cloud – AWS',           icon:'☁️', data: skills.cloud },
    { key:'devops',    label:'DevOps & Infra',        icon:'🔄', data: skills.devops },
    { key:'tools',     label:'Tools',                 icon:'🛠️', data: skills.tools },
  ];
  const filterLabels = ['All','Languages','Backend','Databases','Cloud','DevOps','Tools'];
  const filterMap = {
    'All':'all','Languages':'languages','Backend':'backend',
    'Databases':'databases','Cloud':'cloud','DevOps':'devops','Tools':'tools'
  };

  document.getElementById('skills-content').innerHTML = `
    <div class="skills-filter">
      ${filterLabels.map((l,i) =>
        `<button class="filter-btn ${i===0?'active':''}" data-filter="${filterMap[l]}">${l}</button>`
      ).join('')}
    </div>
    <div class="skills-grid" id="skillsGrid">
      ${cats.map(c => `
        <div class="skill-category reveal" data-category="${c.key}">
          <div class="skill-cat-header">
            <div class="skill-cat-icon">${c.icon}</div>
            <div>
              <div class="skill-cat-title">${c.label}</div>
              <div class="skill-cat-count">${c.data.length} technologies</div>
            </div>
          </div>
          <div class="skill-chips">
            ${c.data.map(s => `
              <div class="skill-chip">
                <span class="icon">${s.icon}</span>${s.name}
              </div>`).join('')}
          </div>
        </div>`).join('')}
    </div>
    <div class="reveal">
      <div class="exploring-title">Currently Exploring</div>
      <div class="exploring-chips">
        ${skills.exploring.map(s => `
          <div class="explore-chip">
            ${s.icon} ${s.name}<span class="lrn">learning</span>
          </div>`).join('')}
      </div>
    </div>`;
}

// ─── PROJECTS ────────────────────────────────────────────────
function buildProjects() {
  const icons = ['🚀','🛍️','🚁'];
  document.getElementById('projects-grid').innerHTML = projects.map((p, i) => `
    <div class="project-card reveal reveal-d${(i%3)+1}">
      <div class="project-header">
        <div class="project-icon-wrap">${icons[i]||'💻'}</div>
        <div class="project-title-area">
          <div class="project-title">${p.title}</div>
          <div class="project-subtitle">${p.subtitle}</div>
        </div>
        <span class="badge ${p.status==='Live'?'badge-green':p.status==='In Progress'?'badge-yellow':'badge-blue'}">
          ${p.status}
        </span>
      </div>
      <div class="project-body">
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <button class="project-features-toggle" onclick="toggleFeatures(this)">
          ${icoChevron()} View Features
        </button>
        <div class="project-features">
          ${p.features.map(f => `<div class="project-feature-item">${f}</div>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener" class="project-link link-gh">
            ${icoGithub()} GitHub
          </a>
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="project-link link-live">${icoExternal()} Live Demo</a>` : ''}
        </div>
      </div>
    </div>`).join('');
}

// ─── EDUCATION ───────────────────────────────────────────────
function buildEducation() {
  const e = education[0];
  document.getElementById('education-content').innerHTML = `
    <div class="edu-card reveal">
      <div class="edu-top">
        <div class="edu-icon-wrap">${e.icon}</div>
        <div>
          <div class="edu-degree">${e.degree}</div>
          <div class="edu-institution">${e.institution}</div>
          <div class="edu-location">📍 ${e.location}</div>
        </div>
      </div>
      <div class="edu-stats">
        <div class="edu-stat">
          <div class="edu-stat-label">Expected Graduation</div>
          <div class="edu-stat-value">${e.year}</div>
        </div>
        <div class="edu-stat">
          <div class="edu-stat-label">Current CGPA</div>
          <div class="edu-stat-value">⭐ ${e.cgpa}</div>
        </div>
      </div>
    </div>`;
}

// ─── JOURNEY ─────────────────────────────────────────────────
function buildJourney() {
  const paths = [journey.backend, journey.cloud, journey.devops];
  document.getElementById('journey-grid').innerHTML = paths.map((p, i) => `
    <div class="journey-path reveal reveal-d${i+1}">
      <div class="journey-path-header">
        <div class="journey-path-icon">${p.icon}</div>
        <div class="journey-path-title">${p.title}</div>
      </div>
      <div class="journey-steps">
        ${p.steps.map((step, n) => {
          const isLast = n === p.steps.length - 1;
          const isLearning = step.toLowerCase().includes('(learning)');
          return `<div class="journey-step${isLearning?' learning':''}">
            <span class="step-num${isLearning?' learn':''}">${n+1}</span>
            ${step}
          </div>`;
        }).join('')}
      </div>
    </div>`).join('');
}

// ─── CONTACT ─────────────────────────────────────────────────
function buildContact() {
  document.getElementById('contact-links').innerHTML = [
    { icon:'🐙', label:'GitHub',   sub:'soubhik-das-09',    href: personal.github },
    { icon:'💼', label:'LinkedIn', sub:'Connect with me',   href: personal.linkedin },
    { icon:'📧', label:'Email',    sub: personal.email,     href:`mailto:${personal.email}` },
  ].map(l => `
    <a href="${l.href}" target="_blank" rel="noopener" class="contact-link">
      <div class="contact-link-icon">${l.icon}</div>
      <div>
        <strong>${l.label}</strong>
        <span>${l.sub}</span>
      </div>
    </a>`).join('');
}

// ─── FOOTER ──────────────────────────────────────────────────
function buildFooter() {
  document.getElementById('footer-socials').innerHTML = [
    { html: icoGithub(),   href: personal.github,          label:'GitHub' },
    { html: icoLinkedin(), href: personal.linkedin,        label:'LinkedIn' },
    { html: icoMail(),     href:`mailto:${personal.email}`,label:'Email' },
  ].map(s =>
    `<a href="${s.href}" target="_blank" rel="noopener" class="footer-social" aria-label="${s.label}">${s.html}</a>`
  ).join('');
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

// ═══════════════════════════════════════════════════════════
// INTERACTIVE FEATURES
// ═══════════════════════════════════════════════════════════

// Theme toggle (default: light)
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved);
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
}

// Navbar shadow on scroll
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 1px 12px rgba(0,0,0,0.08)' : 'none';
  }, { passive: true });
}

// Mobile hamburger
function initMobileMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      btn.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}

// Typing animation
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const texts = personal.typingTexts;
  let i = 0, j = 0, deleting = false;
  function tick() {
    const cur = texts[i];
    el.textContent = deleting ? cur.substring(0, j--) : cur.substring(0, j++);
    if (!deleting && j === cur.length + 1) { setTimeout(() => { deleting = true; tick(); }, 1800); return; }
    if (deleting && j < 0)  { deleting = false; i = (i + 1) % texts.length; j = 0; setTimeout(tick, 400); return; }
    setTimeout(tick, deleting ? 50 : 100);
  }
  tick();
}

// Scroll reveal
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// Active nav link highlight
function initActiveNav() {
  const secs  = ['home','about','skills','projects','education','journey','contact'];
  const links = document.querySelectorAll('.nav-links a[data-section]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  secs.forEach(s => { const el = document.getElementById(s); if (el) obs.observe(el); });
}

// Skills filter
function initSkillsFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.skill-category').forEach(card => {
        card.classList.toggle('hidden', f !== 'all' && card.dataset.category !== f);
      });
    });
  });
}

// Contact form — validates then opens email client
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = ['name','email','subject','message'];
    let valid = true;

    fields.forEach(f => {
      const input = document.getElementById(`f-${f}`);
      const err   = document.getElementById(`err-${f}`);
      const val   = input.value.trim();
      let msg = '';
      if (!val)                                                      msg = 'This field is required.';
      else if (f === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) msg = 'Please enter a valid email.';
      else if (f === 'message' && val.length < 20)                  msg = 'Message must be at least 20 characters.';
      if (msg) { input.classList.add('error'); err.textContent = msg; err.classList.add('visible'); valid = false; }
      else     { input.classList.remove('error'); err.classList.remove('visible'); }
    });

    if (!valid) return;

    const name    = document.getElementById('f-name').value.trim();
    const email   = document.getElementById('f-email').value.trim();
    const subject = document.getElementById('f-subject').value.trim();
    const message = document.getElementById('f-message').value.trim();
    const body    = `Hi Soubhik,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;

    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const status = document.getElementById('formStatus');
    status.className = 'form-status success';
    status.textContent = '✅ Email client opened! Please send the message from there.';
    form.reset();
  });

  ['name','email','subject','message'].forEach(f => {
    document.getElementById(`f-${f}`)?.addEventListener('input', function() {
      this.classList.remove('error');
      document.getElementById(`err-${f}`)?.classList.remove('visible');
    });
  });
}

// Toggle project features
function toggleFeatures(btn) {
  const feat = btn.nextElementSibling;
  const open = feat.classList.toggle('open');
  btn.querySelector('.chev').style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
  btn.childNodes[btn.childNodes.length - 1].textContent = open ? ' Hide Features' : ' View Features';
}

// Back to top
function backToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ═══════════════════════════════════════════════════════════
// SVG ICONS
// ═══════════════════════════════════════════════════════════
function icoGithub() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>`;
}
function icoLinkedin() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`;
}
function icoMail() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>`;
}
function icoDownload() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>`;
}
function icoCode() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>`;
}
function icoExternal() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`;
}
function icoChevron() {
  return `<svg class="chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform 0.2s;">
    <polyline points="6 9 12 15 18 9"/>
  </svg>`;
}

// Utility
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
