(function () {
  "use strict";

  const copy = {
    en: {
      "meta.title": "Parthiban Nagarajan, Senior Frontend Developer, Angular and React",
      "meta.description": "Senior frontend developer with 6+ years on Angular in production. Voice AI at Zaion. Angular 13 to 19, Signals, React 18, Jest, Playwright.",
      skip: "Skip to content",

      "nav.about": "About",
      "nav.work": "Work",
      "nav.skills": "Skills",
      "nav.education": "Education",
      "nav.contact": "Contact",

      "hero.pill": "6+ years on Angular in production",
      "hero.h1.line1": "Frontend that",
      "hero.h1.line2": "ships in production",
      "hero.lede": 'I\'m Parthiban, senior frontend developer at <a href="https://zaion.ai" target="_blank" rel="noopener">Zaion</a> in Paris. I lead the frontend of a Voice AI SaaS, migrated the platform from Angular 13 to 19, and ship features in a mixed Angular and React codebase.',
      "hero.cta.primary": "Hire me",
      "hero.cta.secondary": "See my work",

      "card.role": "Senior Frontend Developer, Angular and React",
      "card.status": "Available for senior roles",
      "card.k1": "now",
      "card.k2": "stack",
      "card.k3": "based",
      "card.k4": "remote",

      "stats.years": "Years in production",
      "stats.migrations": "Angular major upgrades",
      "stats.companies": "Companies shipped at",
      "stats.languages": "Languages spoken",

      "about.eyebrow": "About",
      "about.title": "Pragmatic frontend, built to ship.",
      "about.p1": "Frontend developer with 6+ years on Angular in production. Currently at Zaion, working with backend, data, product, design and QA teams on a Voice AI platform (chatbot, callbot, real-time analytics dashboards).",
      "about.p2": "Moved the platform from Angular 13 to Angular 19 last year, covering six major versions. Gradually moving parts of the state layer to Signals where it actually helps. Also write React 18 features in a mixed Angular and React codebase. Day-to-day work covers Figma to production, Scrum, Jest, Playwright, GitLab CI/CD and Docker.",
      "about.techHeading": "Key technologies",

      "work.eyebrow": "Experience",
      "work.title": "Where I have shipped.",
      "work.lede": "Three roles, six years, all on real products with real users.",
      "exp.current": "Current",

      "exp.zaion.role": "Senior Frontend Developer",
      "exp.zaion.company": "Zaion",
      "exp.zaion.period": "Dec 2020 to Present",
      "exp.zaion.location": "Paris, France",
      "exp.zaion.context": "Voice AI SaaS for enterprise clients (chatbot, callbot, voice analytics).",
      "exp.zaion.b1": "Senior frontend on the Voice AI platform. Architecture, code reviews and frontend tooling, working with backend (NestJS) and product teams.",
      "exp.zaion.b2": "Moved the platform from Angular 13 to Angular 19, six majors in total. Cleaned up old NgModule patterns, moved to lazy-loaded standalone components where it made sense, and reworked the legacy Reactive Forms code.",
      "exp.zaion.b3": "Introduced Angular Signals alongside the existing RxJS, not a full rewrite. Aligned the approach with the team first. RxJS for streams, Signals for component state.",
      "exp.zaion.b4": "Built and maintain a shared component library used across the platform. Other teams contribute components back to it.",
      "exp.zaion.b5": "Real-time voice analytics dashboards with AMCharts 5. Built with the data team to define the live event contracts.",
      "exp.zaion.b6": "Write React 18 features (with Hooks) for newer modules in the mixed Angular and React codebase.",
      "exp.zaion.b7": "Set up Jest unit tests, Playwright E2E and SonarQube quality gates. Test strategy coordinated with QA.",
      "exp.zaion.b8": "Contribute to the GitLab CI/CD pipeline and Docker-based delivery.",
      "exp.zaion.b9": "Daily Scrum work with product, backend (NestJS, Node), data, design and QA. Translate Figma mockups into production features end-to-end.",

      "exp.ennov.role": "Frontend Developer",
      "exp.ennov.company": "Ennov Clinical",
      "exp.ennov.period": "Oct 2019 to Oct 2020",
      "exp.ennov.location": "Bordeaux, France",
      "exp.ennov.context": "Clinical trial monitoring application. Regulated software, documentation-heavy.",
      "exp.ennov.b1": "Migrated legacy Delphi modules to Angular 8 and Java 11. Translated existing logic and adapted it to compliance rules with the functional analysts.",
      "exp.ennov.b2": "Built Angular UI components following the team's existing design patterns.",
      "exp.ennov.b3": "Worked closely with QA and the regulatory team. Every feature shipped with tests and documentation.",
      "exp.ennov.b4": "Code reviews, sprint planning and sprint reviews with the engineering team.",

      "exp.pecheurs.role": "Web Developer",
      "exp.pecheurs.company": "Comptoir des Pêcheurs",
      "exp.pecheurs.period": "Mar 2018 to Aug 2018",
      "exp.pecheurs.location": "France",
      "exp.pecheurs.context": "Web application for a fishing community.",
      "exp.pecheurs.b1": "Designed and built the mobile-first responsive UI with the client.",
      "exp.pecheurs.b2": "Server-side content and user data with PHP and MySQL. Git and GitLab for version control.",

      "skills.eyebrow": "Skills",
      "skills.title": "How I work, and what I use.",
      "skills.lede": "Current stable versions across the stack. What I ship in production today.",
      "skills.s1.title": "Frontend",
      "skills.s1.text": "Angular 19 (Signals, standalone components, lazy loading), React 18, TypeScript, JavaScript ES6+, RxJS, Reactive Forms, HTML5, CSS3, SCSS, LESS, Bootstrap. Upgraded across six Angular majors; comfortable adopting new releases.",
      "skills.s2.title": "State management",
      "skills.s2.text": "Angular Signals, NgRx, RxJS 7+, Redux, Zustand, React Query (TanStack Query). Modern state patterns on current framework versions.",
      "skills.s3.title": "Data visualization",
      "skills.s3.text": "AMCharts 5, D3.js, Highcharts, Chart.js 4, custom SVG (paths, animations, interactive shapes). Live dashboards on current charting libraries.",
      "skills.s4.title": "Architecture",
      "skills.s4.text": "Modular design, lazy loading, smart and dumb component split, shared component libraries, design systems, micro-frontends, scalable frontend architecture.",
      "skills.s5.title": "Testing & quality",
      "skills.s5.text": "Jest, Playwright, Cypress, SonarQube on current toolchains. Unit and E2E testing, code reviews, quality gates, Lighthouse, Core Web Vitals.",
      "skills.s6.title": "Tools & delivery",
      "skills.s6.text": "Git, GitLab CI/CD, Docker, Jenkins, Jira, Confluence, Figma, Postman, Storybook. CI/CD and delivery on modern pipelines.",
      "skills.s7.title": "Collaboration",
      "skills.s7.text": "Scrum, cross-functional work with backend, data, product, design and QA. Figma to production. Technical alignment with team members.",
      "skills.s8.title": "Backend exposure",
      "skills.s8.text": "Node.js LTS, NestJS, MongoDB, REST APIs, WebSocket, Java, Spring Boot, Hibernate, JPA, SQL. Recent framework versions in production contexts.",

      "education.eyebrow": "Education",
      "education.title": "Background & languages.",
      "edu.1.period": "2020",
      "edu.1.title": "Full Stack Java Developer Certification",
      "edu.1.school": "M2i Formation, Bordeaux",
      "edu.2.period": "2016 — 2018",
      "edu.2.title": "Master of Science, Electronics and Telecommunications",
      "edu.2.school": "ISEP, Paris",
      "edu.3.period": "2012 — 2015",
      "edu.3.title": "Bachelor of Engineering, Electrical and Electronics Engineering",
      "edu.3.school": "SSM College of Engineering, India",

      "languages.title": "Languages",
      "lang.fr": "French",
      "lang.fr.level": "full professional",
      "lang.en": "English",
      "lang.en.level": "full professional",
      "lang.ta": "Tamil",
      "lang.ta.level": "native",

      "contact.eyebrow": "Get in touch",
      "contact.title": "Let's build something together.",
      "contact.lead": "Open to senior frontend roles. Remote-EU or Paris. Send a note and I will get back within two business days."
    },
    fr: {
      "meta.title": "Parthiban Nagarajan, Développeur Frontend Senior, Angular et React",
      "meta.description": "Développeur frontend senior, 6+ ans Angular en production. Voice AI chez Zaion. Angular 13 à 19, Signals, React 18, Jest, Playwright.",
      skip: "Aller au contenu",

      "nav.about": "À propos",
      "nav.work": "Expérience",
      "nav.skills": "Compétences",
      "nav.education": "Formation",
      "nav.contact": "Contact",

      "hero.pill": "6+ ans Angular en production",
      "hero.h1.line1": "Frontend qui",
      "hero.h1.line2": "livre en production",
      "hero.lede": "Je suis Parthiban, développeur frontend senior chez <a href=\"https://zaion.ai\" target=\"_blank\" rel=\"noopener\">Zaion</a> à Paris. Je porte le frontend d'un SaaS Voice AI, j'ai migré la plateforme d'Angular 13 à 19, et je livre dans un codebase mixte Angular et React.",
      "hero.cta.primary": "Me recruter",
      "hero.cta.secondary": "Voir mon travail",

      "card.role": "Développeur Frontend Senior, Angular et React",
      "card.status": "Disponible pour postes senior",
      "card.k1": "actuel",
      "card.k2": "stack",
      "card.k3": "basé",
      "card.k4": "remote",

      "stats.years": "Ans en production",
      "stats.migrations": "Versions Angular migrées",
      "stats.companies": "Entreprises",
      "stats.languages": "Langues parlées",

      "about.eyebrow": "À propos",
      "about.title": "Frontend pragmatique, fait pour livrer.",
      "about.p1": "Développeur frontend avec plus de 6 ans sur Angular en production. Actuellement chez Zaion, en collaboration avec les équipes backend, data, produit, design et QA sur une plateforme Voice AI (chatbot, callbot, dashboards d'analyse temps réel).",
      "about.p2": "J'ai fait passer la plateforme d'Angular 13 à Angular 19 l'année dernière, soit six versions majeures. Je migre progressivement certaines parties de l'état vers Signals quand c'est pertinent. Je développe aussi des fonctionnalités React 18 dans un codebase mixte Angular et React. Au quotidien : Figma jusqu'à la prod, Scrum, Jest, Playwright, GitLab CI/CD et Docker.",
      "about.techHeading": "Technologies clés",

      "work.eyebrow": "Expérience",
      "work.title": "Là où j'ai livré.",
      "work.lede": "Trois postes, six ans, tous sur des produits réels avec de vrais utilisateurs.",
      "exp.current": "En cours",

      "exp.zaion.role": "Développeur Frontend Senior",
      "exp.zaion.company": "Zaion",
      "exp.zaion.period": "Déc 2020 à aujourd'hui",
      "exp.zaion.location": "Paris, France",
      "exp.zaion.context": "Plateforme SaaS Voice AI pour clients entreprise (chatbot, callbot, analytics vocaux).",
      "exp.zaion.b1": "Développeur frontend senior sur la plateforme Voice AI. Architecture, code reviews et tooling frontend, en collaboration avec les équipes backend (NestJS) et produit.",
      "exp.zaion.b2": "Migration de la plateforme d'Angular 13 à Angular 19, soit six versions majeures. Nettoyage des anciens patterns NgModule, passage à des standalone components avec lazy loading là où c'était pertinent, et reprise du code legacy de Reactive Forms.",
      "exp.zaion.b3": "Introduction d'Angular Signals à côté du code RxJS existant, pas de réécriture complète. Approche validée avec l'équipe avant déploiement. RxJS pour les flux, Signals pour l'état des composants.",
      "exp.zaion.b4": "Construction et maintenance d'une bibliothèque de composants partagée utilisée sur la plateforme. D'autres équipes y contribuent désormais.",
      "exp.zaion.b5": "Dashboards d'analyse vocale temps réel avec AMCharts 5. Conçus avec l'équipe data pour définir les contrats d'événements live.",
      "exp.zaion.b6": "Développement de fonctionnalités React 18 (avec Hooks) pour les modules récents, dans un codebase mixte Angular et React.",
      "exp.zaion.b7": "Mise en place de tests unitaires Jest, de tests E2E Playwright et de quality gates SonarQube. Stratégie de test coordonnée avec la QA.",
      "exp.zaion.b8": "Contributions au pipeline GitLab CI/CD et à la livraison Docker.",
      "exp.zaion.b9": "Travail quotidien en Scrum avec les équipes produit, backend (NestJS, Node), data, design et QA. Traduction des maquettes Figma en fonctionnalités prod de bout en bout.",

      "exp.ennov.role": "Développeur Frontend",
      "exp.ennov.company": "Ennov Clinical",
      "exp.ennov.period": "Oct 2019 à Oct 2020",
      "exp.ennov.location": "Bordeaux, France",
      "exp.ennov.context": "Application de suivi d'essais cliniques. Logiciel réglementé, documentation intensive.",
      "exp.ennov.b1": "Migration des modules legacy Delphi vers Angular 8 et Java 11. Reprise de la logique existante, adaptation aux règles de conformité avec les analystes fonctionnels.",
      "exp.ennov.b2": "Développement de composants UI Angular en suivant les design patterns internes de l'équipe.",
      "exp.ennov.b3": "Travail étroit avec la QA et l'équipe réglementaire. Chaque fonctionnalité livrée avec tests et documentation.",
      "exp.ennov.b4": "Code reviews, sprint planning et revues de sprint avec l'équipe d'ingénierie.",

      "exp.pecheurs.role": "Développeur Web",
      "exp.pecheurs.company": "Comptoir des Pêcheurs",
      "exp.pecheurs.period": "Mars 2018 à Août 2018",
      "exp.pecheurs.location": "France",
      "exp.pecheurs.context": "Application web pour une communauté de pêche.",
      "exp.pecheurs.b1": "Conception et développement de l'UI responsive mobile-first avec le client.",
      "exp.pecheurs.b2": "Gestion des contenus et données utilisateurs côté serveur avec PHP et MySQL. Git et GitLab pour le versioning.",

      "skills.eyebrow": "Compétences",
      "skills.title": "Comment je travaille, et ce que j'utilise.",
      "skills.lede": "Versions stables récentes sur toute la stack. Ce que j'utilise et livre en production aujourd'hui.",
      "skills.s1.title": "Frontend",
      "skills.s1.text": "Angular 19 (Signals, standalone components, lazy loading), React 18, TypeScript, JavaScript ES6+, RxJS, Reactive Forms, HTML5, CSS3, SCSS, LESS, Bootstrap. Six montées de version Angular ; à l'aise pour adopter les nouvelles releases.",
      "skills.s2.title": "State management",
      "skills.s2.text": "Angular Signals, NgRx, RxJS 7+, Redux, Zustand, React Query (TanStack Query). Patterns d'état modernes sur les versions actuelles des frameworks.",
      "skills.s3.title": "Data visualization",
      "skills.s3.text": "AMCharts 5, D3.js, Highcharts, Chart.js 4, SVG personnalisé (paths, animations, formes interactives). Dashboards live sur les bibliothèques de charting actuelles.",
      "skills.s4.title": "Architecture",
      "skills.s4.text": "Architecture modulaire, lazy loading, séparation smart et dumb, bibliothèques de composants partagées, design systems, micro-frontends, architecture frontend scalable.",
      "skills.s5.title": "Tests et qualité",
      "skills.s5.text": "Jest, Playwright, Cypress, SonarQube sur les toolchains actuelles. Tests unitaires et E2E, code reviews, quality gates, Lighthouse, Core Web Vitals.",
      "skills.s6.title": "Outils et livraison",
      "skills.s6.text": "Git, GitLab CI/CD, Docker, Jenkins, Jira, Confluence, Figma, Postman, Storybook. CI/CD et livraison sur des pipelines modernes.",
      "skills.s7.title": "Collaboration",
      "skills.s7.text": "Scrum, travail transverse avec backend, data, produit, design et QA. De Figma à la production. Alignement technique avec les équipes.",
      "skills.s8.title": "Exposition backend",
      "skills.s8.text": "Node.js LTS, NestJS, MongoDB, API REST, WebSocket, Java, Spring Boot, Hibernate, JPA, SQL. Versions récentes des frameworks en contexte production.",

      "education.eyebrow": "Formation",
      "education.title": "Parcours & langues.",
      "edu.1.period": "2020",
      "edu.1.title": "Certification Développeur Java Full Stack",
      "edu.1.school": "M2i Formation, Bordeaux",
      "edu.2.period": "2016 — 2018",
      "edu.2.title": "Master of Science, Électronique et Télécommunications",
      "edu.2.school": "ISEP, Paris",
      "edu.3.period": "2012 — 2015",
      "edu.3.title": "Bachelor of Engineering, Génie Électrique et Électronique",
      "edu.3.school": "SSM College of Engineering, Inde",

      "languages.title": "Langues",
      "lang.fr": "Français",
      "lang.fr.level": "professionnel complet",
      "lang.en": "Anglais",
      "lang.en.level": "professionnel complet",
      "lang.ta": "Tamoul",
      "lang.ta.level": "langue maternelle",

      "contact.eyebrow": "Me contacter",
      "contact.title": "Construisons quelque chose ensemble.",
      "contact.lead": "Ouvert aux postes frontend senior. Remote-UE ou Paris. Écrivez-moi, je réponds sous deux jours ouvrés."
    }
  };

  const root = document.documentElement;
  let currentLang = "en";

  function applyLang(lang) {
    currentLang = lang === "fr" ? "fr" : "en";
    root.lang = currentLang;
    root.dataset.lang = currentLang;
    const dict = copy[currentLang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (val == null) return;
      if (val.includes("<")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.title = dict["meta.title"];
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict["meta.description"]);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict["meta.title"]);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", dict["meta.description"]);

    document.querySelectorAll("[data-role='lang-toggle']").forEach((b) => {
      b.setAttribute("aria-label", currentLang === "en" ? "Passer en français" : "Switch to English");
      b.setAttribute("aria-pressed", currentLang === "fr" ? "true" : "false");
    });
  }

  let currentTheme = "dark";

  function applyTheme(theme) {
    currentTheme = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", currentTheme);
    document.querySelectorAll("[data-role='theme-toggle']").forEach((b) => {
      b.setAttribute("aria-pressed", currentTheme === "dark" ? "true" : "false");
      b.setAttribute("aria-label", currentTheme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    });
  }

  ["lang-toggle", "lang-toggle-m"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.dataset.role = "lang-toggle";
    el.addEventListener("click", () => applyLang(currentLang === "en" ? "fr" : "en"));
  });

  ["theme-toggle", "theme-toggle-m"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.dataset.role = "theme-toggle";
    el.addEventListener("click", () => applyTheme(currentTheme === "dark" ? "light" : "dark"));
  });

  const menuBtn = document.getElementById("menu-toggle");
  const sheet = document.getElementById("mobile-sheet");

  function setSheet(open) {
    if (!menuBtn || !sheet) return;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    sheet.dataset.open = open ? "true" : "false";
    sheet.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("menu-open", open);
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      setSheet(menuBtn.getAttribute("aria-expanded") !== "true");
    });
  }

  document.querySelectorAll(".sheet__link").forEach((a) => {
    a.addEventListener("click", () => setSheet(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setSheet(false);
  });

  globalThis.addEventListener("resize", () => {
    if (globalThis.matchMedia("(min-width: 768px)").matches) setSheet(false);
  });

  const header = document.getElementById("header");
  function onScroll() {
    if (!header) return;
    header.dataset.stuck = globalThis.scrollY > 8 ? "true" : "false";
  }
  globalThis.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav__link, .sheet__link");
  if ("IntersectionObserver" in globalThis) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((l) => {
          if (l.getAttribute("href") === "#" + id) {
            l.setAttribute("aria-current", "true");
          } else {
            l.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach((s) => io.observe(s));
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  applyTheme("dark");
  applyLang("en");

  // ── Scroll reveal ────────────────────────────────
  const reduced = globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealEls = document.querySelectorAll(".reveal");

  if (reduced || !("IntersectionObserver" in globalThis)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const ro = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    revealEls.forEach((el) => ro.observe(el));
  }

  // ── Stat count-up ────────────────────────────────
  const counters = document.querySelectorAll("[data-count]");

  function runCount(el) {
    const target = Number(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1100;
    const start = performance.now();

    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  if (reduced || !("IntersectionObserver" in globalThis)) {
    counters.forEach((el) => {
      el.textContent = (Number(el.dataset.count) || 0) + (el.dataset.suffix || "");
    });
  } else {
    const co = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    counters.forEach((el) => co.observe(el));
  }
})();
