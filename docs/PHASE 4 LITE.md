# PHASE 4 LITE: Pre-Demo UX Essentials
## High-Impact Quick Wins Before Client Demo

**Purpose**: Critical visual and performance improvements that clients will immediately notice during demo.

**Estimated Time**: 2-3 hours total

---

## 1. HERO SECTION OPTIMIZATION (Highest Impact)

### Hero Image/Video
- [ ] **Hero Image Size**: Must be <100KB after optimization
  - Resize to actual display dimensions (1200px width maximum)
  - Use WebP format with AVIF fallback
  - Tools: Use Astro's `<Image>` component for automatic optimization

- [ ] **Hero Video Handling** (if applicable)
  ```
  RECOMMENDED APPROACH:
  - Step 1: Compress video to <10-15MB (see section 9 below for compression guide)
  - Step 2: For videos <10MB - include in build OR use Cloudflare R2 (free tier)
  - Step 3: For videos >10MB - compress further OR use Cloudflare R2 (free tier: 10GB storage)
  - DO NOT include uncompressed videos in build (bloats deployment)

  Quick Setup:
  1. Compress video using FFmpeg (see detailed guide below)
  2. If using R2: Upload to Cloudflare R2 bucket, use public URL
  3. Add poster image (hero still frame) for instant display
  4. Attributes: autoplay muted loop playsinline
  ```

- [ ] **Critical Loading Attributes**
  ```astro
  <!-- For hero image (above fold) -->
  <Image
    src={heroImage}
    alt="Descriptive alt text"
    width={1200}
    height={630}
    loading="eager"
    fetchpriority="high"
  />

  <!-- For hero video -->
  <video
    autoplay
    muted
    loop
    playsinline
    poster="/hero-poster.webp"
  >
    <source src="https://your-r2-url.com/hero.mp4" type="video/mp4">
  </video>
  ```

- [ ] **Prevent Layout Shift**: Set explicit width/height attributes on ALL images

---

## 2. IMAGE OPTIMIZATION ESSENTIALS

### All Images Must Have:
- [ ] **Descriptive Alt Text** (shows professionalism)
  - Formula: [Action/Description] + [Subject] + [Context]
  - ✅ Good: "Modern restaurant interior with natural lighting in Amsterdam"
  - ❌ Bad: "IMG_1234" or empty

- [ ] **Proper Dimensions**
  - Every `<Image>` component needs explicit `width` and `height`
  - Prevents content jumping during load (bad UX)

- [ ] **Lazy Loading Strategy**
  ```astro
  <!-- Above-fold images (hero, logo) -->
  <Image loading="eager" fetchpriority="high" />

  <!-- Below-fold images (everything else) -->
  <Image loading="lazy" decoding="async" />
  ```

### Image Storage
- [ ] Store original images in `src/assets/` (NOT `public/`)
  - Astro auto-optimizes during build
  - Generates WebP/AVIF formats automatically
  - Creates responsive sizes

### Quick Image Compression Tools (Free)

#### Option 1: Sharp CLI (Batch Processing)
```bash
# Install globally
npm install -g sharp-cli

# Convert folder of images to WebP (85% quality)
sharp-cli -i input/ -o optimized/ -f webp -q 85

# Resize all images to max width 1920px
sharp-cli -i input/ -o optimized/ --width 1920
```

#### Option 2: Online Tools (No Installation)
- **Squoosh.app** - Google's free image compressor (best quality/size ratio)
- **TinyPNG.com** - PNG/JPG compression (free tier: 20 images/month)
- **CompressJPEG.com** - Bulk compression, no limits

#### Option 3: Astro's Built-in Optimization (Recommended)
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg'; // Store in src/assets/
---

<!-- Astro automatically optimizes to WebP/AVIF -->
<Image src={heroImage} alt="Description" width={1920} height={1080} />
```
Astro handles everything automatically - no manual compression needed!

---

## 3. FONTS & TEXT RENDERING

- [ ] **Use System Fonts First** (fastest option)
  ```css
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  ```

- [ ] **If Custom Fonts Needed**:
  ```html
  <!-- In <head> -->
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  ```
  - Use `font-display: swap` in CSS
  - Limit to 1-2 font families maximum
  - Only load weights you actually use

---

## 4. LAYOUT STABILITY (Prevent Content Jumps)

- [ ] **Reserve Space for Dynamic Content**
  - Maps/iframes: Set `min-height` in CSS
  - Image containers: Use `aspect-ratio` utility
  - Contact forms: Fixed height container

- [ ] **Video Containers**
  ```css
  .video-container {
    aspect-ratio: 16 / 9;
    width: 100%;
  }
  ```

---

## 5. MOBILE RESPONSIVENESS (Critical for Demo)

### Quick Mobile Checks (Chrome DevTools - Ctrl+Shift+M)
- [ ] **Test at These Sizes**:
  - iPhone SE (375px) - smallest common size
  - iPhone 12 Pro (390px) - most common
  - iPad (768px) - tablet

- [ ] **Visual Checks**:
  - [ ] No horizontal scrolling
  - [ ] Text readable without zoom (minimum 16px)
  - [ ] Buttons minimum 48x48px (tap-friendly)
  - [ ] Images scale properly
  - [ ] Navigation menu works (hamburger functional)

- [ ] **Responsive Images**
  ```astro
  <Image
    src={image}
    widths={[375, 768, 1200]}
    sizes="(max-width: 768px) 100vw, 1200px"
  />
  ```

---

## 6. PERFORMANCE QUICK WINS

### Largest Contentful Paint (LCP) - Target <2.5s
- [ ] Optimize hero image/video (see section 1)
- [ ] Inline critical CSS (Astro does this automatically with `build.inlineStylesheets: 'auto'`)
- [ ] Defer non-critical JavaScript

### Cumulative Layout Shift (CLS) - Target <0.1
- [ ] All images have width/height
- [ ] No content inserted above fold after load
- [ ] Reserve space for ads/widgets/maps

### Interaction to Next Paint (INP) - Target <200ms
- [ ] Use Astro islands: only hydrate interactive components
  ```astro
  <!-- Contact form: load only when visible -->
  <ContactForm client:visible />

  <!-- Critical interaction: load immediately -->
  <MobileMenu client:load />

  <!-- Secondary features: load when idle -->
  <ReviewWidget client:idle />
  ```

---

## 7. VISUAL POLISH CHECKLIST

- [ ] **Logo**:
  - High-resolution (300x300px minimum)
  - Transparent background (PNG or SVG)
  - Descriptive alt text with company name

- [ ] **Favicon**:
  - Modern sizes: 16x16, 32x32, 180x180, 192x192, 512x512
  - Generator: https://realfavicongenerator.net/

- [ ] **Color Contrast** (shows attention to detail):
  - Minimum 4.5:1 for body text
  - Minimum 3:1 for large text (18px+)
  - Test: Chrome DevTools → Inspect element → Contrast ratio

- [ ] **Loading States**:
  - Forms show "Sending..." when submitted
  - Buttons show hover/active states
  - Links have visible focus indicators

---

## 8. FUNCTIONAL DEMO ESSENTIALS

### Forms (if present)
- [ ] Contact form actually works
- [ ] Validation shows helpful error messages
- [ ] Success message displays after submission
- [ ] Test submission before demo

### Navigation
- [ ] All menu links work
- [ ] Mobile menu opens/closes smoothly
- [ ] Active page highlighted in menu
- [ ] Logo links to homepage

### Contact Information
- [ ] Phone number is clickable (tel: link)
- [ ] Email is clickable (mailto: link)
- [ ] Address links to Google Maps
- [ ] All information accurate and visible

---

## 9. CLOUDFLARE ASSETS SETUP (Video/Large Media)

### When to Use Cloudflare R2 vs Build
```
INCLUDE IN BUILD:
✅ Small images (<500KB total)
✅ Logos, icons, thumbnails
✅ Background images
✅ Content optimized with Astro Image

USE CLOUDFLARE R2:
✅ Videos (any size)
✅ Large PDFs or downloads
✅ High-res photo galleries
✅ Files changed frequently
```

### Quick R2 Setup for Videos
1. **Cloudflare Dashboard** → R2 → Create bucket
2. Upload video files
3. Set bucket to **Public** (or use custom domain)
4. Copy public URL
5. Use in video tag:
   ```html
   <video src="https://pub-xxxxx.r2.dev/hero-video.mp4" />
   ```

**Cost**: Free for first 10GB storage + 10M Class A operations/month

---

## 10. PRE-DEMO TESTING CHECKLIST (15 minutes)

### Quick Performance Test
- [ ] Visit https://pagespeed.web.dev/
- [ ] Test homepage (mobile)
- [ ] Target scores:
  - Performance: ≥70 (acceptable for demo)
  - Accessibility: ≥90
  - Best Practices: ≥90

### Visual Regression Test
- [ ] Open in Chrome DevTools mobile view
- [ ] Scroll through entire page
- [ ] Check for:
  - Images load correctly
  - No layout jumping
  - Text readable
  - Buttons work
  - Forms functional

### Browser Testing
- [ ] Test in Chrome (primary)
- [ ] Quick check in Safari (if Mac available)
- [ ] Quick check in mobile browser

---

## PRIORITY DECISION MATRIX

| Task | Impact | Effort | Priority |
|------|--------|--------|----------|
| Hero image optimization | Critical | 15 min | **DO FIRST** |
| Hero video compression | Critical | 15 min | **DO FIRST** |
| All images have alt text | High | 20 min | **DO FIRST** |
| Mobile responsive check | Critical | 15 min | **DO FIRST** |
| Image dimensions set | High | 30 min | **DO FIRST** |
| Font optimization | Medium | 10 min | Do if time |
| Video hosting setup (R2) | Low | 10 min | Do if time |
| Color contrast check | Low | 5 min | Do if time |
| Favicon setup | Low | 5 min | Do if time |

---

## AUTONOMOUS IMPLEMENTATION NOTES

**You can fix these automatically**:
- Adding width/height to images
- Converting images to WebP
- Adding lazy loading attributes
- Setting up image optimization
- Creating responsive image sizes
- Adding alt text (with context from page)
- Optimizing hero image
- Compressing videos with FFmpeg
- Setting up font preloading

**You should ask about**:
- Video hosting preference (include in build vs R2)
- Target video file size (balance quality vs size)
- Brand colors for contrast checking
- Which images are most important (hero priority)
- Custom font requirements vs system fonts

---

## QUICK WIN SCRIPT

```bash
# Run before demo to catch issues
npm run build
npm run preview

# Open in browser, test:
# - Mobile view (DevTools)
# - All links work
# - Images load
# - Forms submit
# - No console errors (F12)
```

---

## VIDEO COMPRESSION GUIDE (100% Free Solutions)

### Step 1: Install FFmpeg (Free, Open Source)

**Windows:**
```bash
# Option 1: Using Chocolatey
choco install ffmpeg

# Option 2: Download directly
# Visit: https://ffmpeg.org/download.html
```

**Mac:**
```bash
brew install ffmpeg
```

**Linux:**
```bash
sudo apt install ffmpeg
```

### Step 2: Check Your Video Specifications

```bash
# See current video details (size, resolution, duration, bitrate)
ffmpeg -i your-video.mp4
```

**Example output:**
```
Duration: 00:00:47.79
Stream #0:0: Video: h264, 2560x1448, 3103 kb/s, 25 fps
Size: 19MB
```

### Step 3: Compress Video - Choose Your Strategy

#### Strategy A: Standard Compression (Maintains Sharpness)
**Use when**: Original video is sharp, you want to keep quality

```bash
# Reduce to 1080p, remove audio (for background videos)
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -vf "scale=1920:1080" -an output.mp4
```

**Expected reduction**: 40-50% smaller
**Quality**: Excellent, visually identical to original

#### Strategy B: Aggressive Compression (For Larger Videos)
**Use when**: Video is >15MB after Strategy A

```bash
# Higher compression (CRF 26), 1080p, no audio
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 26 -vf "scale=1920:1080" -an output.mp4
```

**Expected reduction**: 60-70% smaller
**Quality**: Very good, minor quality loss (barely noticeable)

#### Strategy C: Maximum Compression (For Very Long Videos)
**Use when**: Video is still >15MB, or you need smallest possible size

```bash
# 720p, CRF 28, reduced framerate
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 28 -vf "scale=1280:720" -r 24 -an output.mp4
```

**Expected reduction**: 75-85% smaller
**Quality**: Good for web, noticeable on large screens

### Step 4: Advanced Optimizations (Optional)

#### Keep Audio (if needed)
```bash
# Add back compressed audio
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -vf "scale=1920:1080" -c:a aac -b:a 96k output.mp4
```

#### Reduce Frame Rate (saves ~30%)
```bash
# 24 FPS (cinematic) instead of 30 or 60
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -r 24 -an output.mp4
```

#### Trim Video Length (saves proportionally)
```bash
# Only use first 20 seconds (for looping background)
ffmpeg -i input.mp4 -ss 00:00:00 -t 00:00:20 -c:v libx264 -preset slow -crf 23 -vf "scale=1920:1080" -an output.mp4
```

#### H.265/HEVC (50% smaller, newer codec)
```bash
# Better compression, broad 2026 browser support
ffmpeg -i input.mp4 -c:v libx265 -preset medium -crf 28 -vf "scale=1920:1080" -an output.mp4
```

⚠️ Note: H.265 has excellent browser support in 2026, but H.264 is still safest for maximum compatibility.

### Step 5: User-Friendly Alternative - HandBrake (Free GUI)

**Download**: https://handbrake.fr/

**Quick Settings for Web Video**:
1. Open video in HandBrake
2. **Preset**: "Web" → "Gmail Large 3 Minutes 720p30"
3. **Video tab**:
   - Quality: RF 22-24 (lower = better quality)
   - Encoder: H.264 or H.265
   - Framerate: 24 or 30 FPS
4. **Dimensions**: 1920x1080 or 1280x720
5. **Audio**: AAC, 96-128 kbps (or remove for background video)
6. Click "Start Encode"

### Real-World Example

**Original video**: 19MB, 2560x1448, 47 seconds
**After compression** (Strategy B): 11MB, 1920x1080, still sharp ✅

```bash
ffmpeg -i hero-original.mp4 -c:v libx264 -preset slow -crf 26 -vf "scale=1920:1080" -an hero-optimized.mp4

# Result: 19MB → 11MB (42% reduction)
# Quality: Excellent, maintains sharpness
# Ready for web deployment
```

### Where to Host Your Optimized Video

#### Option 1: Include in Build (Simplest)
✅ **When to use**: Video <10MB after compression
✅ **Benefits**: No external dependencies, works offline, simple deployment
❌ **Drawback**: Increases build size

```astro
<!-- Video in public/videos/ folder -->
<video autoplay muted loop playsinline poster="/poster.webp">
  <source src="/videos/hero-optimized.mp4" type="video/mp4">
</video>
```

#### Option 2: Cloudflare R2 (Free Tier)
✅ **When to use**: Video 10-100MB, or frequently changed
✅ **Benefits**: Free 10GB storage, fast CDN delivery, keeps build lean
❌ **Drawback**: External dependency, 5-minute setup

**Setup**:
1. Cloudflare Dashboard → R2 → Create bucket
2. Upload compressed video
3. Enable public access (or use custom domain)
4. Copy URL: `https://pub-xxxxx.r2.dev/video.mp4`

```html
<video autoplay muted loop playsinline poster="/poster.webp">
  <source src="https://pub-xxxxx.r2.dev/hero-optimized.mp4" type="video/mp4">
</video>
```

**Cost**: $0/month (free tier: 10GB storage + 1M requests)

### Compression Parameter Cheat Sheet

| Parameter | What It Does | Values |
|-----------|-------------|--------|
| `-crf` | Quality (lower = better) | 18-28 (23 = default, 26 = aggressive) |
| `-preset` | Speed vs efficiency | ultrafast, fast, medium, **slow** (best), veryslow |
| `-vf "scale=WxH"` | Resize video | 1920:1080, 1280:720, -2 (auto height) |
| `-r` | Frame rate | 24, 30, 60 |
| `-an` | Remove audio | (no value needed) |
| `-c:a aac -b:a 96k` | Compress audio | 64k, 96k, 128k |

### Quick Troubleshooting

**Video too large after compression?**
1. Increase CRF value (23 → 26 → 28)
2. Reduce resolution (1080p → 720p)
3. Lower framerate (30 → 24)
4. Trim duration if looping

**Video looks blurry?**
1. Decrease CRF value (26 → 23 → 20)
2. Use slower preset (`-preset slow` or `veryslow`)
3. Check if original was already low quality

**FFmpeg command fails?**
1. Make sure FFmpeg is installed: `ffmpeg -version`
2. Check file path has no special characters
3. Use quotes around file paths with spaces

---

**Document Version**: 1.0 - Pre-Demo Essentials
**Last Updated**: January 18, 2026
**Estimated Total Time**: 2-3 hours for complete implementation
