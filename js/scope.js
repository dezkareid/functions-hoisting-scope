/* Variable global */
var mensaje = "Soy una variable global";

function init() {
	var mensaje = "Soy una variable local";

	function createMessage() {
		var body = document.querySelector('body');
		var texto = document.createTextNode("El valor de la variable mensaje es : " + mensaje);
		body.appendChild(texto);
	}

	createMessage();
}

console.log(mensaje);

window.addEventListener('load', init);
