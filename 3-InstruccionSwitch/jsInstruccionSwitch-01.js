function mostrar()
{
	//declaro variable
	var mesDelAnio;
	mensaje = "no hay eventos este mes."
	//tomamos el dato
	mesDelAnio= document.getElementById("txtIdMes").value;
	

	switch (mesDelAnio) // enteros, cadena de caracteres, caracteres
	{//un solo caracter comillas simples y comillas dobles si es frase o varias palabras
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
			break;
		case "Marzo" : 
			mensaje = "a clases!!!.";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;
		case "Diciembre" :
			mensaje = "felices fiestas !!!.";
			break;			
	}
	alert(mensaje);  
	

} //FIN DE LA FUNCIÓN