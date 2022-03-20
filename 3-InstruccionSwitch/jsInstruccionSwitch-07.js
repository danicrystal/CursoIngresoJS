/*
Camila Viñas Velazquez
Div E
EJ 7 SWITCH 
*/
function mostrar()
{	
	// declaro variable
	var destinoIngresado;
	//tomo el dato 
	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Se encuentra al Oeste";
			break;
		case "Cataratas":
			mensaje = "Se encuentra al Norte";
			break;
		case "Mar del plata":
			mensaje = "Se encuentra al Este";
			break;
		case "Ushuaia":
			mensaje = "Se encuentra al Norte";
			break;

	}
		
	alert(mensaje);

}//FIN DE LA FUNCIÓN