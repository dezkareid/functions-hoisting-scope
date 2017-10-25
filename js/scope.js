/* Variable global */
var mensaje = "Soy una variable global";

function init() {
	var body = document.querySelector('body');
	var texto = document.createTextNode("El valor de la variable mensaje es : " + mensaje);
	body.appendChild(texto);
}

console.log(mensaje);

window.addEventListener('load', init);
