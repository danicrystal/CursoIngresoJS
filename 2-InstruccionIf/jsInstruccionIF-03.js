/*Camila Viñas Velazquez
  DIV E
  EJ 3 if
*/  
function mostrar()
{
	//declaramos variable
	var edad;
	//definimos variable
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

    if(edad >= 18 ) //condicional verdadera o falsa
	{
		alert("es mayor de edad");//si es mayor de edad

	} 
	else
	{
		alert("Es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN