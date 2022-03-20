/*
Camila Viñas Velazquez
Div E
EJ 5 SWITCH 
*/
function mostrar()
{
	//declaro variable
	var horaDelDia

	// tomo el dato
	horaDelDia=document.getElementById("txtIdHora").value;

	switch (horaDelDia)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana.";
			break;
		default:
			mensaje = "No es de mañana"					
	}
	
	alert (mensaje);
	



}//FIN DE LA FUNCIÓN