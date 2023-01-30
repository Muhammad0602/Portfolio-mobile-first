const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('.navbar > ul ');
const portfolio = document.getElementById('portfolio-nav');
const about = document.getElementById('about-nav');
const contact = document.getElementById('contact-nav');
const closeBtn = document.querySelector('#close-btn');
const toolbar = document.querySelector('.toolbar');

hamburger.addEventListener('click', function () {
  nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  nav.style.alignItems = 'left';
  nav.style.margin = '28px';
  nav.style.listStyle = 'none';
  toolbar.style.display = 'none';  
  portfolio.style.textDecoration = 'none';
  about.style.textDecoration = 'none';
  contact.style.textDecoration = 'none';
  nav.style.gap = '40px';
  closeBtn.hidden = false;
  closeBtn.style.float = 'right';
  closeBtn.style.marginRight = '40px';
});

closeBtn.addEventListener('click', btn = () => {
  nav.style.display = 'none';
  closeBtn.style.display = 'none';
  toolbar.style.display = 'flex';
});

portfolio.addEventListener('click', function () {
  nav.style.display = 'none';
  closeBtn.style.display = 'none';
  toolbar.style.display = 'flex';
});

about.addEventListener('click', function () {
  nav.style.display = 'none';
  closeBtn.style.display = 'none';
  toolbar.style.display = 'flex';
});

contact.addEventListener('click', function () {
  nav.style.display = 'none';
  closeBtn.style.display = 'none';
  toolbar.style.display = 'flex';
});
