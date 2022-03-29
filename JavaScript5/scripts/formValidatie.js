const setup = () => {

    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className="invalid";
        errVoornaam.innerHTML = "max. 30 karakters";
    } else {
        txtVoornaam.className="";
        errVoornaam.innerHTML = "";
    }
};
const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if (familienaam.length > 50){
        txtFamilienaam.className="invalid";
        errFamilienaam.innerHTML = "max. 50 karakters";
    }else{
        txtFamilienaam.className="";
        errFamilienaam.innerHTML = "";
    }
};
const valideerGeboortedatum = () => {
    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();
    if (geboortedatum.length = 0){
        errGeboortedatum
    }

};
const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();
    if (email !== "@"){
        errEmail;
    }
    if (email.length = 0)
    {
        errEmail;
    }
};
const valideerAantalKinderen = () => {
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let errAantalKinderen = document.getElementById("errAantalKinderen");
    let aantalKinderen = txtAantalKinderen.value.trim();
    if (aantalKinderen === ""){
        txtAantalKinderen.className="invalid";
        errAantalKinderen.innerHTML="is geen getal ingegeven";
    }
    if (aantalKinderen < 0){
        txtAantalKinderen.className="invalid";
        errAantalKinderen.innerHTML="is geen positief getal";
    }
    if (aantalKinderen > 99){
        txtAantalKinderen.className="invalid";
        errAantalKinderen.innerHTML="is te vruchtbaar";
    }else{
        txtAantalKinderen.className="";
        errAantalKinderen.innerHTML="";
    }
}

window.addEventListener("load", setup);
