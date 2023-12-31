// Tableau avec les images et tagLines du carousel

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

// Variables utilisées

const dots = document.querySelector('.dots')
const carouselSlide = document.querySelector('.banner-img')
const carouselText = document.querySelector('#banner p')
const previousSlide = document.querySelector('.arrow_left')
const nextSlide = document.querySelector('.arrow_right')

let currentSlide = 0

// Création des bullet-points en fonction du nombre de slides dans le tableau

function addBulletpoints(slides) {
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('span')
    dot.classList.add('dot')
    dots.appendChild(dot)
  }
}

// Fonction de mise à jour des slides du carousel lors du défilement
function carouselUpdate() {
  carouselSlide.setAttribute(
    'src',
    './assets/images/slideshow/' + slides[currentSlide].image
  )
  carouselText.innerHTML = slides[currentSlide].tagLine

  // Changement d'apparence du bullet-point en fonction de la slide affichée
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
carouselUpdate()

// Flèches de défilement - Changement Image, Texte et Bulletpoints

// Défilement à gauche (précédent)
previousSlide.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1
  } else {
    currentSlide--
  }
  carouselUpdate()
})

// Défilement à droite (suivant)
nextSlide.addEventListener('click', () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  carouselUpdate()
})

// Navigation en cliquant sur les bulletpoints
let bulletpoints = document.querySelectorAll('.dot')
bulletpoints.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index
    carouselUpdate()
  })
})
