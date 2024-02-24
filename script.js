
const kundvagn = document.querySelector(".kundvagn");
const bild = document.querySelector("img");
let array = [];
const nyckel = "varor"

function AddToList(vara_info, pris, bild_sökväg){
    let vara = {
        bild:bild_sökväg ,
        namn:vara_info ,
        pris:pris
    }

    array.push(vara);

    let json = JSON.stringify(array);
    window.localStorage.setItem(nyckel, json);
    DrawListItems();
}

function DrawListItems(){
    kundvagn.innerHTML="";
    for (let i = 0; i < array.length; i++){
        let article = document.createElement("article");
        let bild = document.createElement("img");
        console.log(array[i].bild);
        bild.setAttribute("src", array[i].bild);
        let h2 = document.createElement("h2");
        h2.textContent = array[i].namn;
        let h3 = document.createElement("h3");
        h3.textContent = array[i].pris + " kr";
        article.appendChild(bild);
        article.appendChild(h2);
        article.appendChild(h3);
        kundvagn.appendChild(article);
    }
}