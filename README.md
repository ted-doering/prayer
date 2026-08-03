# Narrative Church — Prayer List

A tool for organizing Sunday-morning prayer requests: add prayers (name, requestor,
type, status, notes, optional confidential flag), archive them, and generate a weekly
prayer document to print/save-as-PDF for worship or email to the prayer team.

Static site hosted on **GitHub Pages** at `https://ted-doering.github.io/prayer/`.
Sign-in and data use **Firebase** (Google Authentication + Realtime Database).

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app |
| `support.js` | Runtime the app needs to render — **do not delete** |
| `firebase-config.js` | Your Firebase project keys + allowed staff emails |
| `og-image.png` | Social preview image shown when the link is shared (iMessage, etc.) |
| `_ds/…` | Design-system stylesheet + bundle the app loads |
| `.nojekyll` | Tells GitHub Pages to serve the `_ds/` folder (Jekyll hides `_` folders) — **do not delete** |
| `firebase.json` / `.firebaserc` | Firebase config (for deploying the database rules) |
| `database.rules.json` | Realtime Database security rules (restricted to staff emails) |

## Deploy to GitHub Pages

1. Create a repo named **`prayer`** under the `ted-doering` account and push these files to
   the default branch (repo root).
2. Repo **Settings → Pages** → Source: *Deploy from a branch* → pick your branch and `/root`.
3. The site publishes at `https://ted-doering.github.io/prayer/`.

Because the files use relative paths, everything works under the `/prayer/` subpath. The
`.nojekyll` file must stay at the repo root or the `_ds/` assets (styles + bundle) won't load.

## Firebase setup (one time)

In the [Firebase console](https://console.firebase.google.com) for project **prayer-7ac7e**:

1. **Authentication → Sign-in method** → enable **Google**.
2. **Authentication → Settings → Authorized domains** → add **`ted-doering.github.io`**
   (required, or Google sign-in is blocked on the live site).
3. **Build → Realtime Database** → create the database, then deploy the rules:
   ```bash
   npm install -g firebase-tools   # once
   firebase login                  # once
   firebase deploy --only database # pushes database.rules.json
   ```
4. Confirm `databaseURL` in `firebase-config.js` matches the URL at the top of your
   Realtime Database page.

Access is limited to **ted@narrative.church** and **matt@narrative.church** in both
`firebase-config.js` (UI) and `database.rules.json` (enforced). Edit both lists to change
who can sign in.

## Notes

- Google sign-in only works on an authorized domain — it won't work opening `index.html`
  from disk. Add `ted-doering.github.io` as above.
- The social preview image is referenced by absolute URL in `index.html`
  (`https://ted-doering.github.io/prayer/og-image.png`). If the domain/path changes, update
  the `og:image` / `og:url` / `twitter:image` meta tags in `index.html`.
- Firebase web API keys are not secret by design — your database rules protect the data. If
  you'd rather not publish them, keep the repo private.
