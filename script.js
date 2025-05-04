// ⏰ Uhrzeit formatieren
function formatTime(number) {
    return number < 10 ? '0' + number : number;
  }
  
  // ⏰ Uhr aktualisieren
  function aktualisiereUhr() {
    const jetzt = new Date();
    const stunden = formatTime(jetzt.getHours());
    const minuten = formatTime(jetzt.getMinutes());
    const sekunden = formatTime(jetzt.getSeconds());
    const aktuelleUhrzeit = `${stunden}:${minuten}:${sekunden}`;
    document.getElementById('uhr').textContent = aktuelleUhrzeit;
  }
  
  setInterval(aktualisiereUhr, 1000);
  aktualisiereUhr();
  
  // ⚙️ Menü ein/ausblenden mit demselben Button
  const einstellungenButton = document.getElementById('einstellungen-button');
  const einstellungenMenue = document.getElementById('einstellungen-menue');
  
  einstellungenButton.addEventListener('click', () => {
    einstellungenMenue.classList.toggle('sichtbar');
  });
  
  // 🎨 Theme-Wechsel
  const themeAuswahl = document.getElementById('theme-auswahl');
  let aktuellesTheme = 'mittel';
  setzeTheme(aktuellesTheme);
  
  themeAuswahl.addEventListener('change', (event) => {
    aktuellesTheme = event.target.value;
    setzeTheme(aktuellesTheme);
  });
  
  function setzeTheme(theme) {
    const body = document.body;
    const container = document.querySelector('.uhr-container');
    const menue = document.getElementById('einstellungen-menue');
  
    // Alle alten Klassen entfernen
    body.classList.remove('theme-hell', 'theme-mittel', 'theme-dunkel');
    container.classList.remove('theme-hell', 'theme-mittel', 'theme-dunkel');
    menue.classList.remove('theme-hell', 'theme-mittel', 'theme-dunkel');
  
    // Neue hinzufügen
    body.classList.add('theme-' + theme);
    container.classList.add('theme-' + theme);
    menue.classList.add('theme-' + theme);
  }
  