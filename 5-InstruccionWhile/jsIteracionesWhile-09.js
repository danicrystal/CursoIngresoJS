/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var ingresoPrimerNumero;
	//iniciar variables
	ingresoPrimerNumero= false
	
	respuesta='si';
	numeroMinimo= 1000;
	numeroMaximo= -1000;
	
	

	while(respuesta == "si")
	{

		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroMaximo<numeroIngresado || ingresoPrimerNumero ==1)
		{
			numeroMaximo = numeroIngresado;
		}
		
		
		if(numeroMinimo>numeroIngresado || ingresoPrimerNumero ==1)
		{
			numeroMinimo= numeroIngresado;
			ingresoPrimerNumero= 0;
		}
	
		

		respuesta = prompt ("desea continuar ingresando numeros? (si o no)");
	}	
	

	// para mostrar algo
	document.write("el numero maximo es: " + numeroMaximo + "<br>");
	document.write("el numero minimo es: " + numeroMinimo + "<br>");
	
}//FIN DE LA FUNCIÓN
//flag 0 = true 1 = false