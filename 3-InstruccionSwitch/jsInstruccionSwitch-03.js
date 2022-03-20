
//Camila viñas Velazquez
// DIV E
// EJ 3 SWITCH

function mostrar()
{
	// declaro variables
	var mes;
	// tomamos el dato

	 mes=document.getElementById("txtIdMes").value;

	 switch(mes)
	 {
		 case "Febrero":
			 mensaje = " Este mes no tiene más de 29 días.";
			 break;
		default:
			mensaje = "Este mes tiene 30 o más días"; 	 
	 }
	
	alert (mensaje);

}//FIN DE LA FUNCIÓN