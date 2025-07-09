
const header = document.querySelector('header');

if (header) {
  const cover = document.createElement('div');
  cover.classList.add('header-cover');
  document.body.appendChild(cover);

  cover.addEventListener('mouseover', () => {
    header.style.display = 'block';
    cover.style.display = 'none';
  });

  header.addEventListener('mouseleave', () => {
    header.style.display = 'none';
    cover.style.display = 'block';
  });

  header.style.display = 'none';
}
