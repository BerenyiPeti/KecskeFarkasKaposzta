window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}


function QS(elem) {
    return document. querySelectorAll(elem);
}

function init() {
    var nevek = "Berényi Péter, Kovács Milán";
    QS("footer p")[0].innerHTML = nevek;
    QS("footer p")[0].style.fontSize = "20px";
    QS("footer p")[0].style.textAlign = "center";

    for (let index = 0; index < 3; index++) {
        QS("#bal img")[index].addEventListener("click", kepKattint);
        
    }
    for (let index = 0; index < 3; index++) {
        QS("#bal img")[index].addEventListener("click", kepetAtrak);
        
    }

}

var kepek = [];

function kepKattint() {
    /*for (let index = 0; index < kepek.length; index++) {
        if (!kepek[index] === `${this.src}`) {
            kepek.push(this.src);

        }
        
    }*/
    kepek.push(this.src);
    console.log(kepek);
    
}

function kepetAtrak() {
    this.style.display = "none";
    ID("csonak").innerHTML = `<img src="${this.src}" alt="">`;
}

/*function veszelyes() {
    if ()
}*/




