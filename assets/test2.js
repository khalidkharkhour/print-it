
const dotsContainer = document.createElement('div');
dotsContainer.className = 'dots';

// Créer les éléments de points individuels et les ajouter au conteneur de points
for (let i = 0; i < slides.length; i++) {
const dot = document.createElement('div');
dot.className = 'dot';
dotsContainer.appendChild(dot);
}

// Obtenir l'élément 'banner' par son ID
const bannerElement = document.getElementById('banner');

// Ajouter le conteneur de points à l'élément 'banner'
bannerElement.appendChild(dotsContainer);

// Obtenir l'élément 'carousel' par son ID
const carouselElement = document.getElementById('carousel');

// Définir l'index de la diapositive actuelle à 0
let slideIndex = 0;

// Définir l'intervale pour la lecture automatique
const autoplayInterval = setInterval(() => {
// Diapositive suivante
slideIndex = (slideIndex + 1) % slides.length;

// Mettre à jour les points
for (let i = 0; i < dotsContainer.children.length; i++) {
dotsContainer.children[i].classList.remove('active');
}

dotsContainer.children[slideIndex].classList.add('active');

// Faites défiler vers la diapositive suivante
carouselElement.scrollLeft = slideIndex * carouselElement.offsetWidth;
}, 3000);

// Ajouter l'écouteur d'événement pour les points
for (let i = 0; i < dotsContainer.children.length; i++) {
dotsContainer.children[i].addEventListener('click', () => {
// Définir l'index de la diapositive sur l'index du point cliqué
slideIndex = i;

// Mettre à jour les points
for (let j = 0; j < dotsContainer.children.length; j++) {
  dotsContainer.children[j].classList.remove('active');
}

dotsContainer.children[slideIndex].classList.add('active');

// Faites défiler vers la diapositive suivante
carouselElement.scrollLeft = slideIndex * carouselElement.offsetWidth;
});
}