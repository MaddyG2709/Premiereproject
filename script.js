const offers = [
  {
    id: 'mtm-ai-2026',
    type: 'event',
    title: 'MTM Special: AI & Media 2026',
    source: 'Medientage',
    summary: 'Konferenz zu KI-Trends für Medienproduktion mit Panels, Workshops und Networking.',
    topics: ['ki', 'konferenz', 'produktion'],
    personas: ['professional', 'creator'],
    format: 'hybrid',
    location: { city: 'München', country: 'DE' },
    start_date: '2026-02-12',
    end_date: '2026-02-12',
    cost_type: 'paid',
    price_hint: 'ab 90€',
    url: 'https://medientage.de/mtm-special-ai-media-2026/',
    language: 'de',
  },
  {
    id: 'mlab-xr-bootcamp',
    type: 'event',
    title: 'XR Bootcamp Media Lab',
    source: 'Media Lab Bayern',
    summary: 'Intensives Bootcamp zu XR-Storytelling und Prototyping mit Mentoring.',
    topics: ['xr', 'innovation', 'storytelling'],
    personas: ['student', 'creator'],
    format: 'in-person',
    location: { city: 'München', country: 'DE' },
    start_date: '2025-11-05',
    end_date: '2025-11-07',
    cost_type: 'free',
    url: 'https://www.media-lab.de/de/angebote/',
    language: 'de',
  },
  {
    id: 'games-bavaria-grant',
    type: 'funding',
    title: 'Games/Bavaria Förderung',
    source: 'Games/Bavaria',
    summary: 'Förderung für Games-Studios in Bayern mit Pitch-Betreuung.',
    topics: ['games', 'startup'],
    personas: ['founder'],
    format: 'online',
    location: { city: 'Remote', country: 'DE' },
    start_date: '2025-08-01',
    end_date: '2025-12-31',
    deadline: '2025-07-15',
    cost_type: 'free',
    url: 'https://www.games-bavaria.com/foerderung-games-bavaria-angebot/',
    language: 'de',
  },
  {
    id: 'ki-kompetenz-report',
    type: 'publication',
    title: 'KI-Kompetenzreport Medien',
    source: 'KI-Kompetenzzentrum Medien',
    summary: 'Analyse aktueller KI-Trends für Redaktion, Produktion und Distribution.',
    topics: ['ki', 'journalismus'],
    personas: ['professional', 'student'],
    format: 'pdf',
    location: { city: 'Online', country: 'DE' },
    start_date: '2025-03-15',
    end_date: '2025-03-15',
    cost_type: 'free',
    url: 'https://medien-bayern.de/ki-kompetenzzentrum-medien/',
    language: 'de',
  },
  {
    id: 'xrhub-meetup',
    type: 'event',
    title: 'XR HUB Bavaria Meetup',
    source: 'XR HUB Bavaria',
    summary: 'Monatliches Meetup mit Demos, Talks und Networking zu XR-Anwendungen.',
    topics: ['xr', 'netzwerk', 'innovation'],
    personas: ['creator', 'professional'],
    format: 'in-person',
    location: { city: 'Nürnberg', country: 'DE' },
    start_date: '2025-06-20',
    end_date: '2025-06-20',
    cost_type: 'free',
    url: 'https://xrhub-bavaria.de/events/',
    language: 'de',
  },
  {
    id: 'podcast-lab',
    type: 'event',
    title: 'Audio Lab: Podcast Produktion',
    source: 'Media Lab Bayern',
    summary: 'Workshop-Serie zu Storytelling, Aufnahmetechnik und Vermarktung von Podcasts.',
    topics: ['audio', 'podcast', 'storytelling'],
    personas: ['creator', 'student'],
    format: 'hybrid',
    location: { city: 'Augsburg', country: 'DE' },
    start_date: '2025-07-02',
    end_date: '2025-07-04',
    cost_type: 'paid',
    price_hint: '120€',
    url: 'https://mediennetzwerk-bayern.de/events/',
    language: 'de',
  },
  {
    id: 'startup-founders-day',
    type: 'event',
    title: 'Founders Day Media',
    source: 'Mediennetzwerk Bayern',
    summary: 'Pitch-Event für Medien-Startups mit Investorensprechstunden.',
    topics: ['startup', 'pitch', 'investment'],
    personas: ['founder'],
    format: 'in-person',
    location: { city: 'München', country: 'DE' },
    start_date: '2025-09-18',
    end_date: '2025-09-18',
    cost_type: 'paid',
    price_hint: '49€',
    url: 'https://mediennetzwerk-bayern.de/events/',
    language: 'de',
  },
  {
    id: 'ai-media-toolkit',
    type: 'publication',
    title: 'AI Media Toolkit',
    source: 'XPLR Media',
    summary: 'Tool-Sammlung für KI-gestützte Workflows in Redaktion, Audio und Video.',
    topics: ['ki', 'produktion', 'workflow'],
    personas: ['professional', 'creator'],
    format: 'guide',
    location: { city: 'Online', country: 'DE' },
    start_date: '2025-05-10',
    end_date: '2025-05-10',
    cost_type: 'free',
    url: 'https://www.xplr-media.com/medienevent-digitalevent-kalender-fuer-bayern/',
    language: 'de',
  },
  {
    id: 'journalism-masterclass',
    type: 'event',
    title: 'Journalism Masterclass',
    source: 'Media Lab Bayern',
    summary: 'Deep Dive zu investigativen Recherche-Tools und Story-Arcs.',
    topics: ['journalismus', 'ki'],
    personas: ['professional'],
    format: 'online',
    location: { city: 'Remote', country: 'DE' },
    start_date: '2025-06-05',
    end_date: '2025-06-05',
    cost_type: 'free',
    url: 'https://www.media-lab.de/de/angebote/',
    language: 'de',
  },
  {
    id: 'sim-coaching',
    type: 'funding',
    title: 'Start into Media Coaching',
    source: 'Start into Media',
    summary: 'Mentoring und Coaching für Medien-Einsteiger:innen mit Fokus auf Karrierepfade.',
    topics: ['karriere', 'mentoring'],
    personas: ['student', 'switcher'],
    format: 'online',
    location: { city: 'Remote', country: 'DE' },
    start_date: '2025-04-01',
    end_date: '2025-10-01',
    deadline: '2025-03-20',
    cost_type: 'free',
    url: 'https://www.startintomedia.de/f%C3%Bcr-dich/events-fuer-dich',
    language: 'de',
  },
];

const personas = [
  { id: 'student', label: 'Studierende*r', emphasis: ['orientierung', 'basics'] },
  { id: 'switcher', label: 'Quereinsteiger*in', emphasis: ['bootcamp', 'mentoring'] },
  { id: 'founder', label: 'Startup-Gründer*in', emphasis: ['startup', 'pitch', 'förderung'] },
  { id: 'professional', label: 'Professional', emphasis: ['deep-dive', 'publikation'] },
  { id: 'creator', label: 'Creator / Freelancer', emphasis: ['netzwerk', 'tools', 'finanzierung'] },
];

const typeLabels = {
  event: 'Event',
  funding: 'Förderung',
  publication: 'Publikation',
};

const formatLabels = {
  'in-person': 'Präsenz',
  online: 'Online',
  hybrid: 'Hybrid',
  pdf: 'PDF',
  guide: 'Guide',
};

const filters = {
  types: new Set(),
  personas: new Set(),
  time: 'any',
  formats: new Set(),
  costs: new Set(),
  query: '',
};

const typeOptions = [
  { id: 'event', label: 'Events' },
  { id: 'funding', label: 'Förderung' },
  { id: 'publication', label: 'Publikationen' },
];

const timeOptions = [
  { id: 'any', label: 'Alle' },
  { id: '7', label: 'Nächste 7 Tage' },
  { id: '30', label: 'Nächste 30 Tage' },
  { id: '90', label: 'Nächste 90 Tage' },
];

const formatOptions = [
  { id: 'online', label: 'Online' },
  { id: 'in-person', label: 'Präsenz' },
  { id: 'hybrid', label: 'Hybrid' },
];

const costOptions = [
  { id: 'free', label: 'Kostenfrei' },
  { id: 'paid', label: 'Kostenpflichtig' },
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsEl = document.getElementById('results');
const resultCountEl = document.getElementById('resultCount');
const activeFiltersEl = document.getElementById('activeFilters');
const cardTemplate = document.getElementById('cardTemplate');
const offerCountEl = document.getElementById('offerCount');
const personaCountEl = document.getElementById('personaCount');
const quickLinks = document.querySelectorAll('[data-quick]');

const detailDrawer = document.getElementById('detailDrawer');
const drawerBody = document.getElementById('drawerBody');
const drawerClose = detailDrawer.querySelector('.drawer__close');

function renderChips(containerId, items, setRef) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach(({ id, label }) => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.dataset.id = id;
    btn.textContent = label;
    btn.addEventListener('click', () => toggleChip(setRef, id, btn));
    container.appendChild(btn);
  });
}

function toggleChip(setRef, id, el) {
  if (setRef.has(id)) {
    setRef.delete(id);
  } else {
    setRef.add(id);
  }
  el.classList.toggle('is-active');
  render();
}

function renderSingleChoice(containerId, items, currentValue, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach(({ id, label }) => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.dataset.id = id;
    btn.textContent = label;
    if (currentValue === id) btn.classList.add('is-active');
    btn.addEventListener('click', () => {
      const newValue = currentValue === id ? 'any' : id;
      onSelect(newValue);
    });
    container.appendChild(btn);
  });
}

function daysUntil(dateStr) {
  if (!dateStr) return Infinity;
  const target = new Date(dateStr);
  const diff = target.getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function matchesTimeFilter(offer) {
  if (filters.time === 'any') return true;
  const days = daysUntil(offer.start_date);
  return days >= 0 && days <= Number(filters.time);
}

function matchesSelection(setRef, value) {
  return setRef.size === 0 || setRef.has(value);
}

function matchesPersona(offer) {
  if (filters.personas.size === 0) return true;
  return offer.personas.some((p) => filters.personas.has(p));
}

function matchesFormat(offer) {
  return filters.formats.size === 0 || filters.formats.has(offer.format);
}

function matchesCost(offer) {
  return filters.costs.size === 0 || filters.costs.has(offer.cost_type);
}

function matchesQuery(offer) {
  if (!filters.query.trim()) return true;
  const haystack = `${offer.title} ${offer.summary} ${offer.topics.join(' ')}`.toLowerCase();
  return filters.query.toLowerCase().split(/\s+/).every((term) => haystack.includes(term));
}

function scoreOffer(offer) {
  let score = 0;
  if (filters.query) {
    const queryTerms = filters.query.toLowerCase().split(/\s+/);
    queryTerms.forEach((term) => {
      if (offer.title.toLowerCase().includes(term)) score += 4;
      if (offer.summary.toLowerCase().includes(term)) score += 2;
      if (offer.topics.some((t) => t.includes(term))) score += 3;
    });
  }

  if (filters.personas.size > 0) {
    offer.personas.forEach((p) => {
      if (filters.personas.has(p)) score += 3;
    });
  }

  // recency boost
  const days = daysUntil(offer.start_date);
  if (days >= 0 && days < 30) score += 2;
  if (days < 7) score += 1;

  return score;
}

function formatDateRange(start, end) {
  const formatter = new Intl.DateTimeFormat('de-DE');
  if (!start) return '';
  const startStr = formatter.format(new Date(start));
  const endStr = end && end !== start ? formatter.format(new Date(end)) : '';
  return endStr ? `${startStr} – ${endStr}` : startStr;
}

function createMetaList(offer) {
  const items = [];
  const dateStr = formatDateRange(offer.start_date, offer.end_date);
  if (dateStr) items.push(`${dateStr}${offer.format ? ` · ${formatLabels[offer.format] || offer.format}` : ''}`);
  if (offer.location?.city) items.push(offer.location.city);
  if (offer.cost_type === 'paid') items.push(offer.price_hint || 'Kostenpflichtig');
  if (offer.cost_type === 'free') items.push('Kostenfrei');
  if (offer.deadline) items.push(`Deadline: ${formatDateRange(offer.deadline)}`);
  return items;
}

function renderActiveFilters() {
  activeFiltersEl.innerHTML = '';
  const addPill = (label, onRemove) => {
    const pill = document.createElement('div');
    pill.className = 'pill';
    pill.innerHTML = `<span>${label}</span>`;
    const btn = document.createElement('button');
    btn.textContent = '×';
    btn.addEventListener('click', onRemove);
    pill.appendChild(btn);
    activeFiltersEl.appendChild(pill);
  };

  filters.types.forEach((id) => addPill(typeLabels[id] || id, () => { filters.types.delete(id); render(); }));
  filters.personas.forEach((id) => {
    const label = personas.find((p) => p.id === id)?.label || id;
    addPill(label, () => { filters.personas.delete(id); render(); });
  });
  if (filters.time !== 'any') addPill(`Zeitraum: ${filters.time} Tage`, () => { filters.time = 'any'; render(); });
  filters.formats.forEach((id) => addPill(formatLabels[id] || id, () => { filters.formats.delete(id); render(); }));
  filters.costs.forEach((id) => addPill(id === 'free' ? 'Kostenfrei' : 'Kostenpflichtig', () => { filters.costs.delete(id); render(); }));
}

function openDrawer(offer) {
  detailDrawer.setAttribute('aria-hidden', 'false');
  detailDrawer.classList.add('is-open');
  drawerBody.innerHTML = `
    <p class="eyebrow">${typeLabels[offer.type]}</p>
    <h2>${offer.title}</h2>
    <p class="lede">${offer.summary}</p>
    <ul class="meta">${createMetaList(offer).map((item) => `<li>${item}</li>`).join('')}</ul>
    <div class="tags">${offer.topics.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
    <p><strong>Quelle:</strong> ${offer.source}</p>
    <p><strong>Persona Fit:</strong> ${offer.personas.join(', ')}</p>
    <a class="cta" href="${offer.url}" target="_blank" rel="noreferrer">Zur Quelle</a>
  `;
}

function closeDrawer() {
  detailDrawer.classList.remove('is-open');
  detailDrawer.setAttribute('aria-hidden', 'true');
}

drawerClose.addEventListener('click', closeDrawer);
detailDrawer.addEventListener('click', (ev) => {
  if (ev.target === detailDrawer) closeDrawer();
});

function renderCards(list) {
  resultsEl.innerHTML = '';
  const fragment = document.createDocumentFragment();

  list.forEach((offer) => {
    const card = cardTemplate.content.cloneNode(true);
    const badge = card.querySelector('.badge');
    const source = card.querySelector('.source');
    const title = card.querySelector('.card__title');
    const summary = card.querySelector('.card__summary');
    const meta = card.querySelector('.meta');
    const tags = card.querySelector('.tags');
    const cta = card.querySelector('.cta');

    badge.dataset.type = offer.type;
    badge.textContent = typeLabels[offer.type] || offer.type;
    source.textContent = offer.source;
    title.textContent = offer.title;
    summary.textContent = offer.summary;
    meta.innerHTML = createMetaList(offer).map((item) => `<li>${item}</li>`).join('');
    tags.innerHTML = offer.topics
      .map((topic) => `<span class="tag">${topic}</span>`)
      .concat(offer.personas.map((p) => `<span class="tag">${p}</span>`))
      .join('');
    cta.addEventListener('click', () => openDrawer(offer));

    fragment.appendChild(card);
  });

  resultsEl.appendChild(fragment);
}

function render() {
  renderActiveFilters();

  const list = offers
    .filter((offer) => matchesQuery(offer))
    .filter((offer) => matchesSelection(filters.types, offer.type))
    .filter((offer) => matchesPersona(offer))
    .filter((offer) => matchesTimeFilter(offer))
    .filter((offer) => matchesFormat(offer))
    .filter((offer) => matchesCost(offer))
    .sort((a, b) => scoreOffer(b) - scoreOffer(a));

  resultCountEl.textContent = list.length;
  renderCards(list);
}

function init() {
  renderChips('typeFilters', typeOptions, filters.types);
  renderChips('personaFilters', personas.map(({ id, label }) => ({ id, label })), filters.personas);
  renderChips('formatFilters', formatOptions, filters.formats);
  renderChips('costFilters', costOptions, filters.costs);
  renderSingleChoice('timeFilters', timeOptions, filters.time, (val) => { filters.time = val; render(); });

  searchBtn.addEventListener('click', () => {
    filters.query = searchInput.value;
    render();
  });

  searchInput.addEventListener('input', (e) => {
    filters.query = e.target.value;
    render();
  });

  quickLinks.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.query = btn.dataset.quick;
      searchInput.value = filters.query;
      render();
    });
  });

  offerCountEl.textContent = offers.length;
  personaCountEl.textContent = personas.length;

  render();
}

init();
