/**
 * GSAP Effects — Dynamic Import (DESIGN.md §11)
 * Animation level: 6/10 — GSAP justified (3+ exclusive effects)
 *
 * Effects:
 * 1. Portfolio grid stagger (ScrollTrigger, 100ms per card)
 * 2. Hero headline word split (SplitText, 1.4s, 100ms/word)
 *
 * Performance:
 * - Dynamic import — NOT in initial bundle
 * - scrub: 1 (smoothed, not raw)
 * - Max 15 ScrollTrigger instances
 * - Respects prefers-reduced-motion
 */

async function initGSAP(): Promise<void> {
  if (typeof window === 'undefined') return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);

  // Project easing equivalent for GSAP
  // CSS: cubic-bezier(0.83, 0, 0.17, 1) → GSAP CustomEase or power4.inOut approximation
  const ease = 'power4.inOut';

  // 1. Portfolio grid stagger — cards fade up with scale
  const portfolioCards = document.querySelectorAll('.pcard');
  if (portfolioCards.length > 0) {
    gsap.set(portfolioCards, { opacity: 0, y: 20, scale: 0.96 });
    ScrollTrigger.batch(portfolioCards, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease,
          stagger: 0.1,
          overwrite: true,
        });
      },
      start: 'top 88%',
      once: true,
    });
  }

  // 2. Hero headline word split — words fade up sequentially
  const heroH1 = document.querySelector('.hero-h1');
  if (heroH1) {
    // Manual word split (SplitText is a premium GSAP plugin — use manual approach)
    // Regex accounts for Astro's data attributes on <br> elements (dev + prod)
    const text = heroH1.innerHTML;
    const words = text.split(/(\s+|<br[^>]*\/?>)/);
    heroH1.innerHTML = words
      .map((word) => {
        if (word.match(/^\s+$/) || word.match(/<br[^>]*\/?>/)) return word;
        return `<span class="word-split" style="display:inline-block;overflow:hidden"><span class="word-inner" style="display:inline-block">${word}</span></span>`;
      })
      .join('');

    const wordInners = heroH1.querySelectorAll('.word-inner');
    gsap.set(wordInners, { y: '110%', opacity: 0 });

    // Delay to let hero-enter animation complete first (0.35s delay + 1.6s duration)
    gsap.to(wordInners, {
      y: '0%',
      opacity: 1,
      duration: 1.4,
      ease,
      stagger: 0.1,
      delay: 0.5,
    });
  }

  // 3. Process steps stagger (if on page)
  const processSteps = document.querySelectorAll('.step');
  if (processSteps.length > 0) {
    gsap.set(processSteps, { opacity: 0, y: 24 });
    ScrollTrigger.batch(processSteps, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease,
          stagger: 0.12,
          overwrite: true,
        });
      },
      start: 'top 85%',
      once: true,
    });
  }
}

// Initialize on load and after page transitions
initGSAP();
document.addEventListener('astro:after-swap', initGSAP);
