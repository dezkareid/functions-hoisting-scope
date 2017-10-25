function sumar(a, b) {
	return a + b;
}


function init() {
	var suma = sumar(1, 3);
	var body = document.querySelector('body');
	var texto = document.createTextNode("La suma es : " + suma);
	body.appendChild(texto);	
}

window.addEventListener('load', init);
