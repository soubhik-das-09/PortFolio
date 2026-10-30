<<<<<<< HEAD
# Soubhik Das — Developer Portfolio

A modern, professional, and fully responsive developer portfolio website built with pure **HTML, CSS, and JavaScript**. No frameworks, no build tools — just open `index.html` in a browser.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | CSS3 (custom properties, animations, glassmorphism) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts – Inter + JetBrains Mono |
| Icons | Inline SVG (Lucide-style) |

---

## 📁 Project Structure

```
PortFolio/
├── index.html       ← Main HTML shell (all sections)
├── style.css        ← All styling, themes, animations
├── script.js        ← Dynamic rendering + interactions
├── data.js          ← ALL content (edit this to update portfolio)
├── resume.pdf       ← Add your resume PDF here
└── README.md
```

---

## ▶️ How to Run

1. Clone or download this folder
2. Add your `resume.pdf` to the root folder
3. Open `index.html` in any modern browser

No npm, no build step, no dependencies.

---

## ✏️ How to Update Content

**Everything is in `data.js`** — edit it to update:

### Update Personal Info
```js
const personal = {
  name: "Soubhik Das",
  email: "your.email@example.com",        // ← Add real email
  linkedin: "https://linkedin.com/in/...", // ← Add real LinkedIn
  resume: "./resume.pdf",                  // ← Add resume PDF
  ...
}
```

### Add a New Project
```js
const projects = [
  {
    title: "My New Project",
    subtitle: "Short tagline",
    description: "What this project does.",
    tech: ["Java", "Spring Boot", "MySQL"],
    features: ["Feature 1", "Feature 2"],
    github: "https://github.com/...",
    live: "https://...",      // or null
    status: "Completed",      // Completed / Live / In Progress
    type: "Backend",
    highlight: false,
  },
  ...
]
```

### Add a New Skill
```js
const skills = {
  backend: [
    { name: "New Skill", icon: "🔧" },  // ← add here
    ...
  ]
}
```

### Add a Learning Step
```js
const journey = {
  backend: {
    steps: [
      "Existing Step",
      "New Step I Just Learned",  // ← add here
    ]
  }
}
```

---

## 🌟 Features

- ✅ Dark / Light theme toggle (persisted in localStorage)
- ✅ Typing animation in hero section
- ✅ Smooth scroll reveal animations
- ✅ Sticky navbar with active section highlighting
- ✅ Responsive mobile hamburger menu
- ✅ Skills category filter
- ✅ Project feature toggle cards
- ✅ Contact form with frontend validation → opens email client
- ✅ Back to top button
- ✅ SEO meta tags
- ✅ Accessible semantic HTML
- ✅ Responsive on all screen sizes

---

## 🌐 Deployment

### GitHub Pages (Free)
1. Push to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site is live at `https://username.github.io/repo-name`

### AWS S3 (Static Hosting)
1. `aws s3 sync . s3://your-bucket-name --exclude "*.md"`
2. Enable static website hosting on the bucket
3. Optionally add CloudFront for CDN

---

## 📝 TODO / Placeholders to Fill

| Item | How to fix |
|------|-----------|
| LinkedIn URL | Edit `personal.linkedin` in `data.js` |
| Email address | Edit `personal.email` in `data.js` |
| GitHub project URLs | Edit each project's `github` field in `data.js` |
| Resume PDF | Add `resume.pdf` to root folder |

---

*Designed and developed by Soubhik Das*
=======
# PortFolio
>>>>>>> ec020dae26d555cd6bae60763cb8dd7bf0ef7e09
