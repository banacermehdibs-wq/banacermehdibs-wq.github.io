# El Mehdi — Portfolio

A clean, hand-coded portfolio site. No frameworks, no dependencies, no monthly fees.

## Structure

```
portfolio/
├── index.html        ← main page
├── style.css         ← all styles
├── script.js         ← scroll animations
├── images/           ← put your project images here
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── project-4.jpg
└── cv.pdf            ← your CV for download
```

## Adding your images

1. Create an `images/` folder in the project directory
2. Add one image per project (JPG or WebP, ideally ~1400px wide, compressed)
3. The placeholder grey boxes disappear automatically once the image loads

## Deploying to GitHub Pages (free)

1. Create a free account at github.com
2. Click **New repository** → name it `yourusername.github.io` (use your actual GitHub username)
3. Upload all files from this folder
4. Go to Settings → Pages → Source: **Deploy from branch** → branch: **main** → Save
5. Your site is live at `https://yourusername.github.io` within ~2 minutes

## Adding a custom domain (€10/year)

1. Buy a `.nl` or `.com` domain from Antagonist, TransIP, or Namecheap
2. In GitHub Pages settings, enter your domain under **Custom domain**
3. At your domain registrar, add these DNS records:

   | Type  | Name | Value               |
   |-------|------|---------------------|
   | A     | @    | 185.199.108.153     |
   | A     | @    | 185.199.109.153     |
   | A     | @    | 185.199.110.153     |
   | A     | @    | 185.199.111.153     |
   | CNAME | www  | yourusername.github.io |

4. Check **Enforce HTTPS** in GitHub Pages settings

## Updating content

Open `index.html` in any text editor and find the project cards.
Each one looks like:

```html
<article class="project project--large">
  <div class="project-img-wrap">
    <img src="images/project-1.jpg" alt="..." />
  </div>
  <div class="project-info">
    <p class="project-tag">Category · Year</p>
    <h2 class="project-title">Project Name</h2>
    <p class="project-desc">Description...</p>
    <a class="project-link" href="project-page.html">View project →</a>
  </div>
</article>
```

Change the text and image path as needed, then re-upload to GitHub.

## Customising your email / links

In `index.html`, search for:
- `hello@elmehdi.nl` → replace with your real email
- `https://linkedin.com/in/elmehdi` → replace with your LinkedIn URL
- `cv.pdf` → replace with your actual CV filename

## Colours (in style.css)

| Variable   | Value     | Used for              |
|------------|-----------|----------------------|
| `--cream`  | #F7F5F0   | background           |
| `--ink`    | #1A1A18   | text, about section  |
| `--clay`   | #C4683A   | accents, links       |
| `--sage`   | #8A9E8C   | eyebrow labels       |
| `--mid`    | #6B6860   | body text, subtitles |
