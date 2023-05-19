const textArea = document.querySelector(".msj1textarea");
const mensaje = document.querySelector(".msj2textarea");

/*
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let lista = [["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]];

function encriptar(texto){
    var txtEncriptado =  texto.toLowerCase();

    for (let i = 0; i<lista.length;i++){
        if(txtEncriptado.includes(lista[i][0])){
            txtEncriptado = txtEncriptado.replaceAll(lista[i][0],lista[i][1])
        }
    }return txtEncriptado

}
function btnEncriptar(){
    var txtEncriptado = encriptar(textArea.value);
    mensaje.value = txtEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
/* */
function desencriptar(texto){
    var txtDesencriptado =  texto.toLowerCase();

    for (let i = 0; i<lista.length;i++){
        if(txtDesencriptado.includes(lista[i][1])){
            txtDesencriptado = txtDesencriptado.replaceAll(lista[i][1],lista[i][0])
        }
    }return txtDesencriptado

}
function btnDesencriptar(){
    var txtDesencriptado = desencriptar(textArea.value);
    mensaje.value = txtDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}