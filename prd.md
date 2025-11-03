1. Overview

This project aims to create a personal portfolio website that presents the author as a Software Engineer specialized in GTM Engineering, productivity, and scalable systems that help teams grow revenue efficiently.

The website must be extremely simple, monochrome (black & white), and include an optional dark mode toggle.
Design priority: clarity, minimalism, and timeless professionalism.

The site will be multi-section, single-level navigation (Home, Blog, Contact).
Home and Contact will remain on one static, non-scrollable page; Blog will be a simple list of articles (no animations, no complex layouts).

2. Goals & Non-Goals
   Goals

Present a clear, professional summary of who you are and what you do.

Communicate technical skills, achievements, and selected projects.

Provide a place to publish short blog posts, thoughts, or technical notes.

Include minimal navigation (Home, Blog, Contact).

Keep design simple, text-based, and fully black & white.

Offer dark mode toggle.

Non-Goals

No graphic elements, photos, or portfolio galleries.

No animations, transitions, or fancy typography.

No CMS integration — blog content can be static markdown or hardcoded.

No infinite scroll or pagination for the blog (list limited to a few posts).

3. Target Audience

Hiring managers and recruiters looking for software/GTM engineers.

Peers or readers interested in engineering productivity, automation, and scaling strategies.

4. Site Architecture
   Page Description
   Home Static single-viewport section with all key personal info.
   Blog Minimal post list with links to each article.
   Contact Simple section with email + links. Can be an anchor within Home.
5. Navigation Bar

Fixed at the top-left.

Menu Items:

Home

Blog

Contact

Text only; underline on hover (no color change, no animation).

Same layout and colors in both light and dark mode.

6. Page Details
   Home Page

Everything visible on one screen, left-aligned.

Sections:

Header

Name (large, bold, black)

Title (underlined, smaller)

One-liner tagline
Example: “Software & GTM Engineer helping teams scale efficiently through automation.”

Experience & Achievements

3–5 short bullet points.

• Built internal platforms saving 30% in dev time.  
• Automated GTM workflows reducing cost per lead by 60%.  
• Designed scalable APIs for cross-team integrations.

Technologies

Inline text list:
Tech: Python, FastAPI, TypeScript, React, PostgreSQL, AWS

Projects

1–2 concise items, 1–2 lines each.
Example:
DataSyncer – automated sync between CRM and internal analytics.
DeployTracker – small internal CI/CD dashboard for teams.

Contact (anchor section)

Text: “Let’s connect.”

Clickable email (mailto:).

Optionally GitHub / LinkedIn small icons (simple SVG).

Blog Page

A separate minimal page reachable from the navbar.

Layout

Title: “Blog” in bold black text.

Left-aligned column of post titles (max width 600px).

Each post title links to a static post page.

Each post preview shows:

Post title (bold, underlined on hover)

Date

1–2 sentence excerpt

Example:

Blog

• How Automation Changed My Workflow  
 Sep 2025 — A short reflection on building internal tools that replaced manual tasks.

• GTM Meets Engineering  
 Aug 2025 — Exploring how engineers can drive GTM efficiency with automation and AI tools.

Post Page

Simple title, date, and plain text body.

Same black/white scheme.

Left-aligned, readable text (max width 700px).

“← Back to Blog” link at top-left.

7. Design Specifications
   Element Specification
   Layout Minimal, text-based, generous white space
   Color Palette #000 (black), #FFF (white), #777 (gray)
   Font System or user-chosen sans-serif
   Font Size Hierarchy Name: 36–48px, Section Titles: 20–24px, Body: 14–16px
   Alignment Left-aligned only
   Dark Mode Toggle reverses color scheme (background ↔ text)
   Spacing Clear separation between sections, no visual clutter
   Interactions Hover underline only; no color or animation transitions
8. Technical Requirements

Tech Stack:

HTML/CSS/JS or React + Vite

Static Deployment: GitHub Pages / Vercel / Netlify

Dark Mode: CSS variables + JS toggle

Blog:

Can use Markdown files (if static generator like Astro or Next.js)

Or hardcoded HTML for simplicity

Performance:

Lightweight assets (<100 KB)

No images or external fonts

Accessibility:

Semantic tags (<header>, <nav>, <main>, <section>, <footer>)

Sufficient contrast ratios

SEO:

Per-page meta titles and descriptions

Example Home title: “[Your Name] – Software Engineer & GTM Engineer”

Blog post titles dynamic in HTML head

9. Future Enhancements (Optional)

Add RSS feed for blog posts.

Add search or tags for blog filtering.

Add analytics (Plausible / Google Analytics).

Add downloadable CV link.

Add simple contact form instead of mailto link.
