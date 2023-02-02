const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('.navbar > ul ');
const portfolio = document.getElementById('portfolio-nav');
const about = document.getElementById('about-nav');
const contact = document.getElementById('contact-nav');
const closeBtn = document.querySelector('#close-btn');
const toolbar = document.querySelector('.toolbar');
const popupBtn = document.querySelectorAll('.popup-btn');
const overlay = document.querySelector('#overlay');
const email = document.getElementById('email');
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

const arrayCards = [
  {
    id: 0,
    url: 'socialicons/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 1,
    url: 'socialicons/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 2,
    url: 'socialicons/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 3,
    url: 'socialicons/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 4,
    url: 'socialicons/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 5,
    url: 'socialicons/Snapshoot.svg',
    name: 'Keeping track of hundreds of components ',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavScript',
    },
    linkVersion: '#',
    linkSource: '#',
  },
];

const arrayDesktop = [
  {
    id: 0,
    url: 'socialicons/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavaScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

  },
  {
    id: 1,
    url: 'socialicons/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavaScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

  },
  {
    id: 2,
    url: 'socialicons/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavaScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

  },
  {
    id: 3,
    url: 'socialicons/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavaScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

  },
  {
    id: 4,
    url: 'socialicons/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavaScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

  },
  {
    id: 5,
    url: 'socialicons/Snapshoot-Portfolio.png',
    name: 'Keeping track of hundreds of components ',
    linkVersion: '#',
    linkSource: '#',
    tecnologies: {
      tech1: 'codekit',
      tech2: 'github',
      tech3: 'JavaScript',
      tech4: 'bootstrap',
      tech5: 'terminal',
      tech6: 'codepen',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

  },
];

const cardWorkMobile = (items) => `
  <article class="card-work-mobile">
    <img src="socialicons/closedetailbtn.svg" alt="close detail mobile" class="close-detail-mobile">
    <img src=${arrayCards[items].url} alt="details image" class="card-image-details-mobile">
    <h2 class="card-name-mobile">${arrayCards[items].name}</h2>
    <ul class="card-tags">
      <li>${arrayCards[items].tecnologies.tech1}</li>
      <li>${arrayCards[items].tecnologies.tech2}</li>
      <li>${arrayCards[items].tecnologies.tech3}</li>
    </ul>
    <p class="card-description-mobile">${arrayCards[items].description}</p>
    <div class="card-button-mobile">
      <a href=${arrayCards[items].linkVersion} class="livebtn-mobile">
        See Live
        <img src="socialicons/liveicon.svg" alt="live icon">
      </a>
      <a href=${arrayCards[items].linkSource} class="sourcebtn-mobile">
        See Source
        <img src="socialicons/sourceicon.svg" alt="source icon">
      </a>
    </div>
    <script src="index.js"></script>
  </article>
`;

const cardWorkDesktop = (items1) => `
  <article class="card-work-desktop">
    <img src="socialicons/Icon.png" alt="close detail desktop" class="close-detail-desktop">
    <img src=${arrayDesktop[items1].url} alt="details image" class="card-image-details-desktop">
    <div class="popup-title-desktop">
    <h2 class="card-name-desktop">${arrayDesktop[items1].name}</h2>
    <div class="card-button-desktop">
       <div class="btn-container">
        <a href=${arrayDesktop[items1].linkVersion} class="livebtn-desktop">
          See Live
           <img src="socialicons/liveicon.svg" alt="live icon">
        </a>    
        </div>
        <div class="btn-container">
          <a href=${arrayDesktop[items1].linkSource} class="sourcebtn-desktop">
            See Source
            <img src="socialicons/sourceicon.svg" alt="source icon">
          </a>  
        </div>
    </div>
    </div>
    <ul class="card-tags">
      <li>${arrayDesktop[items1].tecnologies.tech1}</li>
      <li>${arrayDesktop[items1].tecnologies.tech2}</li>
      <li>${arrayDesktop[items1].tecnologies.tech3}</li>
      <li>${arrayDesktop[items1].tecnologies.tech4}</li>
      <li>${arrayDesktop[items1].tecnologies.tech5}</li>
      <li>${arrayDesktop[items1].tecnologies.tech6}</li>
    </ul>
    <p class="card-description-desktop">${arrayDesktop[items1].description}</p>
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
    const cardWork = document.createElement('div');
    cardWork.innerHTML = cardWorkMobile(i);
    document.body.append(cardWork);
    const closeDetail = document.querySelector('.close-detail-mobile');
    closeDetail.addEventListener('click', async () => {
      overlay.classList.remove('active');
      document.body.style.overflow = 'visible';
      document.body.removeChild(cardWork);
    });
  });
}

for (let i = 0; i < popupBtn.length; i += 1) {
  popupBtn[i].addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    const cardDesktop = document.createElement('div');
    cardDesktop.innerHTML = cardWorkDesktop(i);
    document.body.append(cardDesktop);
    const closeDetail = document.querySelector('.close-detail-desktop');
    closeDetail.addEventListener('click', async () => {
      overlay.classList.remove('active');
      document.body.style.overflow = 'visible';
      document.body.removeChild(cardDesktop);
    });
  });
}

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
