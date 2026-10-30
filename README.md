# Soubhik Das — Developer Portfolio

A modern, responsive personal portfolio website built using **HTML5, CSS3, and Vanilla JavaScript**. It showcases my technical skills, projects, learning journey, and contact information.

The portfolio is hosted on **Amazon S3**, with automated deployment using **GitHub Actions CI/CD**.

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, animations, and responsive design |
| JavaScript (ES6+) | Dynamic content and interactions |
| Google Fonts | Typography |
| Inline SVG | Icons |
| Git | Version control |
| GitHub | Source code management |
| AWS S3 | Static website hosting |
| AWS IAM | Access management |
| GitHub Actions | CI/CD automation |

## ✨ Features

- Responsive design for desktop, tablet, and mobile devices.
- Dark and light theme toggle.
- Typing animation in the hero section.
- Smooth scrolling and reveal animations.
- Sticky navigation with active section highlighting.
- Responsive mobile navigation menu.
- Skills category filtering.
- Interactive project cards.
- Contact form with frontend validation.
- Back-to-top button.
- SEO meta tags.
- Semantic and accessible HTML.

## 📁 Project Structure

```text
PortFolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── index.html
├── style.css
├── script.js
├── data.js
├── resume.pdf
└── README.md
```

## 💻 Run Locally

No frameworks, npm packages, or build tools are required.

**1. Clone the repository**

```bash
git clone https://github.com/soubhik-das-09/PortFolio.git
```

**2. Navigate to the project directory**

```bash
cd PortFolio
```

**3. Open the website**

Open `index.html` in any modern web browser.

## ⚙️ Customize Portfolio Content

Most portfolio content is managed through `data.js`.

You can update:

- Personal information
- Email and LinkedIn details
- Technical skills
- Project descriptions
- GitHub repository links
- Learning journey
- Resume file path

Update the relevant values in `data.js` to personalize the website.

## ☁️ AWS Deployment

The portfolio is deployed on **Amazon S3 using static website hosting**.

### CI/CD Architecture

```text
       Developer
           |
           v
    Local Development
           |
           v
      Git & GitHub
           |
      Push to main
           |
           v
    GitHub Actions
           |
           v
  Configure AWS Credentials
           |
           v
       AWS IAM
           |
           v
      Amazon S3
           |
           v
   Live Portfolio Website
```

### Deployment Process

1. Develop and update the portfolio locally.
2. Commit and push changes to the GitHub `main` branch.
3. GitHub Actions automatically triggers the deployment workflow.
4. AWS credentials are configured securely using GitHub Secrets.
5. The workflow synchronizes website files with the S3 bucket.
6. The updated portfolio is published through Amazon S3 static website hosting.

### GitHub Actions Workflow

The deployment configuration is available at:

```text
.github/workflows/deploy.yml
```

The workflow supports:

- Automatic deployment on pushes to `main`.
- Manual deployment through the GitHub Actions tab.
- Automated synchronization of website files to Amazon S3.

### Required GitHub Configuration

**Repository Secrets:**

```text
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

**Repository Variable:**

```text
AWS_S3_BUCKET
```

AWS credentials are stored in GitHub Secrets instead of being hardcoded in the source code.

## 📚 Key Learnings

Through this project, I gained practical experience in:

- Building responsive websites using HTML, CSS, and JavaScript.
- Managing source code with Git and GitHub.
- Hosting static websites on Amazon S3.
- Understanding AWS IAM and access management.
- Implementing CI/CD pipelines using GitHub Actions.
- Automating cloud deployments.
- Understanding the integration of GitHub with AWS services.

## 🔗 GitHub Repository

[View Portfolio Source Code](https://github.com/soubhik-das-09/PortFolio)

---

**Designed and developed by Soubhik Das.**