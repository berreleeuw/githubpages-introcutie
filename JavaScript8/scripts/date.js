const setup = () => {
    let today = new Date();
    let birthday = new Date(2003,9,26);
    console.log((today - birthday)/86400000);
}

window.addEventListener("load", setup);