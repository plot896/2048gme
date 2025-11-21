document.addEventListener('DOMContentLoaded', () => {
  const templateList = document.getElementById('templateList');
  const personaChips = document.getElementById('personaChips');
  const promptForm = document.getElementById('promptForm');
  const promptInput = document.getElementById('promptInput');
  const audienceSelect = document.getElementById('audienceSelect');
  const toneSelect = document.getElementById('toneSelect');
  const aiFeed = document.getElementById('aiFeed');
  const emailCanvas = document.getElementById('emailCanvas');
  const heroBlock = document.getElementById('heroBlock');
  const heroImage = document.getElementById('heroImage');
  const eyebrowText = document.getElementById('eyebrowText');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const primaryCta = document.getElementById('primaryCta');
  const secondaryCta = document.getElementById('secondaryCta');
  const contentHeading = document.getElementById('contentHeading');
  const pillList = document.getElementById('pillList');
  const resources = document.getElementById('resources');
  const previewTitle = document.getElementById('previewTitle');

  const editPanel = document.getElementById('editorPanel');
  const editTab = document.getElementById('editTab');
  const chatTab = document.getElementById('chatTab');

  const headingFont = document.getElementById('headingFont');
  const bodyFont = document.getElementById('bodyFont');
  const accentColor = document.getElementById('accentColor');
  const backgroundColor = document.getElementById('backgroundColor');
  const ctaColor = document.getElementById('ctaColor');
  const eyebrowInput = document.getElementById('eyebrowInput');
  const headlineInput = document.getElementById('headlineInput');
  const subheadlineInput = document.getElementById('subheadlineInput');
  const primaryCtaInput = document.getElementById('primaryCtaInput');
  const heroImageInput = document.getElementById('heroImageInput');
  const resourcesHeadingInput = document.getElementById('resourcesHeadingInput');
  const pillInput = document.getElementById('pillInput');
  const resourceInput = document.getElementById('resourceInput');

  const personas = ['Newsletter', 'Promotions', 'Educational', 'Events'];

  const templates = [
    {
      id: 'welcome',
      name: 'Welcome newsletter',
      description: 'Set the tone for new subscribers with a warm introduction and popular resources.',
      colors: { accent: '#f36f4c', background: '#fdf7f2', cta: '#f36f4c' },
      heroImage: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
      eyebrow: 'WELCOME TO THE COMMUNITY',
      headline: "You're officially part of something amazing!",
      subtitle: 'Thank you for joining us. We built this starter email to help you share news, offers, and helpful resources.',
      primaryCta: 'Get Started Now',
      secondaryCta: 'View account',
      contentHeading: 'What to expect',
      pills: ['Exclusive content', 'Product tips', 'Early access offers'],
      resources: [
        { title: "Beginner's Guide", tag: 'Read more', href: '#' },
        { title: 'Top Tools & Resources', tag: 'Explore', href: '#' }
      ],
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" }
    },
    {
      id: 'promotion',
      name: 'Promotions and sales',
      description: 'Highlight a limited offer with bold CTAs and a concise feature list.',
      colors: { accent: '#7dd3fc', background: '#f2fbff', cta: '#0ea5e9' },
      heroImage: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
      eyebrow: 'JUST DROPPED',
      headline: 'Launch week savings — 25% off',
      subtitle: 'Reward loyal customers with a time-bound offer and a reminder of the value they already get.',
      primaryCta: 'Redeem the offer',
      secondaryCta: 'See plans',
      contentHeading: 'Offer snapshot',
      pills: ['Expires in 4 days', 'Members only', 'No coupon needed'],
      resources: [
        { title: 'Upgrade checklist', tag: 'Read more', href: '#' },
        { title: 'Bundle savings', tag: 'Save now', href: '#' }
      ],
      fonts: { heading: "'Inter', sans-serif", body: "'Inter', sans-serif" }
    },
    {
      id: 'education',
      name: 'Educational content',
      description: 'Teach your audience with a structured lesson, tips, and follow-up links.',
      colors: { accent: '#a78bfa', background: '#f7f4ff', cta: '#8b5cf6' },
      heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      eyebrow: 'LEARNING PATH',
      headline: 'Monthly growth playbook',
      subtitle: 'Share expert advice, frameworks, and curated resources to keep readers moving forward.',
      primaryCta: 'Read the guide',
      secondaryCta: 'Save for later',
      contentHeading: 'Inside this issue',
      pills: ['Step-by-step', 'Templates included', '5 min read'],
      resources: [
        { title: 'Worksheet download', tag: 'PDF', href: '#' },
        { title: 'Video walkthrough', tag: 'Watch', href: '#' }
      ],
      fonts: { heading: "'DM Sans', sans-serif", body: "'DM Sans', sans-serif" }
    }
  ];

  const state = {
    template: templates[0],
    hero: {},
    resources: [],
    pills: [],
    fonts: {},
    colors: {},
  };

  function renderPersonaChips() {
    personaChips.innerHTML = '';
    personas.forEach(label => {
      const chip = document.createElement('div');
      chip.className = 'chip';
      chip.textContent = label;
      personaChips.appendChild(chip);
    });
  }

  function renderTemplateCards() {
    templateList.innerHTML = '';
    templates.forEach(template => {
      const card = document.createElement('article');
      card.className = `template-card ${state.template.id === template.id ? 'active' : ''}`;
      card.innerHTML = `
        <div class="eyebrow">${template.id}</div>
        <strong>${template.name}</strong>
        <p class="muted">${template.description}</p>
      `;
      card.addEventListener('click', () => applyTemplate(template));
      templateList.appendChild(card);
    });
  }

  function applyTemplate(template) {
    state.template = template;
    state.colors = { ...template.colors };
    state.fonts = { ...template.fonts };
    state.hero = {
      eyebrow: template.eyebrow,
      headline: template.headline,
      subtitle: template.subtitle,
      primaryCta: template.primaryCta,
      secondaryCta: template.secondaryCta,
      image: template.heroImage,
    };
    state.pills = [...template.pills];
    state.resources = [...template.resources];

    eyebrowInput.value = template.eyebrow;
    headlineInput.value = template.headline;
    subheadlineInput.value = template.subtitle;
    primaryCtaInput.value = template.primaryCta;
    heroImageInput.value = template.heroImage;
    resourcesHeadingInput.value = template.contentHeading;
    pillInput.value = template.pills.join(', ');
    resourceInput.value = template.resources
      .map(r => `${r.title} | ${r.href} | ${r.tag}`)
      .join('\n');
    headingFont.value = template.fonts.heading;
    bodyFont.value = template.fonts.body;
    accentColor.value = template.colors.accent;
    backgroundColor.value = template.colors.background;
    ctaColor.value = template.colors.cta;
    previewTitle.textContent = template.name;

    renderTemplateCards();
    renderPreview();
  }

  function renderPills() {
    pillList.innerHTML = '';
    state.pills.forEach(text => {
      const pill = document.createElement('span');
      pill.className = 'pill';
      pill.textContent = text;
      pill.style.backgroundColor = lighten(state.colors.accent, 0.8);
      pill.style.color = darken(state.colors.accent, 0.1);
      pill.style.borderColor = lighten(state.colors.accent, 0.7);
      pillList.appendChild(pill);
    });
  }

  function renderResources() {
    resources.innerHTML = '';
    state.resources.forEach(resource => {
      const card = document.createElement('div');
      card.className = 'resource-card';
      card.innerHTML = `
        <span class="tag">${resource.tag}</span>
        <a href="${resource.href}" target="_blank">${resource.title}</a>
        <p class="muted">${state.template.name} bundle</p>
      `;
      resources.appendChild(card);
    });
  }

  function renderPreview() {
    emailCanvas.style.fontFamily = state.fonts.body;
    emailCanvas.querySelectorAll('h1, h2').forEach(el => (el.style.fontFamily = state.fonts.heading));
    heroBlock.style.backgroundColor = state.colors.background;
    eyebrowText.textContent = state.hero.eyebrow;
    heroTitle.textContent = state.hero.headline;
    heroSubtitle.textContent = state.hero.subtitle;
    primaryCta.textContent = state.hero.primaryCta;
    primaryCta.style.backgroundColor = state.colors.cta;
    secondaryCta.textContent = state.hero.secondaryCta;
    heroImage.src = state.hero.image;
    contentHeading.textContent = resourcesHeadingInput.value;
    renderPills();
    renderResources();
  }

  function lighten(color, amount) {
    const { r, g, b } = hexToRgb(color);
    return rgbToHex(
      Math.min(255, Math.round(r + (255 - r) * amount)),
      Math.min(255, Math.round(g + (255 - g) * amount)),
      Math.min(255, Math.round(b + (255 - b) * amount))
    );
  }

  function darken(color, amount) {
    const { r, g, b } = hexToRgb(color);
    return rgbToHex(
      Math.max(0, Math.round(r * (1 - amount))),
      Math.max(0, Math.round(g * (1 - amount))),
      Math.max(0, Math.round(b * (1 - amount)))
    );
  }

  function hexToRgb(hex) {
    const sanitized = hex.replace('#', '');
    const bigint = parseInt(sanitized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  function pushMessage(content, role = 'system') {
    const div = document.createElement('div');
    div.className = `ai-message ${role}`;
    div.innerHTML = content;
    aiFeed.appendChild(div);
    aiFeed.scrollTop = aiFeed.scrollHeight;
  }

  function showLoader() {
    const loader = document.createElement('div');
    loader.className = 'ai-message system';
    loader.id = 'aiLoader';
    loader.innerHTML = `<span class="ai-loading"><span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span></span> Crafting template...`;
    aiFeed.appendChild(loader);
  }

  function hideLoader() {
    const loader = document.getElementById('aiLoader');
    if (loader) loader.remove();
  }

  function parseResources(raw) {
    return raw
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean)
      .map(line => {
        const [title = '', href = '#', tag = 'Read more'] = line.split('|').map(item => item.trim());
        return { title, href, tag };
      });
  }

  promptForm.addEventListener('submit', event => {
    event.preventDefault();
    const prompt = promptInput.value.trim();
    if (!prompt) return;

    pushMessage(`<strong>You:</strong> ${prompt}`, 'user');
    showLoader();

    setTimeout(() => {
      hideLoader();
      const generated = {
        eyebrow: `${audienceSelect.value} · ${toneSelect.value} tone`,
        headline: `Inbox-ready: ${prompt.slice(0, 56)}...`,
        subtitle: 'Reach drafted this outline. Feel free to edit copy and colors before sending.',
        primaryCta: 'Use this draft',
        secondaryCta: 'Regenerate',
      };

      state.hero = { ...state.hero, ...generated };
      state.pills = prompt.split(' ').slice(0, 3).map(word => word.replace(/[.,]/g, '')).filter(Boolean);
      if (state.pills.length === 0) state.pills = state.template.pills;
      state.resources = parseResources(resourceInput.value);

      eyebrowInput.value = state.hero.eyebrow;
      headlineInput.value = state.hero.headline;
      subheadlineInput.value = state.hero.subtitle;
      primaryCtaInput.value = state.hero.primaryCta;

      renderPreview();
      pushMessage(`<strong>Reach:</strong> Generated a ${state.template.name.toLowerCase()} using your prompt.`, 'assistant');
    }, 900);
  });

  function syncEditor() {
    state.fonts.heading = headingFont.value;
    state.fonts.body = bodyFont.value;
    state.colors.accent = accentColor.value;
    state.colors.background = backgroundColor.value;
    state.colors.cta = ctaColor.value;
    state.hero.eyebrow = eyebrowInput.value;
    state.hero.headline = headlineInput.value;
    state.hero.subtitle = subheadlineInput.value;
    state.hero.primaryCta = primaryCtaInput.value;
    state.hero.image = heroImageInput.value;
    state.hero.secondaryCta = state.hero.secondaryCta || 'View details';
    state.pills = pillInput.value.split(',').map(v => v.trim()).filter(Boolean);
    state.resources = parseResources(resourceInput.value);
    renderPreview();
  }

  [headingFont, bodyFont, accentColor, backgroundColor, ctaColor, eyebrowInput, headlineInput, subheadlineInput, primaryCtaInput, heroImageInput, resourcesHeadingInput, pillInput, resourceInput].forEach(input => {
    input.addEventListener('input', syncEditor);
  });

  editTab.addEventListener('click', () => {
    editTab.classList.add('active');
    chatTab.classList.remove('active');
    editPanel.hidden = false;
  });

  chatTab.addEventListener('click', () => {
    chatTab.classList.add('active');
    editTab.classList.remove('active');
    editPanel.hidden = true;
  });

  document.getElementById('newChat').addEventListener('click', () => {
    promptInput.value = '';
    aiFeed.innerHTML = '';
    applyTemplate(templates[0]);
  });

  renderPersonaChips();
  applyTemplate(templates[0]);
  pushMessage('Ready to craft your newsletter. Pick a template or describe what you need.', 'system');
});
