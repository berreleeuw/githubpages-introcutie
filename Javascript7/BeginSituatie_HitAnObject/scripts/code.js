let global ={
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    document.getElementById('target').addEventListener('click',click)
document.getElementById("btnstart").addEventListener('click',start)
    };

const start = () => {
    interval = setInterval(moveimg,global.MOVE_DELAY);
    gestart = true;
    document.getElementById("btnstart").remove();
}

const click = () => {
    if (gestart = true) {
        let img = document.getElementById('target');
        let src = img.src.toString().substr(-12);//(want anders heeft hij het absolute pad mee, hier is enkel een stukje relevant)
        if (src === "images/0.png") {
            window.alert("GAME OVER X_X")
            document.location.reload(true)
        } else {
            moveimg()
            global.score = global.score + 1;
            document.getElementById("p1").innerHTML = "uw score is :" + global.score;
        }
        clearInterval(interval)
        interval = setInterval(moveimg, global.MOVE_DELAY)
    }else{
        window.alert('eerst op start drukken...')
    }
}


const moveimg = () => {
    let img = document.getElementById('target');
    let speelveld = document.getElementById("playField");
    let maxLeft = speelveld.clientWidth - img.offsetWidth;
    let maxHeight = speelveld.clientHeight - img.offsetHeight;

    let left = Math.floor(Math.random()*maxLeft);
    let top = Math.floor(Math.random()*maxHeight);
    img.style.left = left+"px";
    img.style.top = top+"px";
    img.src= global.IMAGE_PATH_PREFIX+Math.floor(Math.random()*global.IMAGE_COUNT)+global.IMAGE_PATH_SUFFIX;

    }

window.addEventListener("load", setup);


