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
  "contact-info":
    "To contact our society, plese contact our board members by email, or send us a message on Twitter!",
  "join-info":
    "We are delighted to hear that you are interested in our society! To join us, please fill the form below and we will contact you! The membership of our society costs only 30 € per year, and with all the events we organize, it is well worth it!",
};

const fin = {
  "menu-home": "Etusivu",
  "menu-contact": "Yhteystiedot",
  "menu-join": "Liity jäseneksi",
  "main-heading": "Kuopion Teknillinen Seura",
  "general-info":
    "Kuopion Teknillisen Seuran eli KuTeSin  tarkoituksena on toimia Kuopiossa ja sen lähiseuduilla asuvien jäsentensä yhdyssiteenä, tukea heidän pyrkimyksiään ja harrastuksiaan sekä edistää suomalaisen teknillisen kirjallisuuden, teknillisten tieteiden, tekniikan, teollisuuden ja talouden kehitystä.",
  "contact-info":
    "Jos haluat tietää lisää, ota meihin yhteyttä sähköpostitse tai laita meille viestiä Twitterissä!",
  "join-info":
    "Hienoa, että olet kiinnostunut KuTeS:ista! Liittyminen on helppoa: täytä vain allaoleva lomake, ja palaamme asiaan! Yhdistyksen vuosimaksu on vain 30 euroa, ja käymällä yhdistyksen tapahtumissa saa rahoilleen hyvin vastinetta!",
};

// Default language is Finnish
let lang = fin;
// Change to English is done with #eng hash in the URL
if (window.location.hash) {
  if (window.location.hash === "#eng") {
    lang = eng;
    // Links are changed so that the user stays on English pages while navigating
    const menu_links = ["menu-home", "menu-contact", "menu-join", "logo-link"];
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
  "contact-info",
  "join-info",
];
// Place text for each element on the current page
function place_text(el) {
  const el_found = document.querySelector("#" + el);
  if (el_found !== null) {
    el_found.textContent = lang[el];
  }
}
text_elements.forEach(place_text);
