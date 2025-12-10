# Premiereproject

Dieses Repository enthält eine minimal lauffähige Klick-Dummy-Implementierung des in `recommendation_system_concept.md` beschriebenen Empfehlungssystems für www.medien-bayern.de. Das statische Frontend demonstriert Suche, Filter, Persona-Auswahl und Ergebnis-Cards auf Basis eines Mock-Datenfeeds.

## Nutzung

1. Öffne `index.html` lokal im Browser (kein Build- oder Backend-Schritt notwendig).
2. Nutze die Freitextsuche, Kategorie- und Persona-Chips sowie die Format- und Kostenfilter, um die angezeigten Angebote einzuschränken.
3. Über den CTA „Details“ öffnet sich ein Drawer mit weiterführenden Metadaten und Link zur Quelle.

## GitHub Pages Deployment

- Bei jedem Push auf den `work`-Branch wird die statische Seite automatisch über GitHub Actions auf GitHub Pages veröffentlicht (`.github/workflows/deploy-pages.yml`).
- Aktiviere in den Repository-Einstellungen GitHub Pages mit der Quelle „GitHub Actions“, damit die Auslieferung auf `https://<username>.github.io/<repository>` erfolgt.
- Für lokale Anpassungen reicht ein einfacher Push; es ist kein separater Build-Schritt nötig.

## Inhalt
- `index.html`: Grundgerüst des Widgets inklusive Hero und Filterleiste.
- `styles.css`: Layout im klaren Schwarz/Weiß-Stil mit Akzentfarben gemäß Konzept.
- `script.js`: Mock-Datenfeed, Filterlogik, heuristische Relevanzbewertung und Rendering der Cards.
- `recommendation_system_concept.md`: Ursprüngliches Konzeptdokument für das Empfehlungssystem.
