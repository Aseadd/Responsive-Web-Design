// btn.addEventListener('click', () => {
//   popupMobile1.style.display = 'block';
//   let nameReplaced = document.getElementById('detail-title');
//   nameReplaced.innerHTML = Projects[0].name;
//   document.getElementsByClassName('close-popup-icon').background =
//     Projects[0].image;
//   document.getElementById('detail-block').innerHTML = Projects[1].description;
// });
// btn2.addEventListener('click', () => {
//   popupMobile2.style.display = 'block';
// });
// btn3.addEventListener('click', () => {
//   popupMobile3.style.display = 'block';
// });
// btn4.addEventListener('click', () => {
//   popupMobile4.style.display = 'block';
// });
// btn5.addEventListener('click', () => {
//   popupMobile5.style.display = 'block';
// });
// btn6.addEventListener('click', () => {
//   popupMobile6.style.display = 'block';
// });

// closePopupIcon.addEventListener('click', () => {
//   popupMobile1.style.display = 'none';
// });
// popupMobile1.addEventListener('click', () => {
//   popupMobile1.style.display = 'none';
// });
// popupMobile2.addEventListener('click', () => {
//   popupMobile2.style.display = 'none';
// });
// popupMobile3.addEventListener('click', () => {
//   popupMobile3.style.display = 'none';
// });
// popupMobile4.addEventListener('click', () => {
//   popupMobile4.style.display = 'none';
// });
// popupMobile5.addEventListener('click', () => {
//   popupMobile5.style.display = 'none';
// });
// popupMobile6.addEventListener('click', () => {
//   popupMobile6.style.display = 'none';
// });

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

const projects = [
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/Medipro.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/Medipro.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: 'Personally controlled electronic health system',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/Medipro.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
];

openModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.currentTarget.classList[0] === 'project-1') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[0].image),
        (document.getElementById('modal-title').innerHTML = projects[0].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[0].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[0].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[0].technologies[0]}</p></li>
                    <li><p>${projects[0].technologies[1]}</p></li>
                    <li><p>${projects[0].technologies[2]}</p></li>
                    <li><p>${projects[0].technologies[3]}</p></li>
                    <li><p>${projects[0].technologies[4]}</p></li>
                    <li><p>${projects[0].technologies[5]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[0].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-2') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[1].image),
        (document.getElementById('modal-title').innerHTML = projects[1].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[1].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[1].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[1].technologies[0]}</p></li>
                      <li><p>${projects[1].technologies[1]}</p></li>
                      <li><p>${projects[1].technologies[2]}</p></li>
                      <li><p>${projects[1].technologies[3]}</p></li>
                      <li><p>${projects[1].technologies[4]}</p></li>
                      <li><p>${projects[1].technologies[5]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[1].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-3') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[2].image),
        (document.getElementById('modal-title').innerHTML = projects[2].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[2].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[2].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[2].technologies[0]}</p></li>
                        <li><p>${projects[2].technologies[1]}</p></li>
                        <li><p>${projects[2].technologies[2]}</p></li>
                        <li><p>${projects[2].technologies[3]}</p></li>
                        <li><p>${projects[2].technologies[4]}</p></li>
                        <li><p>${projects[2].technologies[5]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[2].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-4') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[3].image),
        (document.getElementById('modal-title').innerHTML = projects[3].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[3].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[3].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[3].technologies[0]}</p></li>
                          <li><p>${projects[3].technologies[1]}</p></li>
                          <li><p>${projects[3].technologies[2]}</p></li>
                          <li><p>${projects[3].technologies[3]}</p></li>
                          <li><p>${projects[3].technologies[4]}</p></li>
                          <li><p>${projects[3].technologies[5]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[3].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-5') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[4].image),
        (document.getElementById('modal-title').innerHTML = projects[4].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[4].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[4].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[4].technologies[0]}</p></li>
                            <li><p>${projects[4].technologies[1]}</p></li>
                            <li><p>${projects[4].technologies[2]}</p></li>
                            <li><p>${projects[4].technologies[3]}</p></li>
                            <li><p>${projects[4].technologies[4]}</p></li>
                            <li><p>${projects[4].technologies[5]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[4].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-6') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[5].image),
        (document.getElementById('modal-title').innerHTML = projects[5].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[5].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[5].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[5].technologies[0]}</p></li>
                              <li><p>${projects[5].technologies[1]}</p></li>
                              <li><p>${projects[5].technologies[2]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[5].description)
      );
    }
  });
});

const hamb = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-item');
const headline = document.querySelector('.headline');
const welcome = document.querySelector('.logo-text');
const recentWorks = document.querySelector('.recent-works');
const about = document.querySelector('.about-me');
const contact = document.querySelector('.card2');
const footer = document.querySelector('.bottom-social-media');
const toolbar = document.querySelector('.toolbar');
const popupMobile1 = document.querySelector('#popup-mobile');
const popupMobile2 = document.querySelector('#popup-mobile2');
const popupMobile3 = document.querySelector('#popup-mobile3');
const popupMobile4 = document.querySelector('#popup-mobile4');
const popupMobile5 = document.querySelector('#popup-mobile5');
const popupMobile6 = document.querySelector('#popup-mobile6');
const popupContainer = document.getElementsByClassName('popup-container');
const popup = document.getElementsByClassName('popup');
const btn = document.getElementById('click-btn');
const btn2 = document.getElementById('click-btn2');
const btn3 = document.getElementById('click-btn3');
const btn4 = document.getElementById('click-btn4');
const btn5 = document.getElementById('click-btn5');
const btn6 = document.getElementById('click-btn6');
const closePopupIcon = document.getElementsByClassName('close-popup-icon');
function myFunction() {
  hamb.classList.toggle('active');
  navMenu.classList.toggle('active');
  // headline.style.top = '200px';
  welcome.classList.toggle('active');
  headline.classList.toggle('active');
  recentWorks.classList.toggle('active');
  about.classList.toggle('active');
  contact.classList.toggle('active');
  footer.classList.toggle('active');
  toolbar.classList.toggle('active');
  // welcome.style.color = 'white';
}
hamb.addEventListener('click', myFunction);
const navItem = document.querySelectorAll('.nav-link');

function closeMenu() {
  hamb.classList.remove('active');
  navMenu.classList.remove('active');
  welcome.classList.remove('active');
  headline.classList.remove('active');
  recentWorks.classList.remove('active');
  about.classList.remove('active');
  contact.classList.remove('active');
  footer.classList.remove('active');
  toolbar.classList.remove('active');
  headline.style.top = '92px';
  // welcome.style.color = 'black';
}

navItem.forEach((n) => n.addEventListener('click', closeMenu));
