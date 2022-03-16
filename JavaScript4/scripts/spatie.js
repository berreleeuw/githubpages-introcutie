const setup = () => {
    let text = document.getElementById("text");
    document.getElementById('indienen').addEventListener("click", update);

    console.log(text);
}
window.addEventListener("load", setup);
