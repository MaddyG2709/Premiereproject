# Recommendation System Konzept für medien-bayern.de

## 1. Ziele & Nutzen
- **Zielgruppe:** Medienschaffende aller Erfahrungsstufen (Einsteiger, Quereinsteiger, Professionals).
- **Zweck:** Schneller Zugang zu passenden Veranstaltungen, Förderprogrammen und Publikationen für Vernetzung, Weiterbildung und Ideenumsetzung.
- **Integration:** Leicht als eingebetteter Baustein (Widget/Modul) auf www.medien-bayern.de nutzbar, responsive und barrierearm.

## 2. Datenquellen (Startumfang)
- Blauer Panther Award: https://blauerpanther.com/award/
- Games/Bavaria Events: (anstehende Veranstaltungen)
- Games/Bavaria Förderung: https://www.games-bavaria.com/foerderung-games-bavaria-angebot/
- Mediennetzwerk Bayern Events: https://mediennetzwerk-bayern.de/events/
- Media Lab Bayern: https://www.media-lab.de/de/
- KI-Kompetenzzentrum Medien: https://medien-bayern.de/ki-kompetenzzentrum-medien/
- XPLR Media Eventkalender: https://www.xplr-media.com/medienevent-digitalevent-kalender-fuer-bayern/
- XR HUB Bavaria: https://xrhub-bavaria.de/events/
- Start into Media (Ausbilder:innen): https://www.startintomedia.de/fuer-ausbilder-innen
- Start into Media (Für dich): https://www.startintomedia.de/f%C3%BCr-dich/events-fuer-dich
- Mediennetzwerk Bayern Förderung: https://mediennetzwerk-bayern.de/foerderung/
- Mediennetzwerk Bayern Think Tank: https://mediennetzwerk-bayern.de/thinktank/
- Media Lab Angebote: https://www.media-lab.de/de/angebote/
- Medientage: https://medientage.de/mtm-special-ai-media-2026/

## 3. Kernfunktionen
- **Freitextsuche** über Titel, Beschreibung, Tags.
- **Kategoriefilter** (Mehrfachauswahl): z. B. Events, Förderung, Publikationen; Themen wie KI, XR, Games, Journalismus, Start-up, Audio/Podcast, Film/TV, Innovation.
- **Persona-Auswahl (bis zu 5 vordefinierte Profile):**
  1. *Studierende*r / Einsteiger* (Suche nach Orientierung, Basics, Networking).
  2. *Quereinsteiger* (Kompakte Weiterbildungen, Mentoring, Bootcamps).
  3. *Startup-Gründer* (Förderprogramme, Invest, Accelerators, Pitches).
  4. *Professional / Spezialist* (Deep-Dive-Events, Fachkonferenzen, Publikationen, Workshops).
  5. *Creator / Freelancer* (Auftrags- und Netzwerk-Events, Tools, Finanzierung).
- **Filter für** Zeitraum (Datum, "nächste 7/30/90 Tage"), Ort (Präsenz, Online, Hybrid, Region/PLZ), Angebotstyp (kostenfrei/kostenpflichtig).
- **Suchergebnis-Listing** je nach Angebotstyp mit allen relevanten Metadaten (siehe Abschnitt 5).

## 4. UX & UI (Look & Feel)
- **Stil:** Klar, sachlich, Designagentur-Style, viel Weißraum, Raster-Layout.
- **Farben:** Schwarz (#000) / Weiß (#FFF) plus helles Grau (#F4F4F5 / #E5E7EB) als Flächen; dezente Akzente (Gelb/Türkis/Blau) für Tags, Hover, Badges.
- **Typo:** Sans-Serif (Inter/System), Headlines gern in Versalien mit leichtem Letterspacing.
- **Bausteine:**
  - Hero mit H1, kurzem Nutzenstatement und Freitextfeld + Call-to-Action.
  - Filterleiste (Kategorien, Persona, Zeitraum, Ort, Angebotstyp) als Chips/Toggles.
  - Ergebnisliste im Grid oder gestapelten Cards, mit klarer Hierarchie.
  - Detailpanel/Drawer für mehr Infos, ohne Seite zu verlassen.

## 5. Ergebnisdarstellung (Quick Win)
- **Card-Layout** mit konsistenten Metadatenblöcken:
  - *Header:* Kategorie-Badge (Event/Förderung/Publikation) + primäre Akzentfarbe für die Quelle.
  - *Titel & Kurzbeschreibung* (2–3 Zeilen, ellipsiert).
  - *Meta-Zeile:* Datum/Zeitraum, Ort (Präsenz/Online/Hybrid + Stadt), Kosten (kostenfrei/kostenpflichtig), Dauer/Deadline.
  - *Tags:* Themen (KI, XR, Games, etc.) und Zielgruppen (Persona-Badge).
  - *CTA:* "Details"/"Zur Quelle" mit externem Link-Icon.
- **Anpassungen pro Angebotsform:**
  - *Veranstaltungen:* Datum & Uhrzeit prominent, Ort & Format, Kapazität (falls verfügbar).
  - *Förderprogramme:* Bewerbungsfrist, Förderhöhe/Art, Zielgruppe, Anforderungen.
  - *Publikationen:* Erscheinungsdatum, Medium (PDF, Artikel, Video), Lese-/Längetipp.
- **Sortierung:** Standard = Relevanz (Mix aus Match-Score, Aktualität, Persona-Fit), alternativ nach Datum/Deadline.

## 6. Informationsarchitektur & Datenmodell (MVP)
- **Entitäten:** `Offer {id, source, type, title, summary, url, topics[], personas[], format, location, city, country, online/hybrid, start_date, end_date, deadline, cost_type (free/paid), price_hint, language, organizer, image_url}`.
- **Indices:** Volltext auf `title`, `summary`, `topics`; Facetten für `type`, `topics`, `personas`, `format`, `cost_type`, `date ranges`.
- **Personas:** Auf Anwendungslogik-Ebene als Gewichtungen für bestimmte Topics/Formats (z. B. Professional -> Deep-Dive/Publikationen; Startup -> Förderung/Pitches).

## 7. Empfehlungslogik (heuristisch als Quick Start)
- **Relevanz-Score** pro Angebot:
  - Text-Matching (BM25/Vektor) zwischen Query und `title/summary/topics`.
  - **Persona-Fit:** Boost, wenn Angebot `personas` schneidet oder passende Topics/Formats zur Persona hinterlegt sind.
  - **Kategorie/Filter-Fit:** Hartes Filtern nach ausgewählten Kategorien, Zeitraum, Ort, Kosten.
  - **Aktualität:** Boost für bald kommende Termine bzw. laufende Bewerbungsfristen.
- **Fallback-Empfehlungen:** Bei leerer Query die Top-aktuellen, persona-passenden Angebote.
- **Feedback-Signale:** Klicks/Bookmarks später als Re-Ranking-Signale nutzbar.

## 8. Architektur & Integration
- **Frontend-Widget** (Headless React/Vue oder Vanilla JS) das per `<script>` eingebunden wird und gegen eine JSON-API spricht; liefert HTML mit medien-bayern.de Styling (CSS-Token für Farben/Typo).
- **API-Layer**
  - `/search`: Query + Facetten (Kategorien, Persona, Zeitraum, Ort, Kosten) -> paginierte Angebote.
  - `/personas`: Liefert die 5 Profile + Beschreibungen + Gewichtungen.
  - **Deployment:** Als Edge-Funktion oder kleiner Node/Go/Python-Service hinter CDN.
- **Dateningest:** Lightweight Scraper/Feeds, normalized ins Datenmodell; regelmäßige Aktualisierung via Cron.

## 9. Filter- und UI-Verhalten (Beispiel-Flow)
1) Nutzer gibt Freitext ein und wählt 1–2 Kategorien + 1 Persona.
2) Filterleiste bietet Schnellfilter: Zeitraum (Pills für "Nächste 7/30/90 Tage" + Datumsrange), Ort (Präsenz/Online/Hybrid + Stadt), Angebotstyp (kostenfrei/kostenpflichtig).
3) Trefferliste zeigt 9–12 Cards pro Seite, sortiert nach Relevanz; oben Summenzeile mit aktiven Filtern.
4) Auf Card-CTA öffnet sich ein Detail-Drawer mit Langbeschreibung, Anforderungen, Link zur Quelle.

## 10. Inhalts- und Styling-Komponenten (Snippet-Idee)
- **Filterchips:** Rounded, hellgrauer Hintergrund, schwarze Typo; Active-State mit Akzentfarbe (Gelb/Türkis/Blau).
- **Persona-Auswahl:** 5 Pills mit Kurzlabel + Tooltip "Zu dir passt"; Mehrfachwahl optional zulassen (max. 2).
- **Result-Card-Layout (pseudo-HTML):**
```html
<article class="card">
  <header>
    <span class="badge badge--event">Event</span>
    <span class="source">XR HUB Bavaria</span>
  </header>
  <h3>MTM Special: AI & Media 2026</h3>
  <p class="summary">Konferenz zu KI-Trends für Medienproduktion, mit Panels und Networking.</p>
  <ul class="meta">
    <li>12.02.2026, München · Hybrid</li>
    <li>Kostenpflichtig</li>
    <li>Tags: KI, Konferenz, Professional</li>
  </ul>
  <a class="cta" href="https://medientage.de/mtm-special-ai-media-2026/" target="_blank" rel="noreferrer">Details</a>
</article>
```
- **Responsives Grid:** 3 Spalten Desktop, 2 Tablet, 1 Mobile; Cards mit großzügigem Padding und 8px Radius.

## 11. Roadmap (kurz)
- **Sprint 1 (MVP UI + Heuristik):** Frontend-Widget mit Suche, Filterchips, Persona-Pills, Ergebnis-Cards; statischer Datenfeed (JSON) als Proof-of-Concept.
- **Sprint 2 (Backend + Ingest):** Scraper/Feeds, Normalisierung, Suchindex (Elasticsearch/Algolia/Meilisearch), API-Endpunkte.
- **Sprint 3 (Re-Ranking & UX):** Tracking-Signale, Personalisierung, Bookmarks, Export (Kalender/ICS), Barrierefreiheits-Polish.

## 12. Integrationshinweise für medien-bayern.de
- **Einbettung:** 1) Script-Tag einbinden, 2) `<div id="mb-reco-widget"></div>` platzieren, 3) Init-Aufruf `MBReco.init({themeTokens, apiBase})`.
- **Theming:** CSS-Custom-Properties für Farben, Font, Spacing übergeben, damit das Widget den bestehenden Stil nahtlos übernimmt.
- **Tracking:** Optionale Events (`onResultClick`, `onFilterChange`) für interne Analytics.
- **Performance:** Lazy Data-Fetch, Debounce bei Suche, Skeleton-States; Bilder responsive mit `aspect-ratio` und `object-fit`.

## 13. Beispiel-API-Antwort (Kurzfassung)
```json
{
  "results": [
    {
      "id": "mtm-ai-2026",
      "type": "event",
      "title": "MTM Special: AI & Media 2026",
      "source": "Medientage",
      "summary": "Konferenz zu KI-Trends für Medienproduktion.",
      "topics": ["KI", "Konferenz"],
      "personas": ["professional"],
      "format": "hybrid",
      "location": {"city": "München", "country": "DE"},
      "start_date": "2026-02-12",
      "end_date": "2026-02-12",
      "cost_type": "paid",
      "price_hint": "ab 90€",
      "url": "https://medientage.de/mtm-special-ai-media-2026/"
    }
  ]
}
```

## 14. Nächste Schritte für einen Click-Dummy
- Einfache HTML/CSS-Komponente im medien-bayern.de Stil aufsetzen.
- Statischen JSON-Feed der oben genannten Quellen mocken.
- Interaktive Filter (Chips/Pills) + Persona-Auswahl + Card-Grid mit 3 Content-Typen (Event/Förderung/Publikation).
- Optional: Mini-Recommender-Heuristik in JS (Boost nach Persona/Topics + Datum).
