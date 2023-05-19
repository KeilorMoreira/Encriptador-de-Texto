const textArea = document.querySelector(".msj1textarea");
const mensaje = document.querySelector(".msj2textarea");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
// Primer metodo de solución utilizando matrices.
let lista = [["e","enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
function encriptar(texto){
    var txtEncriptado =  texto.toLowerCase();

    for (let i = 0; i<lista.length;i++){
        if(txtEncriptado.includes(lista[i][0])){
            txtEncriptado = txtEncriptado.replaceAll(lista[i][0],lista[i][1])
        }
    }return txtEncriptado

}
function btnEncriptar(){
    mensaje.value = encriptar(textArea.value);
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
    mensaje.value = desencriptar(textArea.value);
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function btnCopiar(){
    textArea.value = mensaje.value;
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('imagenes/Muñeco.png')";
}

/*
// Segundo método de solución utilizando formas abreviadas dentro del prototipo .replace()

// La letra i es del prototipo .ignoreCase, para ignorar validación de mayusculas y minusculas. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
// La letra m es del prototipo .multiline, para tratar una linea como si fuesen muchas lineas. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline
// La letra g es del prototipo .global, comprueba todas las posibles coincidencias del string, es como recorrer el string. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global
// La idea es sustituir letra por letra, aplicando un prototipo distinto cada vez y reescribiendo la variable.

function encriptar(texto){
    var textoEncriptado = texto.toLowerCase();
    textoEncriptado = textoEncriptado.replace(/e/img,"enter");
    textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    textoEncriptado = textoEncriptado.replace(/o/img,"obe");
    textoEncriptado = textoEncriptado.replace(/u/img,"ufat");
    return textoEncriptado
}
function btnEncriptar(){
    mensaje.value = encriptar(textArea.value);
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
*/