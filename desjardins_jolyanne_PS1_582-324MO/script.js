let chapiterObj = {
  chapitre1: {
    subtitle: "La rencontre",
    texte:
      "Tu as pris des cours de plonger sous-marine dans le but de rejoindre ton ami qui est un biologiste marin dans sa prochaine aventure en Australie.",
    image: (document.querySelector("img").src = "assets/image/fond-marin.jpg"),
    option: [{ texte: "suivant", action: "goToChapter('chapitre2')" }],
  },
  chapitre2: {
    subtitle: " Le premier choix",
    texte:
      "Tu as le choix d'apporter ta caméra Go Pro dans le but de filmer ton expérience.",
    image: "assets/image/fond-marin.jpg",
    option: [
      { texte: "oui", action: "goToChapter('chapitre3')" },
      { texte: "non", action: "goToChapter('chapitre3')" },
    ],
  },

  chapitre3: {
    subtitle: " deuxième choix",
    texte:
      "Quelques semaines plus tard, toi et ton ami vous vous aprèter à plonger dans l'eau. Ton ami te dit que vous devez explorer la faune marine qui vie pres de l'épave du bateau qui se trouve a droite. ",
    image: "assets/image/fond-marin.jpg",
    option: [
      { texte: "droite", action: "goToChapter('chapitre4')" },
      { texte: "gauche", action: "goToChapter('chapitre3')" },
    ],
  },
  chapitre4: {
    subtitle: " L'ombre ",
    texte:
      "Tu es dans l'eau et tu regardes a l'entoure de toi tout émerveiller de voir le monde sous-marin. Tu tourne la tête vers la gauche et tu vois quelque chose qui ressemble a un requin dans le fond  de l'Eau. Que fait tu rester avec ton binôme ou partir de ton côté? ",
    image: "assets/image/plongeur.jpg",
    option: [
      { texte: "droite", action: "goToChapter('chapitre5')" },
      { texte: "gauche", action: "goToChapter('chapitre8')" },
    ],
  },
  chapitre5: {
    subtitle: " Le requin ",
    texte:
      "Ton binôme te fait signe qu'il y a un requin qui approche et de rester calme.Est-ce que tu as ta go pros avec toi oui ou non?",
    image: "assets/image/requin_seul.jpg",
    option: [
      { texte: "oui", action: "goToChapter('chapitre6')" },
      { texte: "non", action: "goToChapter('chapitre7')" },
    ],
  },
  chapitre6: {
    subtitle: " Le requin ",
    texte:
      "Toi et ton ami êtent soudainement entouré d'un groupe de requin tigre qui nagent à l'entoure de vous comme si vous n'étiez pas là.Tu prend ta go pro pour filmer se moment magique.le requin fini par faire demi-tour et tu as pus tout filmer de ton expérience ",
    image: "assets/image/plongeur_et_requin.jpg",
    option: [{ texte: "suivant", action: "goToChapter('chapitre7')" }],
  },
  chapitre7: {
    subtitle: "Le danger ",
    texte:
      " Tu entend un bruit étrange et tu réalise que c'est ta bonbonne et qu'il y a des bulles qui sortent. Ton ami se retourne et voit que tu as un problème et te passe son d'étendeur d'urgence et vous remontez à la surface ",
    image: "assets/image/bulle-air.jpg",
    option: [{ texte: "suivant", action: "goToChapter('chapitre8')" }],
  },
  chapitre8: {
    subtitle: " La go pros",
    texte: "As-tu ta go pros? ",
    image: "assets/image/fond-marin.jpg",
    option: [
      { texte: "oui", action: "goToChapter('chapitre9')" },
      { texte: "non", action: "goToChapter('chapitre12')" },
    ],
  },
  chapitre9: {
    subtitle: " La décision",
    texte:
      "Tu vas à gauche et prend une change de t'éloigner de ton binome pour filmer le requin que tu pense avoir vu.Tu t'approche tranquillement et c'est la que tu réalise que c'est un grand requin blanc et c'est la premiere fois que tu vois un requin et tu te souvient plus se qu'il faut faire.Que fais-tu? ",
    image: "assets/image/requin_de_face.jpg",
    option: [
      { texte: "tu restes calme ", action: "goToChapter('chapitre10')" },
      {
        texte: "tu as vraiment peur et tu t'enfuis ",
        action: "goToChapter('chapitre11')",
      },
    ],
  },
  chapitre10: {
    subtitle: " Restez calme",
    texte:
      "Tu  film le tout et le requin fini par faire demi-tour.Tu retrouves ton ami et vous remontez sur le bateau et tu réalise que tu n'as plus ta go pro et on t'annonce que tu as va perdre ta licence de plongeur car du as désobéis à la première règle de sécurité en plonger. ",
    image: "assets/image/requin_de_face.jpg",
  },
  chapitre11: {
    subtitle: " Au mon dieu, je veux pas mourrir",
    texte:
      "Ton rythe cardiaque accélaire et tu as vraiment peur. Tu décide de nager leplus vite que tu peux dans l'espoir de pouvoir t'en sortire vivant.Finalement, le requin a sentie ton coeur battre vraiment vite et il t'as pris pour un poisson en détresse et il t'a mordu et tu t'es vidé de ton sang. ",
    image: "assets/image/requin_de_face.jpg",
  },
  chapitre12: {
    subtitle: "La bombonne",
    texte:
      " Tu entends un bruit étrange et tu réalise que c'est ta bonbonne et qu'il y a des bulles qui sortent. Tu t'es éloigner de ton binôme,donc il est trop loin pour pouvoir t'aider. Tu manque de plus en plus d'air et tu fini par mourrir avant que la bombonne se vide completement. ",
    image: "assets/image/bulle_aire.jpg",
  },
};

function goToChapter(chapterName) {
  document.querySelector("h2").innerHTML = chapiterObj[chapterName]["subtitle"];

  document.querySelector(".texte").innerHTML =
    chapiterObj[chapterName]["texte"];
  document.querySelector(".image").src = chapiterObj[chapterName]["image"];

  document.querySelector(".chose").innerHTML = " "; //HTML

  for (i in chapiterObj[chapterName].option) {
    const boutons = document.createElement("button");
    boutons.setAttribute("class", "choix");
    boutons.setAttribute("onclick", chapiterObj[chapterName].option[i].action);
    const node = document.createTextNode(
      chapiterObj[chapterName].option[i].texte
    );
    boutons.appendChild(node);
    const parent = document.querySelector(".chose");
    parent.appendChild(boutons);
  }
}

let cameraFounded = false;

function goPro() {
  cameraFounded = true;

  function camera() {
    keyFounded = true;

    goToChapter("chapitre3");
  }

  function goProstatut() {
    if (goProFounded == true) {
      function camerastatut() {
        if (cameraFounded == true) {
          goToChapter("chapitre3");
        } else {
          goToChapter("chapitre12");
        }
      }
    }
  }
}
goToChapter("chapitre1");
