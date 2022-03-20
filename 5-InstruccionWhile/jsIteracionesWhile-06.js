function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while (contador<5)
	{
		numeroIngresado = prompt("Ingrese 5 numeros");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado

		contador = contador + 1;//modifica nuestra condicion
	}

	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN