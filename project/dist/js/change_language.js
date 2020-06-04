// Functionality for the language buttons
// Code adapted from https://www.youtube.com/watch?v=PaJrDAmrOB4

// This is needed so the addition of hash and page reload are not happening at the same time
// Without this, the hash disapppears and the English language button doesn't work
function reloadPage() {
  setTimeout(function () {
    location.reload();
  }, 100);
}

const data_reload = document.querySelectorAll(".data-reload");
data_reload.forEach(
  (el) =>
    (el.onclick = function () {
      reloadPage();
    })
);

// Language options for each element are stored in dictionaries
// Idea taken from this conversation: https://dev.to/cecilelebleu/help-how-to-make-a-multilanguage-website-3llc
const eng = {
  "menu-home": "Home",
  "menu-contact": "Contact us",
  "menu-join": "Join the society",
  "main-heading": "Kuopio Society of Technology",
  "general-info":
    "Kuopio Society of Technology rules! Lorem ipsum dolor sit amet consectetur\
  adipisicing elit. Voluptates repellendus optio vitae praesentium\
  placeat! Cupiditate tempora possimus et, velit error amet maiores aut\
  laborum rerum nemo doloribus ullam! Iste, debitis?",
};

const fin = {
  "menu-home": "Etusivu",
  "menu-contact": "Yhteystiedot",
  "menu-join": "Liity jäseneksi",
  "main-heading": "Kuopion Teknillinen Seura",
  "general-info":
    "Kuopion Teknillisen Seuran eli KuTeSin  tarkoituksena on toimia Kuopiossa ja sen lähiseuduilla asuvien jäsentensä yhdyssiteenä, tukea heidän pyrkimyksiään ja harrastuksiaan sekä edistää suomalaisen teknillisen kirjallisuuden, teknillisten tieteiden, tekniikan, teollisuuden ja talouden kehitystä.",
};

// Default language is Finnish
let lang = fin;
// Change to English is done with #eng hash in the URL
if (window.location.hash) {
  if (window.location.hash === "#eng") {
    lang = eng;
    // Links are changed so that the user stays on English pages while navigating
    const menu_links = ["menu-home", "menu-contact", "menu-join"];
    function change_link(el) {
      const menu_link = document.querySelector("#" + el);
      menu_link.href = menu_link.href + "#eng";
    }
    menu_links.forEach(change_link);
  }
}

// Array of elements where text needs to be placed
const text_elements = [
  "menu-home",
  "menu-contact",
  "menu-join",
  "main-heading",
  "general-info",
];
// Place text
function place_text(el) {
  document.querySelector("#" + el).textContent = lang[el];
}
text_elements.forEach(place_text);
