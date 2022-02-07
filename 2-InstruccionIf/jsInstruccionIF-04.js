/*
Camila viñas velazquez
DIV E
ej 4 IF
*/
function mostrar() {
	//declaramos variable
	var edad;
	//definimos variable
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

		if (edad> 12 && edad< 18) 
		{
			alert("usted es adolecente")
		}
	
}//FIN DE LA FUNCIÓN