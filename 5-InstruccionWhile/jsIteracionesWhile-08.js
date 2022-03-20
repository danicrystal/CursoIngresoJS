/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var numero;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta == "si")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero)

		if (numero < 0)
		{
 			multiplicacionNegativos = multiplicacionNegativos * numero;
		}
		else
		{
			sumaPositivos = sumaPositivos + numero;
		}

		respuesta = prompt ("¿Quiere seguir ingresando numeros? (si o no)");

		while(!(respuesta == "si"|| respuesta == "no"))
		{
			respuesta = prompt ("Error. ¿Quiere seguir ingresando numeros? (si o no)");
		}
	}




	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN