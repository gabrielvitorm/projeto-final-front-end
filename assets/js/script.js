document.addEventListener("DOMContentLoaded", function() {
    const sosEnchentesLink = document.getElementById("SOS_ENCHENTES");
  
    sosEnchentesLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  