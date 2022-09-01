const inputText = document.querySelector(".input-text");
const mensaje = document.querySelector(".mensaje");


function Encriptar(stringEncriptada){

    let clave = [["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"],["a", "ai"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(var i = 0; i < clave.length; i++){
        if(stringEncriptada.includes(clave[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(clave[i][0],clave[i][1]);
        }
    }

    return stringEncriptada;

}

function btnEncriptar(){
    const textoEncriptado = Encriptar(inputText.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputText.value = "";
}

function Desencriptar(stringDencriptar){

    let clave = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];

    stringDencriptar = stringDencriptar.toLowerCase();

    for(var i = 0; i < clave.length; i++){
        if(stringDencriptar.includes(clave[i][1])){
            stringDencriptar = stringDencriptar.replaceAll(clave[i][1],clave[i][0]);
        }
    }

    return stringDencriptar;

}

function btnDesencriptar(){
    const textoDesncriptado = Desencriptar(inputText.value);
    mensaje.value = textoDesncriptado;
    
    inputText.value = "";
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}