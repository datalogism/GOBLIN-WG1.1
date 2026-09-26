# KG Modelling Community Survey – web site

Static site presenting the GOBLIN (COST Action CA23147) WG1 community survey
*Methodologies, tools and practices for KG modelling*. Plain HTML/CSS/JS, no build step to serve it.

| File | Content |
|---|---|
| `index.html` | presentation of the survey: artefact map (hero backdrop and interactive section), clusters, participation, live progress figures, methodology, sign-up |
| `map.html` | interactive map of the resources and artefacts of KG modelling (full screen; embedded in the home page, `map.html?hero` is the title backdrop) |
| `goblin-grid-tree.html` | cluster tree: the 5 current clusters and their 10 sub-libraries (live item counts), and examples of proposed clusters (embedded in the home page) |
| `assets/` | shared styles, theme toggle, favicon |

All links are relative, so the site works at a domain root or under a sub-path (`/<repo>/`), and also when
`index.html` is opened directly from disk (the figures need an internet connection).

## Data

The site's only data source is the public
[GOBLIN-WG1.1_Survey Zotero group library](https://www.zotero.org/groups/6610945/goblin-wg1.1_survey/library).
The survey figures of the home page (papers, annotated papers, entities per grid table, annotations awaiting
review, years covered) are computed in the visitor's browser from the Zotero Web API (`api.zotero.org`, which allows
cross-origin requests). Nothing needs to be rebuilt when the library changes: the next page load shows the new figures.

## Publishing on Codeberg Pages

Codeberg serves static files from a Git repository ([docs](https://docs.codeberg.org/codeberg-pages/)). Two options:

1. **Dedicated repository `pages`** – create a repository named `pages` under your user or organisation and push the
   content of this folder to its default branch. Served at `https://<owner>.codeberg.page/`.
2. **Any repository, branch `pages`** – push this folder to a branch named `pages` of a repository, e.g.
   `kg-modelling-survey`. Served at `https://<owner>.codeberg.page/kg-modelling-survey/`.

First publication (option 2, from this folder):

```
git init -b pages
git add .
git commit -m "KG modelling survey site"
git remote add origin https://codeberg.org/<owner>/kg-modelling-survey.git
git push -u origin pages
```

A custom domain can be added with a `.domains` file listing the domain, plus a DNS record pointing to
`codeberg.page` (see the Codeberg Pages documentation).

## Sign-up

The "Join the survey" buttons open the sign-up form: <https://forms.gle/an9aAGmsZqfTyU5V7>. To change it, edit the
two links in `index.html` (hero and *Get involved* section).
