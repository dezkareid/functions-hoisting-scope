function init() {
	/*
		Esto no da error porque el hoisting mueve las arriba de este scope
		var x, y;
		Y lo que hace es imprimir el valor undefined en ambos casos
		Porque solo mueve la declaración, no la asignación
	*/
	console.log(x,y);
	var x = "10";

	/*
		Esta línea causará un error porque sumar es una variable
		si bien estas asignandole a la variable sumar una función
		lo que se mueve es la declaración no la asignación
	*/
	var suma = sumar(1, 3);


	var sumar = function sumar (a, b) {
		return a + b;
	}

	/*
		Si descomentas esta función y comentas sumar, todo saldra bien
		function sumar(a , b) {
			return a + b;
		}
	*/

	var body = document.querySelector('body');
	var texto = document.createTextNode("La suma es : " + suma);
	body.appendChild(texto);
	var y = 11;
}

window.addEventListener('load', init);
