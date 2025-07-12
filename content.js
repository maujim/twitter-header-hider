function setupHeaderCover() {
  // Use a more specific selector based on the HTML provided
  const header = document.querySelector('header[role="banner"]');
  if (!header) {
    return;
  }

  let cover = document.getElementById('gemini-twitter-header-cover');
  if (!cover) {
    cover = document.createElement('div');
    cover.id = 'gemini-twitter-header-cover';
    document.body.appendChild(cover);

    // When mouse enters the cover, make it transparent to reveal the header
    cover.addEventListener('mouseenter', () => {
      cover.style.opacity = '0';
      cover.style.pointerEvents = 'none';
    });

    // When mouse leaves the header area, make the cover visible again
    header.addEventListener('mouseleave', () => {
      cover.style.opacity = '1';
      cover.style.pointerEvents = 'auto';
    });
  }

  // Check if the current URL matches the specified pattern
  const urlPattern = /^https:\/\/x\.com\/[^/]+\/status\/\d+\/photo\/\d+$/;
  if (urlPattern.test(window.location.href)) {
    // If it matches, keep the header hidden
    cover.style.opacity = '0';
    cover.style.pointerEvents = 'none';
  }

  // Dynamically update cover's position, size, and color to match the header and page
  const rect = header.getBoundingClientRect();
  const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

  cover.style.top = `${rect.top}px`;
  cover.style.left = `${rect.left}px`;
  cover.style.width = `${rect.width}px`;
  cover.style.height = `${rect.height}px`;
  cover.style.backgroundColor = bodyBackgroundColor;
}

// Use a MutationObserver to handle Twitter's dynamic content loading.
// This will re-run the setup function whenever the page content changes.
const observer = new MutationObserver(setupHeaderCover);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Also run on window resize to catch layout changes
window.addEventListener('resize', setupHeaderCover);
