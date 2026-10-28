# Personal blog

A small static blog built with [Astro](https://astro.build), Markdown, and MDX.
Interactive posts use Astro components with browser JavaScript.
The base layout uses one narrow reading column, locally hosted Hack Nerd Font,
generous line spacing, and the Gruvbox Dark palette from the Alacritty config.
Code blocks also use Gruvbox Dark. The site keeps this dark palette regardless of
the reader's system appearance. Adjust it in `src/layouts/Base.astro` and
`src/styles/global.css`.

Fonts in `src/assets/fonts/` come from
[Nerd Fonts](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Hack),
with unused private-use icon glyphs removed and WOFF2 compression applied.
Their license is included in `public/fonts/Hack-LICENSE.txt`.

## Site settings

Edit `src/site.config.ts` to change the site title, description, or production URL.
The layout and Astro build config share these settings, including
page titles, default metadata, and canonical URLs.
Individual posts keep their own titles and descriptions in frontmatter.

Edit `src/pages/about.md` to update the About page and its contact links. It uses
`src/layouts/Markdown.astro` and contains a copy of the
[GitHub profile README](https://github.com/willyrgf/willyrgf/blob/master/README.md).

## Develop

Use [Nix](https://nixos.org/download/) with flakes enabled. From the repository
root, install dependencies and start Astro with the pinned Node 24 and npm:

```sh
nix run .#dev
```

Extra Astro arguments can be passed after `--`, for example
`nix run .#dev -- --host 0.0.0.0`.

To work inside the development shell instead:

```sh
nix develop
npm ci
npm run dev
```

While the new flake files are untracked by Git, use `nix run .#dev` or
`nix develop .` so Nix can see them.

Run the commands below inside this shell. To run a single command without
entering it, use e.g. `nix develop --command npm run build`.

Open the local URL printed by Astro. The blog is served at `/`.

```sh
npm run check    # Check Astro and TypeScript
npm run build    # Generate static HTML and assets in dist/
npm run preview  # Serve the production build locally
```

## Write a post

Add a `.md` file to `src/content/posts/`:

```markdown
---
title: My next post
description: A short description of the post.
date: 2026-10-28
---

Write your post here.
```

The filename becomes its URL: `my-next-post.md` → `/posts/my-next-post/`.
The homepage lists posts newest first. All posts
in this directory are published; remove the two example posts when ready.

For an interactive post, use `.mdx` and import a component:

```mdx
import SineWave from '../../components/SineWave.astro';

Try changing the frequency:

<SineWave />
```

See `src/content/posts/exploring-a-wave.mdx` and
`src/components/SineWave.astro` for a complete example. The graph is rendered
into the static HTML, then its slider is connected in the browser. JavaScript
is bundled only into pages that use the component.

Place static downloads and images in `public/`. Link to them from the root:
`public/images/figure.svg` becomes `/images/figure.svg`.

## Publish with GitHub Pages

1. In this repository on GitHub, select **Settings → Pages → Source → GitHub Actions**.
2. Set **Settings → Pages → Custom domain** to the hostname in `siteConfig.url`
   from `src/site.config.ts` and configure DNS
   using [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
3. Commit and push to `main`.
4. Enable **Enforce HTTPS** once GitHub provisions the certificate.

The included workflow installs dependencies, checks and builds the blog, then
deploys it to the configured custom domain. Pull requests check
and build the site without deploying it. Build output is not committed.

`astro.config.mjs` reads the production URL from `src/site.config.ts` and serves
the blog at `/` in both development and production. The npm package name and Nix
development environment description are independent of the site's display name.

The application is entirely static. Live simulations run in the reader's
browser; Python/R calculations can run beforehand and export data or figures.
