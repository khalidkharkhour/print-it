// Fonction pour échapper les caractères spéciaux HTML
function escapeHtmlEntities(input) {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Écouteur d'événement pour la flèche gauche en jQuery
$(".arrowleft").on("click", function() {
  console.log("Flèche gauche cliquée");
  changeSlide("prev");
});

// Écouteur d'événement pour la flèche droite en jQuery
$(".arrowright").on("click", function() {
  console.log("Flèche droite cliquée");
  changeSlide("next");
});

// Variable pour garder la trace de l'index de la diapositive actuelle
let currentSlideIndex = 0;

// Fonction pour changer l'image et le texte dans le carrousel
function changeSlide(direction) {
  // Incrémenter ou décrémenter l'index de la diapositive actuelle en fonction de la direction
  if (direction === "prev") {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  } else if (direction === "next") {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  }

  // Récupérer l'élément du carrousel et mettre à jour son contenu
  const banner = $("#banner");
  banner.find(".banner-img").attr("src", `./assets/images/slideshow/${slides[currentSlideIndex].image}`);
  banner.find("p").html(slides[currentSlideIndex].tagLine);

  // Mettre à jour l'état actif des points
  const dots = banner.find(".dot");
  dots.each(function(index, dot) {
    if (index === currentSlideIndex) {
      $(dot).addClass("dot_selected");
    } else {
      $(dot).removeClass("dot_selected");
    }
  });
}

