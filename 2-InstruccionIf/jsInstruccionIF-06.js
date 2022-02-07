/*
Camila Viñas Vealzquez
DIV E 
EJ 6 IF
*/
function mostrar() {
	//declaramos variable
	var edad;
	//definimos variable
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	//si es adolescente
	if (edad< 13) {// si es niño
		alert("Es niño");
	}
	else{
		if (edad> 13 && edad< 17) { // si es adolescente
			alert("Es adolescente");
		}
		else{
			alert("Es adulto")
		}
	}
}//FIN DE LA FUNCIÓN