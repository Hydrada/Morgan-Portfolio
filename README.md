# Morgan Nichols Portfolio

Static portfolio site seeded from HydrantLoop's public site, safe public-facing summaries of local project work, and sanitized mod summaries.

This repository is intended to be public. Do not commit HydrantLoop app source code, mod package archives, mod source folders, testing app URLs, tester data, NDA material, credentials, private SOPs, internal calculations, or local machine paths.

## Open it

Open `index.html` in a browser. No install or build step is required.

## Add or update projects

Edit `projects.js`. Each project supports:

- `title`
- `category`
- `summary`
- `status`
- `stack`
- `source`
- `links`

Example link:

```js
links: [
  { label: "GitHub", href: "https://github.com/your-name/your-repo" },
  { label: "Live demo", href: "https://example.com" }
]
```

## Make it yours

The site currently uses `morgan@hydrantloop.com` as the professional contact address. Configure that mailbox on the HydrantLoop domain before publishing, or replace it with the address you want to use.
