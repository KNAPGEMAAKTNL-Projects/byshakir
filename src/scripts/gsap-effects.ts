/**
 * GSAP Effects — Loaded via dynamic import + IntersectionObserver (Layout.astro)
 * Animation level: 6/10 — GSAP justified (3+ exclusive effects)
 *
 * Effects:
 * 1. Portfolio grid stagger (ScrollTrigger, 100ms per card)
 * 2. Hero headline word split (manual, 1.4s, 100ms/word)
 * 3. Process steps stagger (ScrollTrigger, 120ms per step)
 *
 * Performance:
 * - Exported function — NOT self-invoking. Caller (Layout.astro) decides when to run.
 * - GSAP itself dynamically imported here — only loads when this module is called.
 * - Respects prefers-reduced-motion.
 */

export async function initGSAP(): Promise<void> {
  if (typeof window === 'undefined') return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);

  // Project easing equivalent for GSAP
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
  // LCP rule: opacity min 0.1 (never 0) so the element registers as painted
  const heroH1 = document.querySelector('.hero-h1');
  if (heroH1) {
    const text = heroH1.innerHTML;
    const words = text.split(/(\s+|<br[^>]*\/?>)/);
    heroH1.innerHTML = words
      .map((word) => {
        if (word.match(/^\s+$/) || word.match(/<br[^>]*\/?>/)) return word;
        return `<span class="word-split" style="display:inline-block;overflow:hidden;padding-bottom:0.25em;margin-bottom:-0.25em"><span class="word-inner" style="display:inline-block">${word}</span></span>`;
      })
      .join('');

    const wordInners = heroH1.querySelectorAll('.word-inner');
    gsap.set(wordInners, { y: '110%', opacity: 0.1 }); // min 0.1 — LCP must see element painted

    gsap.to(wordInners, {
      y: '0%',
      opacity: 1,
      duration: 1.4,
      ease,
      stagger: 0.1,
      delay: 0.5,
    });
  }

  // 3. Process steps stagger
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
