window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function QS(elem) {
    doucument. querySelectorAll(elem)[index]

}

function init() {
    var nevek = "Berényi Péter, Kovács Milán";
    ID("keszitok").innerHTML = nevek;
    ID("keszitok").style.fontSize = "20px";
    ID("keszitok").style.textAlign = "center";
}



