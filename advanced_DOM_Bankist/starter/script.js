'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//adding open modal to upper button and button below the page
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//adding close modal on the document and esc button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for impoved functionality and analytics. <button class="btn btn--close-cookie">Got it! </button> '

header.append(message)

document.querySelector('.btn--close-cookie').
addEventListener('click', function() {
  message.remove();
  // message.parentElement.removeChild(message);
})

message.style.backgroundColor = '#37383d'
message.style.width = '120%'
console.log();

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({behavior: 'smooth'})
})





//learning material

  //________SCROLING________
  //from btnScrollTo event listener
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
  // console.log('heigh/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);
  //scrolling
  // window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset)
  //adding smooth animation
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'

  // });
  //same as 2 above lol, can not work in older browsers tho, note.

  //______EVENTS_______
  const h1 = document.querySelector('h1')
  //delete event
  //can remove it if moved to the separate function
  const logH1 = function(e){
    console.log('AddEventListener: Mouse entered');
    // h1.removeEventListener('mouseenter', logH1)
  }
  h1.addEventListener('mouseenter', logH1)
  // 
  setTimeout(() => h1.removeEventListener('mouseenter', logH1), 3000);
//can do the same with attr function
  // h1.onmouseenter = function(e){
  //   console.log('AddEventListener: Mouse entered hiya');
    
  // }


