# Napan Group — sito su GitHub Pages

Sito vetrina di Napan Group, pubblicato gratuitamente con GitHub Pages su www.napangroup.it.

## Come si modificano i dati
Da **app.pagescms.org** (accesso con l'account GitHub) → progetto del sito → **Dati del sito**.
Dopo il salvataggio il sito si aggiorna da solo in 1-2 minuti. I campi vuoti non vengono mostrati.

## Struttura
- `_data/impostazioni.yml` — dati societari, contatti, link e descrizioni delle società (modificati dal pannello)
- `.pages.yml` — configurazione del pannello Pages CMS
- `index.html`, `privacy-policy.html`, `cookie-policy.html`, `404.html` — pagine
- `_layouts/`, `_includes/` — testata, piè di pagina e impaginazione comuni
- `assets/` — stile, script, font ospitati in locale, logo
- `assets/img/societa/` — loghi vettoriali di Sirent, Maka e Naren (positivi e negativi)
- `assets/video/` — video animato dell'apertura (ciclo di 12 s) e video di presentazione del gruppo (23 s), con le immagini di anteprima

## Video
I video sono ospitati sul sito stesso (nessun YouTube, nessun cookie). Dal pannello, in **Dati del sito → Video**, si possono sostituire con file MP4 propri; lasciando i campi vuoti restano quelli del gruppo.
- `CNAME` — dominio del sito (www.napangroup.it)

## Cookie
Il sito non usa cookie né strumenti di tracciamento, quindi non serve il banner di consenso.
Se si aggiungono Google Analytics, mappe incorporate, video di YouTube/Vimeo o pixel social, prima vanno aggiornati cookie policy e banner.
