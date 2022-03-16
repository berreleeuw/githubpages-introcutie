const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let vandaag = new Date();
    const print = (message) => {
        console.log(message);
    }

    console.log(typeof leeftijd); //geeft number
    console.log(typeof intrest); //geeft number
    console.log(typeof isGevaarlijk); //geeft boolean
    console.log(typeof vandaag); //geeft object
    console.log(typeof print); //geeft function
}
window.addEventListener("load", setup);

