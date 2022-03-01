const setup = () => {
    let btn=document.getElementById("btn");
    btn.addEventListener("click", welkom);
}


function welkom()
{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

window.addEventListener("load", setup);

