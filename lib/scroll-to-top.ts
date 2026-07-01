export function scrollToTop() {
  const scrollingElement = document.scrollingElement ?? document.documentElement;

  scrollingElement.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  // Fallback for environments where scrollingElement differs from window scroll.
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
