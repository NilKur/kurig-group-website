# Kurig Group website

Source of the website of the Kurig Group, Institute of Technical Chemistry, University of Stuttgart.
The site is built with Jekyll and hosted on GitHub Pages. No build step is needed: every change to this repository is published automatically.

## Where to change what

| What | File |
|---|---|
| Email, phone, address, office, profile links, portrait | `_config.yml` |
| Publications | `_data/publications.yml` |
| News on the home page | `_data/news.yml` |
| Group members | `_data/team.yml` |
| Links page | `_data/links.yml` |
| Page texts | `index.html`, `team.html`, `research.html`, `teaching.html`, `contact.html` |
| Navigation and footer | `_includes/nav.html`, `_includes/footer.html` |
| Colors, fonts, spacing | `assets/css/style.css` |
| Logo and favicon | `_includes/logo.svg`, `assets/img/` |

Small edits work directly on github.com: open a file, click the pencil icon, change the text, and commit.

## Images

Put photos into `assets/img/` (team photos into `assets/img/team/`), about 1000 px wide, as JPG.
Then reference them, for example `portrait: "/assets/img/nils-kurig.jpg"` in `_config.yml`.

## Before going live

- [ ] Email address in `_config.yml` (required for the Impressum)
- [ ] Review `legal-notice.html` and `privacy.html`
- [ ] Portrait photo
- [ ] Enable GitHub Pages (Settings → Pages → Deploy from branch `main`, folder `/`)
- [ ] Connect the domain kurig-group.de (Settings → Pages → Custom domain, plus DNS records at INWX)

## Fonts

IBM Plex Sans and IBM Plex Mono are self-hosted in `assets/fonts/` under the SIL Open Font License.
