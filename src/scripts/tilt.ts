/**
 * Image Tilt — 3D Perspective ±6° (DESIGN.md §10 Signature Interaction)
 * Applied to: portfolio project cards only (data-tilt attribute)
 * Max rotation: ±6° (subtle, not a gaming card flip)
 * Scale: 1.02× (lifts slightly)
 * Disabled: touch devices, prefers-reduced-motion, <768px
 * ~3.5KB vanilla JS, loaded client:idle
 */

function initTilt(): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasHover = window.matchMedia('(hover: hover)').matches;
  const isDesktop = window.innerWidth >= 768;

  if (prefersReduced || !hasHover || !isDesktop) return;

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform =
        `perspective(1000px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

// Initialize on DOM ready and after page transitions
initTilt();
document.addEventListener('astro:after-swap', initTilt);
