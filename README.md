# ParthEdits Portfolio (High-Performance Modern Web Portfolio)

A modern, ultra-responsive, high-converting video editor & content creator portfolio inspired by and elevating the [Parthedits Canva Portfolio](https://iamparthedits.my.canva.site/).

Unlike static Canva slide decks which break on mobile and lag with multiple heavy iframes, this portfolio is built with modern HTML5, Tailwind CSS, Google Fonts (`Anton`, `Bebas Neue`, `Plus Jakarta Sans`), and an interactive lightweight vanilla JavaScript engine.

---

## ✨ Features & Sections

1. **Hero / Cover Section**:
   - Signature 3D arched uppercase `PORTFOLIO` typography with layered red ambient lighting.
   - 3D floating Adobe software badges (After Effects, Premiere Pro, Photoshop, Audition).
   - Live availability status pill (`Available for Projects & Freelance Collaborations`).
   - Key credibility metrics (`4+ Years`, `100M+ Views`, `250+ Projects`, `4K Quality`).

2. **About Me & Arsenal**:
   - Creator profile showcase with high-res cutouts.
   - Punchy, high-retention biography.
   - 4-card Software & Tools breakdown with skill badges.
   - 6 Core Storytelling & Editing competencies.
   - 1-click email copy button with toast notification & direct Instagram/YouTube links.

3. **Journey & Milestones Timeline**:
   - Interactive career timeline tracking `2022` to `2025` (from Gaming Trailer Editor to working with the Aditya Birla Group).
   - Fast Table of Contents jump cards.

4. **Client's Work (Vertical Shorts / Reels)**:
   - 9:16 smartphone-ratio video cards with YouTube Shorts integration.
   - Click-to-play responsive modal player with zero page lag.

5. **Personal Work (Marvel & Cinematic Edits)**:
   - Viral Marvel and movie edits showcase with custom superhero neon crimson glow.

6. **Long-Form Productions & Gaming Trailers (16:9)**:
   - Cinema-grade 16:9 widescreen showcase for high-octane gaming trailers and multi-cam podcast productions.

7. **More Creative Reels**:
   - Extended grid of vertical creative shorts.

8. **Thumbnail Mastery Gallery**:
   - Commercial / Client Thumbnails.
   - Gaming & Esports Thumbnails.
   - Concept Art & Poster designs.
   - Full-screen image lightbox on click with zoom and category details.

9. **Thanks For Watching / Contact Outro**:
   - High-impact closing section.
   - Direct email mailto link & 1-click clipboard copy.
   - Social channels (`@_parthedits.___`, `Parthedits`).

---

## 🚀 How to Run and View

### Option 1: Direct Double-Click
Simply double-click [`index.html`](index.html) in Windows File Explorer to open it directly in Google Chrome, Microsoft Edge, Brave, or Firefox.

### Option 2: Local HTTP Server (PowerShell)
You can test locally with any simple static server:
```powershell
# Using Python (if installed):
python -m http.server 3000

# Using Node (if installed):
npx serve .
```

---

## 🛠️ How to Customize with Your Own Name & Content

All content is cleanly organized in [`portfolio-data.js`](portfolio-data.js). You can easily update:

- **Your Name / Brand**: Change `name`, `brandName`, `title`, and `tagline`.
- **Your Bio & Metrics**: Adjust `experienceYears`, `viewsGenerated`, and `bio` paragraphs.
- **Your Socials & Email**: Update `contacts.email`, `contacts.instagram.url`, and `contacts.youtube.url`.
- **Your Videos**: Replace YouTube video IDs (`id: "3wFpve4maHw"`) with your own YouTube Short or Video IDs.
- **Your Thumbnails**: Drop your own thumbnail images into `assets/clean/` and update the paths in `thumbnails.client` or `thumbnails.gaming`.

---

## 📁 Project Structure

```
PORTFOLIO/
├── index.html            # Main portfolio markup & layout
├── styles.css            # Custom animations, glows, fonts & responsive rules
├── app.js                # Video player modal, thumbnail lightbox, copy actions
├── portfolio-data.js     # Centralized configuration data for easy personalization
├── assets/
│   ├── clean/            # Semantic media assets (badges, icons, thumbnails, cutouts)
│   └── media/            # Original high-res assets downloaded from reference
└── README.md             # Documentation
```
