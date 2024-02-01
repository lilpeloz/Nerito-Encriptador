// boton copia escondido 
var boton = document.getElementById("botonC");
boton.style.display = "none";


//boton encriptador
function botonEncriptador(){
var botonEncriptador = document.getElementById("fraseEncriptado").value.toLowerCase(); //toLowerCase es todo lo que entre en mayuscula sale en minuscula//


var fraseEncriptado = botonEncriptador.replace(/e/img, "enter"); 
var fraseEncriptado = fraseEncriptado.replace(/i/img, "imes"); 
var fraseEncriptado = fraseEncriptado.replace(/a/img, "ai"); 
var fraseEncriptado = fraseEncriptado.replace(/o/img, "ober");
var fraseEncriptado = fraseEncriptado.replace(/u/img, "ufat");  

document.getElementById("fraseEncriptado2").innerHTML = fraseEncriptado;
document.getElementById("texto1").innerHTML = "Frase Encriptada";

var imagenEncriptar = document.getElementById("lupa");
imagenEncriptar.src = "./img/encriptado.png";
imagenEncriptar.style.paddingRight = "20px";

var boton = document.getElementById("botonC");
boton.style.display = "block";
return;
// i coge letras mayusculas y minusculas
//m coge multiples lineas
//g coge toda la linea u oracion
}

//boton desencriptador
function botonDesencriptador(){
var botonDesencriptador = document.getElementById("fraseEncriptado").value.toLowerCase(); 

var fraseEncriptado = botonDesencriptador.replace(/enter/img, "e"); 
var fraseEncriptado = fraseEncriptado.replace(/imes/img, "i"); 
var fraseEncriptado = fraseEncriptado.replace(/ai/img, "a"); 
var fraseEncriptado = fraseEncriptado.replace(/ober/img, "o");
var fraseEncriptado = fraseEncriptado.replace(/ufat/img, "u");  

document.getElementById("fraseEncriptado2").innerHTML = fraseEncriptado;
document.getElementById("texto1").innerHTML = "Frase Desencriptada";

var imagenDesencriptar = document.getElementById("lupa");
imagenDesencriptar.src = "./img/desencriptado.png";
imagenDesencriptar.style.paddingRight = "20px";
return;
}




//boton copia


function copia(){
var texto2 = document.getElementById("fraseEncriptado2");
var texto = texto2
    
texto.select();
texto.setSelectionRange(0, 99999);
navigator.clipboard.writeText(texto.value);



document.getElementById("texto1").innerHTML = "copiado";
var imagenCopia = document.getElementById("lupa");
imagenCopia.src = "./img/copia.png";
imagenCopia.style.paddingRight = "20px";

return;
}
