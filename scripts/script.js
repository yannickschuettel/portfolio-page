console.log("Portfolio-Seite erfolgreich geladen!");

// Einfaches Beispiel: Begrüßung in der Konsole
document.addEventListener("DOMContentLoaded", () => {
  alert("Willkommen auf meiner Portfolioseite!");

  // Entfernen der Intro-Seite nach Scrollen
  let intro = document.getElementById("intro");

  // EventListener für das Scrollen hinzufügen
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      intro.style.display = "none"; // Intro-Seite ausblenden, wenn gescrollt wird
    }
  });

  // Event Listener für jeden Buchstaben hinzufügen
  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter) => {
    letter.addEventListener("click", (e) => {
      const clickedLetter = e.target.textContent.toUpperCase();
      const wikiUrl = `https://de.wikipedia.org/wiki/${clickedLetter}`;
      window.location.href = wikiUrl; // Weiterleitung zu Wikipedia
    });
  });

  // Leaflet-Karte erstellen
  const map = L.map("mapid").setView([46.9481, 7.4474], 13); // Bern Koordinaten [Latitude, Longitude]

  // OpenStreetMap Tile Layer hinzufügen
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Marker in Bern setzen
  const marker = L.marker([46.9481, 7.4474]).addTo(map);
  marker.bindPopup("<b>Bern!</b><br>Hauptstadt der Schweiz.").openPopup();
});
