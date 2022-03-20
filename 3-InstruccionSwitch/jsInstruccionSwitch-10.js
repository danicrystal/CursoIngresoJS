function mostrar()
{
	var estacion;
	var destino;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "No se viaja";
					break;			
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
				case "Cordoba":
					mensaje = "No se viaja";
					break;
					
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja";
					break;
			}
			break;
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja";
					break;
			}
			break;
		default:
			mensaje = "Se viaja";	

	}
	alert (mensaje)


}//FIN DE LA FUNCIÓN