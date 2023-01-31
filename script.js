const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('.navbar > ul ');
const portfolio = document.getElementById('portfolio-nav');
const about = document.getElementById('about-nav');
const contact = document.getElementById('contact-nav');
const closeBtn = document.querySelector('#close-btn');
const toolbar = document.querySelector('.toolbar');

hamburger.addEventListener('click', () => {
  nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  nav.style.alignItems = 'left';
  nav.style.margin = '28px';
  nav.style.listStyle = 'none';
  toolbar.style.display = 'none';
  portfolio.style.textDecoration = 'none';
  about.style.textDecoration = 'none';
  contact.style.textDecoration = 'none';
  nav.style.gap = '30px';
  closeBtn.style.display = 'flex';
  closeBtn.style.float = 'right';
  closeBtn.style.marginRight = '40px';
  nav.style.height = '100vh';
  portfolio.style.fontSize = '30px';
  about.style.fontSize = '30px';
  contact.style.fontSize = '30px';
});

closeBtn.addEventListener('click', () => {
  nav.style.display = 'none';
  closeBtn.style.display = 'none';
  toolbar.style.display = 'flex';
});

portfolio.addEventListener('click', () => {
  nav.style.display = 'none';
  closeBtn.style.display = 'none';
  toolbar.style.display = 'flex';
});

about.addEventListener('click', () => {
  nav.style.display = 'none';
  closeBtn.style.display = 'none';
  toolbar.style.display = 'flex';
});

contact.addEventListener('click', () => {
  nav.style.display = 'none';
  closeBtn.style.display = 'none';
  toolbar.style.display = 'flex';
});
