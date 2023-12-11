// Tableau avec les images du carousel

const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]

// Variables réutilisées

const dots = document.querySelector('.dots')
const carouselSlide = document.querySelector('.banner-img')
const carouselText = document.querySelector('#banner p')

let currentSlide = 0

// Ajout des bullet-points en fonction du nombre de slides dans le tableau

function addBulletpoints(slides) {
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('span')
    dot.classList.add('dot')
    dots.appendChild(dot)
  }
}

function currentDot() {
  let bulletpoints = document.querySelectorAll('.dot')
  for (let index = 0; index < bulletpoints.length; index++) {
    let dot = bulletpoints[index]
    if (index === currentSlide) {
      dot.classList.add('dot_selected')
    } else {
      dot.classList.remove('dot_selected')
    }
  }
}

addBulletpoints(slides)

// Flèches de défilement - Image, Texte et bulletpoints

let previousImage = document.querySelector('.arrow_left')
previousImage.addEventListener('click', () => {
  currentSlide--
  carouselSlide.setAttribute(
    'src',
    '/assets/images/slideshow/' + slides[currentSlide].image
  )
  carouselText.innerHTML = slides[currentSlide].tagLine
  currentDot()
})

let nextImage = document.querySelector('.arrow_right')
nextImage.addEventListener('click', () => {
  currentSlide++
  carouselSlide.setAttribute(
    'src',
    '/assets/images/slideshow/' + slides[currentSlide].image
  )
  carouselText.innerHTML = slides[currentSlide].tagLine
  currentDot()
})

currentDot()
