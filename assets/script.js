

// Fonction pour échapper les caractères spéciaux HTML
function escapeHtmlEntities(input) {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;").replace(/'/g, "&#39;")
}
// Écouteur d'événement pour la flèche gauche en jQuery
document.querySelector(".arrowleft").addEventListener("click", function() {
  console.log("Flèche gauche cliquée")
  changeSlide("prev")
});
// Écouteur d'événement pour la flèche droite en jQuery
document.querySelector(".arrowright").addEventListener("click", function() {
  console.log("Flèche gauche cliquée")
  changeSlide("prev")
});
// Variable pour garder la trace de l'index de la diapositive actuelle
let currentSlideIndex = 0

// Fonction pour changer l'image et le texte dans le carrousel
function changeSlide(direction) {
  // Incrémenter ou décrémenter l'index de la diapositive actuelle en fonction de la direction
  if (direction === "prev") {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length
  } else if (direction === "next") {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length
  }

  // Récupérer l'élément du carrousel et mettre à jour son contenu
  const banner = document.getElementById("banner");
  banner.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`
  banner.querySelector("p").innerHTML = slides[currentSlideIndex].tagLine

  // Mettre à jour l'état actif des points
  const dots = banner.querySelectorAll(".dot")
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected")
    }
  })
}


