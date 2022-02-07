/*
Camila Viñas Vealzquez
DIV E 
EJ 5 IF
*/
function mostrar() {
	//declaramos variable
	var edad;
	//definimos variable
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad< 12 || edad> 17)
	{
		alert("No es adolescente");
	}
	

}
//FIN DE LA FUNCIÓN