# AI Prompts – Build Your Portfolio Step by Step

Use these prompts with ChatGPT, Claude or Gemini. They are designed to make the AI explain its decisions while helping you build.

**Important:** AI can make mistakes, produce inaccessible code or misunderstand your design. Read the output, test it and ask questions. Do not blindly replace your files with generated code.

## How to work with AI

For each stage:

1. Give the AI the relevant context, design or code.
2. Ask it to explain its plan before making large changes.
3. Work on one component at a time.
4. Ask what each important HTML element, CSS rule or JavaScript function does.
5. Run the website and test the result.
6. Make at least one change yourself.

### Reusable instruction

Paste this at the start of a conversation:

```text
Act as a patient web development tutor. I am a beginner learning HTML,
CSS and JavaScript.

Help me build my portfolio in small, understandable steps. Do not generate
the entire website in one response.

For every code change:
- Tell me which file to edit.
- Explain what the code does and why it is needed.
- Explain important HTML elements, CSS properties or JavaScript concepts.
- Explain how the files work together.
- Give me a small task to try myself.
- Tell me how to test whether it works.

Do not hide complexity behind unexplained code. If there are multiple
ways to implement something, briefly explain the options and recommend
a beginner-friendly approach.

My goal is to understand the code, not just obtain a finished website.
```

---

## Prompt 1 – Plan the portfolio

```text
I want to create a personal portfolio website based on my CV.

Before writing code, help me plan the website.

My background:
[ADD YOUR DEGREE, INTERESTS, SKILLS, PROJECTS AND EXPERIENCE]

Help me decide:
1. Which sections I should include.
2. What information belongs in each section.
3. What a visitor should see first.
4. How to organise the navigation.
5. What content should be short and what can be expanded.

Do not write code yet. Explain the reasoning behind the structure.
```

## Prompt 2 – Turn a Figma design into a development plan

Attach your Figma screenshot, export or design reference.

```text
I have attached my proposed portfolio website design.

Analyse the design and describe:
- The page sections and their order.
- The layout of each section.
- Typography, colours, spacing and visual hierarchy.
- Repeated components, such as buttons and project cards.
- How the layout should adapt to mobile screens.

Create a development plan that divides the design into small components.

Do not write the entire website yet. Identify what should be built first
and explain how HTML, CSS and JavaScript will be used.
```

## Prompt 3 – Understand the starter project

```text
Here is my project structure:

index.html
style.css
script.js
assets/

Explain the purpose of each file and how the browser uses them.

Explain how index.html connects to style.css and script.js.

Show me how to check that the CSS and JavaScript files are linked
correctly. Do not redesign the website.
```

## Prompt 4 – Build the HTML structure

```text
Let's build the HTML for my portfolio, one section at a time.

Start with the navigation and hero section.

Explain:
- What each HTML element represents.
- The difference between semantic and non-semantic HTML.
- Why elements such as header, nav, main and section are useful.
- How IDs and classes are used.
- How links navigate to sections of the page.

Do not add CSS or JavaScript yet. Give me a small task to modify
the HTML myself.
```

## Prompt 5 – Style the page with CSS

```text
Now help me style the HTML we have created, using my design reference.

Work on one section at a time.

Explain:
- CSS selectors and how they target HTML elements.
- The box model: content, padding, border and margin.
- Flexbox and CSS Grid, where appropriate.
- Typography, colours and spacing.
- How to create responsive layouts with media queries.

For each important rule, explain what it changes and why it is useful.
Do not give me a huge unexplained stylesheet.
```

## Prompt 6 – Add JavaScript interaction

```text
Help me add a responsive mobile navigation menu.

First explain the behaviour we want.

Then implement it in script.js and make any necessary small changes
to index.html and style.css.

Explain:
- What a JavaScript function is.
- What an event listener does.
- How JavaScript selects an HTML element.
- How a class can be added or removed.
- How the CSS responds when the class changes.

Explain how the three files work together. Include keyboard and
accessibility considerations.
```

## Prompt 7 – Add a project card

```text
Help me create a reusable project card for my portfolio.

Each card should show:
- Project name.
- Short description.
- Technologies used.
- Link to the source code or live demo.

Explain the HTML structure and CSS layout.

If you use JavaScript, explain why it is needed. Do not add JavaScript
just for the sake of using it.

Help me add two different project cards using the same structure.
```

## Prompt 8 – Make the website responsive

```text
My portfolio looks acceptable on desktop, but I need it to work on
mobile devices too.

Explain how responsive web design works.

Review my HTML and CSS and help me:
- Make navigation usable on small screens.
- Prevent horizontal scrolling.
- Adjust typography and spacing.
- Stack columns where necessary.
- Make buttons and links easy to use on touch screens.

Explain each media query and CSS change.
```

## Prompt 9 – Debug an issue

```text
I have a problem with my website.

What I expected:
[DESCRIBE EXPECTED BEHAVIOUR]

What actually happens:
[DESCRIBE THE PROBLEM]

Relevant code or error:
[PASTE CODE OR ERROR]

Help me identify the cause. Explain which file and code are responsible.

Do not rewrite the entire project. Give me the smallest sensible fix,
explain why it works and show me how to test it.
```

## Prompt 10 – Review the website

```text
Review my portfolio as if you were a web development mentor.

Check:
- HTML structure and semantic elements.
- CSS organisation and consistency.
- JavaScript functionality.
- Responsive behaviour.
- Accessibility.
- Navigation and links.
- Basic performance and maintainability.

Give me a prioritised list of improvements.

For each issue, explain why it matters and which file I should change.
Do not replace the whole website.
```

## Prompt 11 – Prepare for GitHub

```text
I am ready to upload my static portfolio website to GitHub.

Explain the difference between Git and GitHub.

Walk me through:
1. Creating a repository.
2. Initialising Git locally.
3. Checking the status of my files.
4. Staging and committing changes.
5. Connecting my local project to the GitHub repository.
6. Pushing my code.

Explain every command before I run it.

Also explain what should not be committed, including passwords,
API keys and private information.
```

## Prompt 12 – Deploy with Vercel

```text
My portfolio is in a GitHub repository and I want to deploy it using Vercel.

Walk me through importing the repository and deploying a static
HTML, CSS and JavaScript website. Explain how to connect a private
GitHub repository to Vercel and what permissions the integration needs.

Explain:
- What hosting means.
- What a deployment is.
- What Vercel does.
- How Vercel connects to GitHub.
- How a private source repository can still produce a public website.
- What happens when I push a new commit.
- How to troubleshoot a failed deployment.

Important: explain that keeping the repository private does not hide
HTML, CSS or JavaScript delivered to a visitor's browser. Never put
secrets in frontend code.

Do not assume that my project uses React, Next.js or another framework.
It is a plain static website.
```

## Prompt 13 – Understand optional backend features

```text
My portfolio currently works as a static website.

Explain when I might need a backend or database.

Compare:
- A static website.
- Supabase as a managed backend and database service.
- Railway as a platform for deploying backend applications.

Use an example of a portfolio with an admin dashboard and a contact
form to explain the architecture.

Explain which parts would run in the browser and which parts would
run on a server.

Do not add these services to my project unless they are actually needed.
Explain security risks such as exposing secret API keys in frontend code.
```

---

## Questions to test your understanding

Before finishing, make sure you can answer these without asking AI:

1. What is the difference between HTML, CSS and JavaScript?
2. Why is HTML described as the skeleton of a website?
3. What is the CSS box model?
4. What is the difference between a class and an ID?
5. What is a JavaScript event listener?
6. Why should you design or wireframe a website before developing it?
7. What is the difference between Git and GitHub?
8. What does a Git commit represent?
9. What does Vercel do?
10. Why does a static portfolio not require a database?
11. When might Supabase be useful?
12. Why should secret keys never be placed in public frontend code?

**Remember:** AI is your assistant and tutor. You are the developer. Understand what you build.
