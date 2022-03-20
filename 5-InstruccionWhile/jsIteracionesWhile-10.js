/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var promedioNeg;
	var promedioPos;
	var contadorNegativo = 0; 
	var contadorPositivo = 0;
	var contadorDeCeros = 0;
	var contadorNumerosPares = 0;
	var diferencia;
	
	respuesta="si";
	

	while(respuesta == "si")
	{//pido ingresar un numero y lo parseo
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado<0) //si es negativo
		{
			sumaNegativos= sumaNegativos + numeroIngresado;
			contadorNegativo++;
		}
		else 
		{	
			if(numeroIngresado>0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;//si es positivo
				contadorPositivo++;
			}
			else 
			{
				if(numeroIngresado == 0)// contador0
				{
					contadorDeCeros++;
				}
				else
				{
					if(numeroIngresado %2 == 0)
					{											
						contadorNumerosPares++;
					}
				}	
			}
		}
		

		
		respuesta = prompt ("¿Quiere seguir ingresando numeros? (si o no)");


	}

	promedioNeg = sumaNegativos / contadorNegativo;// para sacar promedios negativos y positivos
	promedioPos = sumaPositivos / contadorPositivo;
	diferencia =sumaPositivos + (sumaNegativos) ;    // dif entre positivos y negativos

	document.write("la suma de negativos es: "+sumaNegativos+"<br>");
	document.write("la suma de positivos es: "+sumaPositivos+ "<br>");
	document.write("la cantidad de positivos es: "+contadorPositivo+ "<br>");
	document.write("la cantidad de negativos es: "+contadorNegativo+ "<br>");
	document.write("la cantidad de 0 es: "+contadorDeCeros + "<br>");
	document.write("la cantidad de numeros pares es: "+ contadorNumerosPares + "<br>");
	document.write("la diferencia entre negativos y positivos: "+diferencia+ "<br>");
	document.write("el promedio de los positivos es: "+ promedioPos+ "<br>");
	document.write("el promedio de los negativos es: "+ promedioNeg + "<br>");

}//FIN DE LA FUNCIÓN