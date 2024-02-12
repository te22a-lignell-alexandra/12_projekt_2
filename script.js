
const kundvagn = document.querySelector(".kundvagn");
const bild = document.querySelector("img");
let array = [];
const nyckel = "varor"

function AddToList(varu_namn, pris, bild_sökväg){
    let vara = {
        bild:bild_sökväg ,
        namn:varu_namn ,
        pris:pris
    }

    array.push(vara);

    let json = JSON.stringify(array);
    window.localStorage.setItem(nyckel, json);
    DrawStuff();
}

function DrawStuff(){
    kundvagn.innerHTML="";
    for (let i = 0; i < array.length; i++){
        let article = document.createElement("article");
        let bild = document.createElement("img");
        console.log(array[i].bild);
        bild.setAttribute("src", array[i].bild);
        let h2 = document.createElement("h2");
        h2.textContent = array[i].namn;
        let p = document.createElement("p");
        p.textContent = array[i].pris;
        article.appendChild(bild);
        article.appendChild(h2);
        article.appendChild(p);
        kundvagn.appendChild(article);
    }
}