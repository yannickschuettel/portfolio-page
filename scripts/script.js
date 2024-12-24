document.addEventListener("DOMContentLoaded", () => {
  // Alter berechnen
  const birthDate = new Date("2000-12-29");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  document.getElementById(
    "age"
  ).textContent = `Ich bin derzeit ${age} Jahre alt.`;

  // Karte von Bern mit Worb als Heimatort
  const map = L.map("mapid").setView([46.934, 7.603], 13); // Worb Koordinaten
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  L.marker([46.934, 7.603])
    .addTo(map)
    .bindPopup("<b>Worb!</b><br>Mein Heimatort.")
    .openPopup();

  // Countdown bis zum Bachelor-Abschluss
  const endDate = new Date("2026-06-30T23:59:59"); // Abschluss im Sommer 2026
  function updateCountdown() {
    const now = new Date();
    const timeDiff = endDate - now;
    const minutesLeft = Math.floor(timeDiff / (1000 * 60));
    document.getElementById(
      "countdown"
    ).textContent = `${minutesLeft} Minuten bis zum Abschluss.`;
  }
  setInterval(updateCountdown, 60000);
  updateCountdown();

  // Joke API
  document.getElementById("jokeButton").addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("joke").textContent =
          data.joke || "Kein Witz gefunden!";
      });
  });

  // Verstecke den Rest der Seite und zeige erst bei Scrollen an
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      document.getElementById("intro").style.display = "none";
    }
  });
});

// Initialisiere EmailJS mit deiner User ID
emailjs.init("yysJpTsLiOHvvDpbH"); // Deine User ID

// Event-Listener zum Formular hinzufügen
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Verhindert das Standardformular-Verhalten

    // Erstelle FormData-Objekt mit den Formulardaten
    var formData = new FormData(this);

    // Sende das Formular über EmailJS
    emailjs.sendForm("service_jqigagw", "template_0drneom", formData).then(
      function (response) {
        console.log("Erfolgreich gesendet:", response);
        document.getElementById("responseMessage").innerText =
          "Nachricht erfolgreich gesendet!";
        document.getElementById("contactForm").reset(); // Formular zurücksetzen
      },
      function (error) {
        console.error("Fehler beim Senden:", error);
        document.getElementById("responseMessage").innerText =
          "Es gab einen Fehler. Bitte versuche es später erneut.";
      }
    );
  });
