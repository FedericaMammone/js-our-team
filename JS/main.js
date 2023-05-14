
// console.log(cardContainer);

// creazione array con oggetti

const card = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "barbara-ramos-graphic-designer.jpg"
    }

]

// console.log(card);


for (let i = 0; i < card.length; i++) {
    let objIesimo = card[i];
    // console.log(objIesimo);
    // console.log(objIesimo.nome);

    for (let chiaveObj in objIesimo) {
        // console.log(objIesimo[chiaveObj]);

        document.querySelector(".card").innerHTML = `<img src="img/${objIesimo.foto}" alt="foto"></img>`+`<span>${objIesimo.nome}</span>`+`<span>${objIesimo.ruolo}</span>`;
    }

    // let cardElement = `<span>${objIesimo.nome}</span>` + 
    // `<span>${objIesimo.ruolo}</span>` + `<img src="${objIesimo.foto}" alt="foto"></img>`;
    // console.log(cardElement);

    // cardContainer.append(cardElement);
    // cardElement.append(objIesimo.nome)

    // cardContainer.innerHTML(`<span>${objIesimo.nome}</span>`);

   
}


