const setup = () => {
    let student = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date(1993,11,31),
        adres: { // een object
            straat: "Kerkstraat 13",
            postcode: "8500",
            gemeente: "Kortrijk",
            gemeente: "Westouter"
        },
        isIngeschreven: true,
        namenVanExen: ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
        aantalAutos: 2
    }
    let string = JSON.stringify(student);
    console.log(string);

    let student1 = JSON.parse('{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":null,"adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}')
    console.log(student1.adres.postcode)
    if(student.adres.postcode === student1.adres.postcode)
    {
        console.log("het is identiek")
    }else{
        console.log("het is iets anders")
    }
}
window.addEventListener("load", setup);