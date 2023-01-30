const hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('.navbar > ul');

hamburger.addEventListener('click', function(){
 nav.style.display = 'flex';
 nav.style.flexDirection = 'column';
 hamburger.style.display = 'none';
 document.querySelector('.menuicon').style.display = 'none';
});