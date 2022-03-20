/*
Camila viñas Velazquez
DIV E
EJ 4 SWITCH 
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
31 días : enero, marzo , mayo, julio ,agosto , octubre y diciembre.
30 días : abril , junio , septiembre y noviembre.


*/
function mostrar()
{
	//declaro variable
	var mes;
	// tomo elemento
	mes= document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 dias";
			break;
		default:
			mensaje	= "Este mes tiene 31 dias";	 	
	}

	alert (mensaje);

}//FIN DE LA FUNCIÓN