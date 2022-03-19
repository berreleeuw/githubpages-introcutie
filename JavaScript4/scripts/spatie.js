const setup = () => {
    document.getElementsByName('indienen')[0].addEventListener("click", update);


}

const update = () => {
    let text = document.getElementById("text").value ;
    console.log(text)
    let spatieText=""
    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i) === " "){

        }else{
        spatieText = spatieText + text.charAt(i)+" "
    }
    }
    console.log(spatieText)
}

window.addEventListener("load", setup);
