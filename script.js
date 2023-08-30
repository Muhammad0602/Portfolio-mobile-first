import arrayDesktop from './info.js';

const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('.navbar > ul ');
const portfolio = document.getElementById('portfolio-nav');
const about = document.getElementById('about-nav');
const contact = document.getElementById('contact-nav');
const closeBtn = document.querySelector('#close-btn');
const toolbar = document.querySelector('.toolbar');
const popupBtn = document.querySelectorAll('.popup-btn');
const overlay = document.querySelector('#overlay');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('message');
const message = document.querySelector('small');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('contact-form');

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

const cardWorkDesktop = (items) => `
  <article class="card-work">
    <img src="socialicons/Icon.png" alt="close detail desktop" class="close-detail">
    <picture>
      <source media="(min-width:768px)" srcset="${arrayDesktop[items].url[0]}"></source>
      <img src=${arrayDesktop[items].url[1]} alt="details image" class="card-image-details">
    </picture>

    <h2 class="card-name">${arrayDesktop[items].name}</h2>
    <div class="card-button">
       <div class="btn-container">
        <a href=${arrayDesktop[items].linkVersion} class="livebtn">
          See Live
           <img src="socialicons/liveicon.svg" alt="live icon">
        </a>    
        </div>
        <div class="btn-container">
          <a href=${arrayDesktop[items].linkSource} class="sourcebtn">
            See Source
            <img src="socialicons/sourceicon.svg" alt="source icon">
          </a>  
        </div>
    </div>
  
    <ul class="mob-tags">
     ${arrayDesktop[items].tecnologies.mobile.map((tech) => `<li>${tech}</li>`).join('')}
    </ul>
    <ul class="card-tags">
      ${arrayDesktop[items].tecnologies.desktop.map((tech) => `<li>${tech}</li>`).join('')}
    </ul>
    <p class="card-description">${arrayDesktop[items].description}</p>
    <script src="index.js"></script>
  </article>
`;

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

for (let i = 0; i < popupBtn.length; i += 1) {
  popupBtn[i].addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    const cardDesktop = document.createElement('div');
    cardDesktop.innerHTML = cardWorkDesktop(i);
    document.body.append(cardDesktop);
    const closeDetail = document.querySelector('.close-detail');
    closeDetail.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.style.overflow = 'visible';
      document.body.removeChild(cardDesktop);
    });
  });
}

// Validation of the form

const re = /^[a-z0-9]+([._%+-][a-z0-9]+)*@[a-z0-9]+([.-][a-z0-9]+)*\.[a-z]{2,}$/;
form.addEventListener('submit', (e) => {
  if (re.test(email.value) && email.value === email.value.toLowerCase()) {
    message.innerText = '';
  } else {
    message.innerText = 'Your email should be in lowercase!';
    message.classList.add('error');
    submitBtn.style.marginTop = '0';
    e.preventDefault();
  }
});

//  save input values inside of an object and localStorage

const inputFieldValues = {};

form.addEventListener('input', () => {
  inputFieldValues.name = fullName.value;
  inputFieldValues.email = email.value;
  inputFieldValues.message = text.value;
  localStorage.setItem('storeValues', JSON.stringify(inputFieldValues));
});

// Taking the input values back from the localStorage

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const receivedValues = JSON.parse(localStorage.getItem('storeValues'));
    fullName.value = receivedValues.name;
    email.value = receivedValues.email;
    text.value = receivedValues.message;
  }
};

// Improving the error message by ...

email.addEventListener('keyup', () => {
  if (email.value === email.value.toLowerCase()) {
    message.classList.remove('error');
    message.innerText = '';
  } else {
    message.classList.add('error');
    message.innerText = 'Please use lowerCase letters for this input';
  }
});