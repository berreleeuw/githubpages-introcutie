const setup = () => {
    document.getElementsByName('indienen')[0].addEventListener("click", update);
}
const update = () => {
    let text = document.getElementById("text").value;
    maakMetSpatie(text);
}
const maakMetSpatie = (inputText) => {
    let result=""
    for (let i = 0; i < inputText.length; i++) {
        if(inputText.charAt(i) !== " "){
            result = result + inputText.charAt(i)+" "
        }
    }
    console.log(result)
}

window.addEventListener("load", setup);