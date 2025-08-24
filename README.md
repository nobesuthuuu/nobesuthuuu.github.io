# Personal Portfolio (Static)

A clean, responsive personal portfolio built with static HTML/CSS/JS. No build step.

## Customize content

Edit `config.js` to update your profile details, links, and accent color:

```js
window.SITE_CONFIG = {
  fullName: "Your Name",
  intro: "One to three sentences about you.",
  avatarImagePath: "assets/avatar.svg",
  accentColor: "#3b82f6",
  links: {
    resume: "assets/resume.pdf",
    linkedin: "https://www.linkedin.com/in/your-username/",
    github: "https://github.com/your-username",
    paper: "assets/paper.pdf"
  }
};
```

- Place your profile image at `assets/avatar.svg` (PNG/JPG works too — update the path).
- Add your resume PDF to `assets/resume.pdf`.
- Add your research paper PDF to `assets/paper.pdf`.

If a link is left empty (e.g., `""`), its button will be hidden automatically.

## Local preview

Just open `index.html` in a browser or use a static server, e.g.:

```bash
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

## Deploy to GitHub Pages

1. Push this folder to a new GitHub repository.
2. Add an empty file named `.nojekyll` at the root (already included).
3. In your repo: Settings → Pages → Deploy from branch → `main` (or `master`) → `/ (root)`.
4. Wait for the deployment to finish. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

No additional setup is required; it's a fully static site.