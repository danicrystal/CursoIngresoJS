//Camila viñas Velazquez
// DIV E
// EJ 2 IF

function mostrar()
{
	var edad;
	//definimos variable
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

    if(edad >= 18 ) //condicional verdadera o falsa
	{
		alert("es mayor de edad");

	} 
	
}//FIN DE LA FUNCIÓN