var sumar = function sumar(a, b) {
	return a + b;
};

window.addEventListener('load', function () {
	var suma = sumar(1, 3);
	var body = document.querySelector('body');
	var texto = document.createTextNode("La suma es : " + suma);
	body.appendChild(texto);
});
