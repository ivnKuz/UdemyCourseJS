'use strict';
//_______PROJECT CODE_________
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
//////////////////
//button scrolling & "cookies"

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


///////////////////////
//Page navigation
//this technique is fine for few elements, but if we would use for each and add events to a lot of elements that would affect 
// performance
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     //getting the attribute ancor from html
//     const id = this.getAttribute('href');
//     //passing it as id to add smooth scrolling
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

// 1. Add event listener to common parent element
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault()
  console.log(e.target);
  //matching strategy
  //ignore clicks that do not come from one of the links
  if(e.target.classList.contains('nav__link')){
    console.log('link');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

//////////
//tabbed component
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', function(e){
  //selects the closest element with .operation_tab
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //check if we clicked the button or not with class .operations__tab
  if(!clicked) return;
  //active tab
  //remove active classes
  tabs.forEach(tabs => tabs.classList.remove('operations__tab--active'))
  tabsContent.forEach(content => content.classList.remove('operations__content--active'))
  //add active classes
  clicked.classList.add('operations__tab--active');
  console.log(clicked.dataset.tab);
  
  //active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
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
  // const h1 = document.querySelector('h1')
  // //delete event
  // //can remove it if moved to the separate function
  // const logH1 = function(e){
  //   console.log('AddEventListener: Mouse entered');
  //   // h1.removeEventListener('mouseenter', logH1)
  // }
  // h1.addEventListener('mouseenter', logH1)
  // // 
  // setTimeout(() => h1.removeEventListener('mouseenter', logH1), 3000);
//can do the same with attr function
  // h1.onmouseenter = function(e){
  //   console.log('AddEventListener: Mouse entered hiya');
    
  // }

//BUBBLING IN PRACTICE
  // const randomInt = (min, max) => Math.floor(Math.random()* (max-min +1) + min);
  // const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
 
  // document.querySelector('.nav__link').addEventListener('click', function(e){
  //   this.style.backgroundColor = randomColor()
  //   //can stop event bubble effect to the parent elements
  //   console.log(e.currentTarget === this); //true
    
  //   e.stopPropagation() //in practice not good idea to use
  // })
  // document.querySelector('.nav__links').addEventListener('click', function(e){
  //   this.style.backgroundColor = randomColor()
    
  // })
  // document.querySelector('.nav').addEventListener('click', function(e){
  //   this.style.backgroundColor = randomColor()
  // })