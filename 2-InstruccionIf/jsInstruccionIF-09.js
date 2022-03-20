/*
Camila Viñas Velazquez
DIV E
EJ 9 IF
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	var aleatorio = Math.random();  //Math va con mayus
	var enteroAleatorio;
//Math.floor redondea para abajo Math.sail redondea para arriba 
	enteroAleatorio = Math.floor(aleatorio* (10 - 1 + 1) + 1);

	alert ("Su numero es " + enteroAleatorio);


}//FIN DE LA FUNCIÓN