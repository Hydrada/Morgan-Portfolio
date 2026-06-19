# Publishing Checklist

Use this repo as a public portfolio only.

## Recommended GitHub repo

Create a public GitHub repository named:

```text
morgan-nichols-portfolio
```

Good alternatives:

```text
hydrantloop-portfolio
portfolio
```

## Before pushing

Run:

```bash
git status
git log --oneline -1
```

Confirm the repo contains only:

- Static portfolio files
- Public HydrantLoop links
- Sanitized project summaries
- Public safety documentation

Do not add HydrantLoop app code, Excel workbooks, workbook macros, field records, mod source folders, packaged mod zip files, testing app URLs, private notes, tester details, exports, credentials, or local source folders.

## Push after creating the GitHub repo

Replace `YOUR-GITHUB-USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/morgan-nichols-portfolio.git
git push -u origin main
```

## Publish with GitHub Pages

In GitHub:

1. Open the repository.
2. Go to `Settings`.
3. Go to `Pages`.
4. Set source to `Deploy from a branch`.
5. Choose branch `main` and folder `/root`.
6. Save.

GitHub will provide a public portfolio URL after the first deploy.
