/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;
	contador=0;
	acumulador=0;
	respuesta='si';
	

	while (respuesta == "si" )

	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		
		acumulador = acumulador + numero;
		contador = contador + 1;
		
		respuesta = prompt ("¿Quiere seguir ingresando numeros? (si o no)");
		while(!(respuesta == "si"|| respuesta == "no"))
		{
			respuesta = prompt ("Error. ¿Quiere seguir ingresando numeros? (si o no)");
		}

		
	}

	promedio = acumulador / contador;
	


	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value= promedio;

}//FIN DE LA FUNCIÓN