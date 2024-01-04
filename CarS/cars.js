/*=============== SHOW MENU ===============*/
var navMenu = document.querySelector('#nav-menu')
var navToggle = document.querySelector('#nav-toggle')
var navClose = document.querySelector('#nav-close')
 
var right =document.querySelector(".fa-angle-right")
var left =document.querySelector(".fa-angle-left")

var carStart = document.querySelector('.car-start')

var storage = [
  {audioSrc :"./audio/BMW_M5_CS.mp3", imageSrc : "./img/BMW M5 CS/BMW-M5-CS-2022-6.png"},
  {audioSrc :"./audio/Ford_Mustang.mp3", imageSrc : "./img/Ford Mustang/Ford-Mustang-Shelby-GT500-Heritage-Edition-2022-2.png"},
  {audioSrc :"./audio/Lamborghini_Aventador_SVJ_Roadster.mp3", imageSrc : "./img/Lamborghini/Lamborghini-Aventador-LP780-4-Ultimae-2022-2.png"},
  {audioSrc :"./audio/Nissan_GTR-R35.mp3", imageSrc : "./img/Nissan/iris (4).png"},
  {audioSrc :"./audio/Porsche_991_GT3_RS.mp3", imageSrc : "./img/Porsche/gt3(2).png"},
]

/* Car Noises */
var index = 0;
var realTime = 0;

function changeImgAudio() {
  var image = document.querySelector('.home-img');
  image.src = storage[index].imageSrc;

  var audio = document.querySelector('#carAudio');
  audio.src = storage[index].audioSrc;
}

function playSong() {
    var image = document.querySelector('.home-img');
    image.src = storage[index].imageSrc;

    var audio = document.querySelector('#carAudio');
    audio.src = storage[index].audioSrc;
    audio.play();
    audio.currentTime = realTime;

}

carStart.addEventListener("click", function() {
  changeImgAudio()
  var audio = document.querySelector('#carAudio');
  audio.currentTime = realTime;
  audio.play();
})

right.addEventListener("click", function() {
  index = (index + 1) % storage.length;
  changeImgAudio()
})

left.addEventListener("click", function() {
  index = (index - 1 + storage.length) % storage.length;
  changeImgAudio()
})



//    MENU SHOW
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', ()=> {
   navMenu.classList.add('show-menu')
  })
 }
 
//    MENU HIDDEN
/* Validate if constant exists */
if(navClose){
  navClose .addEventListener('click', ()=> {
   navMenu.classList.remove('show-menu')
  })
}


/*=============== REMOVE MENU MOBILE ===============*/
var navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    var navMenu = document.querySelector('.nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader (){
  var header = document.querySelector('.header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this. scrollY >= 50) header. classlist.add('scroll-header'); 
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== POPULAR SWIPER ===============*/
var swiperCars = new Swiper(".popular-cont", {
  loop:true,
  spaceBetween:24,
  slidesPerView: 'auto',
  grabCursor:'grab',
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
var mixerCars = mixitup('.featured-content', {
  selectors: {
      target: '.featured-card'
  },
  animation: {
      duration: 300
  }
});

/* Link active featured */ 
var linkCars = document.querySelectorAll('.featured-items')

function activeCar() {
  linkCars.forEach((e)=>{
    e.classList.remove("active-cars")
  })
  this.classList.add('active-cars')
}
linkCars.forEach((f)=>{
  f.addEventListener('click', activeCar)
})
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  var scrollUp = document.querySelector('#scrollup');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-t
 if(this.scrollY >= 350){
  scrollUp.classList.add('show-scroll');
}else{
  scrollUp.classList.remove('show-scroll')
}
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
var sections = document.querySelectorAll('section[id]')
function scrollActive(){
     var scrollY = window.pageYOffset

     sections.forEach((e) =>{
         var sectionHeight = e.offsetHeight,
              sectionTop = e.offsetTop - 58,
              sectionId = e.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active-link')
         }
         else{
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active-link')
          }
})
}


window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

var sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  delay: 500,
  reset: true
})

sr.reveal(`.home__title`)
sr.reveal(`.home__subtitle`, {delay: 500})
sr.reveal(`.home__elec`, {delay: 600})
sr.reveal(`.home__img`,{delay: 800})
sr.reveal(`.home__car-data`, {delay: 900})