export function scrollToElementWithOffset(element: HTMLElement, offset: number): void {
  const yOffset = -offset;
  const target = element;
  const y = target.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
}