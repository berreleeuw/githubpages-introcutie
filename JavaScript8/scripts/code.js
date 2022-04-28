let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    valideer();
    // zijn er elementen als invalid gemarkeerd?
    let elements = document.getElementsByClassName("invalid");

    if (elements.length == 0) {
        // alles in orde, we mogen bewaren
        let persoon = {};
        if (lstPersonen.selectedIndex == -1) {
            // nieuwe persoon bewaren
            bewaarNieuwPersoon(persoon);
            personen.push(persoon); // toevoegen aan interne lijst
            GegevensInvullen(persoon);
        } else {
            // bestaande persoon wijzigen
            persoon = personen[lstPersonen.selectedIndex];
            bewaarNieuwPersoon(persoon);
            GegevensBewerken(persoon);
        }
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let lstPersonen = document.getElementById("lstPersonen");
    let voornaam = document.getElementById("txtVoornaam");
    let achternaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");

    //alles leeg
    voornaam.value = "";
    achternaam.value = "";
    geboortedatum.value = "";
    email.value = "";
    aantalKinderen.value = "";
    lstPersonen.selectedIndex = -1;

    clearAllErrors();
};

const bewaarNieuwPersoon = (persoon) =>{
    let voornaam = document.getElementById("txtVoornaam");
    let achternaam = document.getElementById("txtFamilienaam");
    let geboorteDatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");


    persoon.voornaam = voornaam.value.trim();
    persoon.familienaam = achternaam.value.trim();
    persoon.geboorteDatum = new Date(geboorteDatum.value.trim());
    persoon.email = email.value.trim();
    persoon.aantalKinderen = parseInt(aantalKinderen.value.trim());
}

const vulPersoonIn = (geslecteerdePersoon) => {
    let index = geslecteerdePersoon.target.selectedIndex;
    let persoon = personen[index];
    let txtVoornaam = document.getElementById("txtVoornaam");
    txtVoornaam.value = persoon.voornaam;

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    txtFamilienaam.value = persoon.familienaam;

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    txtGeboorteDatum.value = persoon.geboorteDatum.toISOString().substring(0, 10);

    let txtEmail = document.getElementById("txtEmail");
    txtEmail.value = persoon.email;

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtAantalKinderen.value = persoon.aantalKinderen;
};

const GegevensBewerken = (persoon) =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let option = lstPersonen.options[lstPersonen.selectedIndex];
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
}

const GegevensInvullen = (persoon) =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", vulPersoonIn)
};
window.addEventListener("load", setup);