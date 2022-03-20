/*
Camila Viñas Velazquez
Div E
EJ 8 SWITCH 
*/
function mostrar()
{
	var destinoIngresado;

	destinoIngresado =document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Aca hace frio";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = "Aca hace calor";		
			break;
	}
	alert (mensaje);

}//FIN DE LA FUNCIÓN