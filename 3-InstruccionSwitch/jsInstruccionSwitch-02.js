/*julio agosto abrigate que hace frio
septiembre hasta febrero ya pasmos el frio ahora calor
marzo a junio falta para el invierno
usar variable mensaje y no poner la ñ
ctrl h para reemplazar palabra
*/
function mostrar()
{
	//declaro variables
	var mesDelAnio;
	//tomamos el dato 
	mesDelAnio =document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Julio":	
		case "Agosto" :
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":				
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
		default:
			mensaje = "Falta para el invierno.";

	}

	alert (mensaje)




}//FIN DE LA FUNCIÓN