# BCU CompSoc – Build Your Own Portfolio Website

**From CV to personal website | HTML, CSS, JavaScript, GitHub and Vercel**

Welcome! In this workshop, you will turn your CV content into a personal portfolio website, learn the fundamentals of how websites work, and publish your finished project online.

The aim is not just to produce a website. You should understand the role of each file, be able to explain the code you use, and know how to make changes independently.

## Learning outcomes

By the end of the workshop, you should be able to:

- Identify the information that belongs in a professional student CV.
- Plan a website before writing code, using a sketch or Figma.
- Explain the roles of HTML, CSS and JavaScript.
- Build and customise a simple responsive portfolio.
- Use Git and GitHub to track and store your work.
- Deploy a static website using Vercel.
- Explain when a database or backend might be useful.

## 1. Start with your CV

Your CV is the source material for your portfolio. Prepare content for the sections that are relevant to you:

| CV section | Useful content |
|---|---|
| Contact details | Name, professional email, LinkedIn, GitHub |
| Personal profile | A short introduction and career interests |
| Education | University, degree, dates, grades and relevant modules |
| Technical skills | Languages, tools, platforms and technologies |
| Projects | University work, personal projects, labs and GitHub repositories |
| Experience | Employment, volunteering and responsibilities |
| Activities | Societies, leadership, hackathons and competitions |
| Certifications | Relevant qualifications and courses |

You do not need a long employment history to have useful experience. University assignments, home labs, personal projects, society roles and volunteering can all demonstrate skills.

Use the [BCU CompSoc CV Builder](https://www.bcucompsoc.com/cv-builder) as a starting point.

**Writing tip:** Describe what you did, how you did it, and what the result was. Avoid simply listing technologies without context.

## 2. Design before you develop

Do not begin by asking an AI tool to make a complete website. First decide what you want to build.

Look at these examples and note what you like:

- [ivancyber.uk](https://www.ivancyber.uk)
- [tayyebns.com](https://www.tayyebns.com)
- [bilalarshad.co.uk](https://bilalarshad.co.uk)

Ask yourself:

- What should a visitor see first?
- Which sections do I need?
- How will projects be presented?
- Which colours, fonts and visual style suit me?
- How will the layout work on a phone?

### Use Figma or a simple sketch

[Figma](https://www.figma.com) can help you create a wireframe or visual design before coding. A paper sketch is also perfectly acceptable.

A simple layout might contain:

1. Navigation
2. Hero / introduction
3. About
4. Skills
5. Projects
6. Experience and education
7. Contact

You can give your Figma design or screenshot to an AI assistant as a visual reference. The design is your direction; the AI can help translate it into code.

**Design first, develop second.** Planning the layout is a real development skill.

## 3. Understand the three core technologies

Think of a website as a human body:

| Technology | Analogy | What it does |
|---|---|---|
| HTML | Skeleton | Defines the structure and content |
| JavaScript | Muscles | Adds behaviour and interaction |
| CSS | Skin | Controls appearance and layout |

### HTML – the skeleton

HTML (HyperText Markup Language) describes the content and structure: headings, paragraphs, links, images, navigation and sections.

### CSS – the skin

CSS (Cascading Style Sheets) controls presentation: colours, typography, spacing, layout, animation and responsive design.

### JavaScript – the muscles

JavaScript adds behaviour: opening a mobile menu, responding to clicks, validating forms and updating page content.

They work together. HTML gives the page structure, CSS presents it, and JavaScript can make it interactive.

## 4. Understand this project's files

```text
portfolio-workshop/
├── index.html          # Page structure and content
├── style.css           # Visual design and responsive layout
├── script.js           # Interactive behaviour
├── assets/
│   ├── images/         # Your photos and project images
│   └── icons/          # Optional icons
├── AI_PROMPTS.md       # Guided prompts for learning with AI
├── README.md           # Project and workshop documentation
└── .gitignore          # Files Git should ignore
```

This is a static website. It does not need a traditional backend or database to display your portfolio.

## 5. Build and customise

1. Open this folder in [Visual Studio Code](https://code.visualstudio.com/).
2. Open `index.html` in a browser. For a better development workflow, install the Live Server extension in VS Code and use **Open with Live Server**.
3. Replace the example content in `index.html` with your own CV information.
4. Customise colours, typography and layout in `style.css`.
5. Explore `script.js` and test the mobile navigation.
6. Add your own project links and images.
7. Test the page at desktop and mobile widths.

### Suggested minimum content

- Your name and a clear professional introduction.
- A short About section.
- Relevant technical skills.
- At least two projects, if you have them.
- Education and relevant experience.
- Working links to GitHub and/or LinkedIn.
- A contact method you are comfortable making public.

Do not publish private information such as your home address, personal phone number if you do not want it public, passwords, API keys or confidential coursework data.

## 6. Use AI as a tutor, not a replacement

You may use ChatGPT, Claude or Gemini to explain concepts, review code, help debug errors and turn your design into a first implementation.

See [`AI_PROMPTS.md`](AI_PROMPTS.md) for prompts that guide you through the work one stage at a time.

### The workshop rule

Do not submit or deploy code that you cannot explain at a basic level.

When AI gives you code, ask:

1. What does this code do?
2. Why is it needed?
3. Which file should it go in?
4. What happens if I change or remove it?
5. How does it interact with HTML, CSS or JavaScript?

Try changing a small part yourself before asking AI to do it.

## 7. Git and GitHub

[Git](https://git-scm.com/) is a version control system. It records snapshots of your project so you can track changes and return to earlier versions.

[GitHub](https://github.com/) hosts Git repositories online and makes it easier to share and collaborate.

### Create your repository

1. Sign in to GitHub.
2. Create a new repository called `my-portfolio`.
3. Choose public or private. A public repository is useful for showcasing your work, but check that it contains no private information.
4. Follow the instructions below to connect your local project.

### Basic commands

Run these commands in the terminal from your project folder. Replace the URL with your own repository URL.

```bash
# Initialise Git in this folder
git init

# See which files have changed
git status

# Stage the files for a commit
git add .

# Save a snapshot of the staged changes
git commit -m "Build initial portfolio"

# Set the main branch name
git branch -M main

# Connect your local project to your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git

# Push your code to GitHub
git push -u origin main
```

If Git says that `origin` already exists, do not repeat the remote-add command. Check the current remote with `git remote -v`.

After the first push, future updates usually follow this pattern:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

## 8. Deploy with Vercel

[Vercel](https://vercel.com/) can deploy a website from a connected GitHub repository.

1. Create or sign in to your Vercel account.
2. Choose **Add New → Project**.
3. Import your portfolio repository from GitHub.
4. For this plain HTML/CSS/JavaScript project, no framework is required.
5. Leave the build command and output directory empty if Vercel detects a static project and does not require settings.
6. Deploy.
7. Open the generated public URL and test it.

When you push later changes to the connected GitHub branch, Vercel can automatically create a new deployment.

### GitHub Pages or Vercel?

You can use either platform, but we recommend **Vercel** for this workshop because it offers a flexible deployment workflow and can connect to a **private GitHub repository**.

- **GitHub Pages:** A straightforward option for hosting static websites. On the GitHub Free plan, Pages is generally intended for public repositories. Check GitHub's current plan and repository-visibility requirements before choosing this option.
- **Vercel:** Can import a private GitHub repository, so your source repository does not need to be public just to deploy your portfolio. You can keep the code repository private while sharing the public website URL.

**Important security distinction:** A private GitHub repository controls who can access the repository on GitHub. It does not make browser-side website code secret. HTML, CSS and JavaScript sent to a visitor's browser can be inspected, regardless of whether the repository is public or private. Never put passwords, private keys, API secrets or confidential information in frontend code.

For greater flexibility and the option to keep the GitHub repository private, Vercel is our recommended deployment route. GitHub Pages remains a valid alternative if you understand its repository-visibility and plan requirements.

Free-plan features, limits and terms can change, so check each provider's current documentation before deployment.

## 9. Optional: Supabase and Railway

These are extension topics, not requirements for this portfolio.

### Supabase

[Supabase](https://supabase.com/) provides managed backend features, including a PostgreSQL database, authentication, storage and APIs.

You might consider it if you later want to:
- Store project entries in a database.
- Add an admin area to manage content.
- Add user accounts.
- Store contact form submissions.

A basic portfolio with content written into its files does not need Supabase. Never expose secret keys in browser-side JavaScript.

### Railway

[Railway](https://railway.com/) is a platform for deploying applications and services, such as Python or Node.js backends and databases.

For example, a more advanced project might use Vercel for the frontend and Railway to host a separate Python API. This is not needed for today's static website.

Supabase and Railway serve different purposes. Their pricing and free usage allowances may change.

## 10. Final checklist

### CV and planning
- [ ] I have prepared my CV content.
- [ ] I have chosen which sections belong on my portfolio.
- [ ] I have sketched or designed the website before coding.

### Development
- [ ] I can explain what HTML, CSS and JavaScript do.
- [ ] I have customised the HTML content.
- [ ] I have made changes to the CSS myself.
- [ ] I understand the JavaScript used by the page.
- [ ] I have checked the website on mobile and desktop.
- [ ] My links and navigation work.

### GitHub and deployment
- [ ] My project is in a GitHub repository.
- [ ] I understand the basic Git commands.
- [ ] My repository is connected to Vercel.
- [ ] My website is live and I have tested its public URL.

### Professional finishing touches
- [ ] I have added my portfolio URL to my CV.
- [ ] I have added my portfolio URL to LinkedIn, if appropriate.
- [ ] My README explains what the project is.
- [ ] I have checked that I have not published private information or secrets.

---

## Final thought

The objective is not simply to build something that works. It is to understand why it works.

Your portfolio can grow throughout your degree and career. Keep adding projects, improving your design and documenting what you learn.

**Don't just build something that works. Understand why it works.**

**BCU Computing Society | Cybersecurity & Development Workshops**
