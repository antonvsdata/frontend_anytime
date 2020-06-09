// Things to be edited while maintaining website such as board member names and images are here:
// Board member names and emails
const board = {
  chairman: "Diana Dippainssi",
  secretary: "Iina Insinööri",
  treasurer: "Teemu Teekkari",
  "chairman-email": "diana.di at esimerkki.fi",
  "secretary-email": "iina.inssi at esimerkki.fi",
  "treasurer-email": "teemu.teekkari at esimerkki.fi",
};
// Board member images
const board_img = {
  "chairman-img": "chairman.jpg",
  "secretary-img": "secretary.jpg",
  "treasurer-img": "treasurer.jpg",
};

// Language options for each element are stored in dictionaries
// Idea taken from this conversation: https://dev.to/cecilelebleu/help-how-to-make-a-multilanguage-website-3llc
const eng = {
  "menu-home": "Home",
  "menu-contact": "Contact us",
  "menu-join": "Join the society",
  "main-heading": "Kuopio Society of Technology",
  "general-info":
    "Kuopio Society of Technology (Kuopion teknillinen seura, KuTeS) is an society for people interested in technology in the Kuopio area. The purpose of the society is to provide its members with opportunities to network, support their interests and hobbies and to advance the development of Finnish technology, industry and economy.",
  "contact-info":
    "If you have any questions about our activities, do not hesitate to send us a message! We are constantly looking for new members as well as new companies to visit. You can contact our board members directly by email.",
  "join-info":
    "We are delighted to hear that you are interested in our society! To join us, please fill the form below and we will contact you! The membership of our society costs only 30 € per year, and with all the events we organize, it is well worth it!",
  "form-heading": "Provide your information",
  "first-names": "First names <span class='required'>*</span>",
  "last-name": "Last name <span class='required'>*</span>",
  education: "Education / School <span class='required'>*</span>",
  address: "Address and municipality <span class='required'>*</span>",
  phone: "Phone number <span class='required'>*</span>",
  "birth-year": "Birth year <span class='required'>*</span>",
  email: "Email <span class='required'>*</span>",
  comments: "Comments",
  "chairman-title": "Chairman",
  "secretary-title": "Secretary",
  "treasurer-title": "Treasurer",
};

const fin = {
  "menu-home": "Etusivu",
  "menu-contact": "Yhteystiedot",
  "menu-join": "Liity jäseneksi",
  "main-heading": "Kuopion Teknillinen Seura",
  "general-info":
    "Kuopion Teknillisen Seuran eli KuTeSin  tarkoituksena on toimia Kuopiossa ja sen lähiseuduilla asuvien jäsentensä yhdyssiteenä, tukea heidän pyrkimyksiään ja harrastuksiaan sekä edistää suomalaisen teknillisen kirjallisuuden, teknillisten tieteiden, tekniikan, teollisuuden ja talouden kehitystä.",
  "contact-info":
    "Jos kiinnostiut toiminnastamme ja sinulle heräsi kysymyksiä, ota rohkeasti meihin yhteyttä! Etsimme jatkuvasti uusia jäseniä, yhteistyökumppaneita ja kiinnostavia Kuopion alueen yrityksiä excursiokohteiksi! Voit ottaa hallituksemme jäseniin yhteyttä sähköpostitse.",
  "join-info":
    "Hienoa, että olet kiinnostunut KuTeS:ista! Liittyminen on helppoa: täytä vain allaoleva lomake, ja palaamme asiaan! Yhdistyksen vuosimaksu on vain 30 euroa, ja käymällä yhdistyksen tapahtumissa saa rahoilleen hyvin vastinetta!",
  "form-heading": "Täytä tietosi",
  "first-names": "Etunimet <span class='required'>*</span>",
  "last-name": "Sukunimi <span class='required'>*</span>",
  education: "Koulutus / korkeakoulu <span class='required'>*</span>",
  address: "Osoite ja kotikunta <span class='required'>*</span>",
  phone: "Puhelinnumero <span class='required'>*</span>",
  "birth-year": "Syntymävuosi <span class='required'>*</span>",
  email: "Sähköposti <span class='required'>*</span>",
  comments: "Kommentit",
  "chairman-title": "Puheenjohtaja",
  "secretary-title": "Sihteeri",
  "treasurer-title": "Rahastonhoitaja",
};

// Only code below this, no reason to update

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

// Add board members
// Recorded in a separate dict to not repeat names in all languages
lang = Object.assign({}, lang, board);

// Place text for each element on the current page
function place_text(el) {
  const el_found = document.querySelector("#" + el);
  if (el_found !== null) {
    el_found.innerHTML = lang[el];
  }
}
Object.keys(lang).forEach(place_text);

// Place board member images
function place_image(el) {
  const el_found = document.querySelector("#" + el);
  if (el_found !== null) {
    el_found.style.background = "url(img/" + board_img[el] + ")";
  }
}
Object.keys(board_img).forEach(place_image);
