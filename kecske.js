window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}


function QS(elem) {
    return document. querySelectorAll(elem);
}

var kepIndex = 0;

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
var alt = [];

function kepKattint() {
    /*for (let index = 0; index < kepek.length; index++) {
        if (!kepek[index] === `${this.src}`) {
            kepek.push(this.src);

        }
        
    }*/

    kepek.push(this.src);
    alt.push(this.alt)
    //console.log(kepek);
    event.target.removeEventListener("click", kepKattint)
    
    
}

var csonak = [];

function kepetAtrak() {
    
    this.style.display = "none";
    ID("csonak").innerHTML = `<img src="${this.src}" alt="${this.alt}" id="${this.alt}">`;
    csonak.push(this.alt);
    console.log()
    veszelyes(this.alt)
    

}
var csonak = "";
function veszelyes(id) {
    if (ID(id).alt === "kaposzta")  {
        console.log("ez egy káposzta")
    }
    
    var csonak = id.alt;

    console.log(ID(id).id)
}





