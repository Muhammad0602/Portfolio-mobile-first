const hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('.navbar > ul ');
const portfolio = document.getElementById('portfolio-nav')
const about = document.getElementById('about-nav')
const contact = document.getElementById('contact-nav')



hamburger.addEventListener('click', function(){
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'left';
    nav.style.margin = '28px';
    nav.style.listStyle = 'none';
    hamburger.style.display = 'none';
    document.querySelector('.menuicon').style.display = 'none';
    portfolio.style.textDecoration = 'none';
    about.style.textDecoration = 'none';
    contact.style.textDecoration = 'none';
    nav.style.gap = '40px';
});