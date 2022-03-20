/*
3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “America”, “Europa”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con
Descuento.*/
function mostrar()
{
	var origen;
	var cantidad;
	var costo;
	var respuesta;

	var acumuladorEuropa=0;//A
	var acumuladorAsia=0;//A
	var acumuladorAmerica=0;//A

	var acumuladorCosto=0;//B

	var costoDescuento;//c
	var costoFinal;//c
	var descuento;//c

	do
	{
		origen = prompt("ingrese el origen del vuelo.(asia - america - europa)").toLowerCase();
		while(origen != "asia" && origen != "america" && origen != "europa")
		{
			origen = prompt("Error. Ingrese el origen del vuelo.(asia - america - europa)").toLowerCase();
		}

		cantidad = parseInt(prompt("ingrese  la cantidad de vacunas (entre 500000 y 2500000)"));
		while(cantidad<500000 && cantidad>2500000)
		{
			cantidad = parseInt(prompt("ingrese  la cantidad de vacunas (entre 500000 y 2500000)"));
		}

		costo = parseInt(prompt("Ingrese el costo del vuelo (entre 1000000 y 5000000)"));
		while (costo<1000000 && costo>5000000)
		{
			costo = parseInt(prompt("Error.Ingrese el costo del vuelo (entre 1000000 y 5000000)"));
		}
		//fin ingreso de datos

		switch(origen)
		{
			case "america":
				acumuladorAmerica = acumuladorAmerica + cantidad;
				break;
			case "asia":
				acumuladorAsia = acumuladorAsia + cantidad;
				break;
			case "europa":
				acumuladorEuropa = acumuladorEuropa + cantidad;
				break;		
		}

		acumuladorCosto = acumuladorCosto + costo;

		respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}

	}while(respuesta == "si")

	if(acumuladorAmerica<acumuladorAsia && acumuladorAmerica<acumuladorEuropa)
	{
		mensaje = "Amercia mando menos vacunas";
	}
	else if (acumuladorAsia<acumuladorEuropa)
	{
		mensaje = "Asia mando menos vacunas";
	}
	else
	{
		mensaje = "Europa mando menos vacunas";
	}

	if(acumuladorCosto>10000000)
	{
		descuento = 25;
	}
	else if (acumuladorCosto>5000000 && acumuladorCosto<=10000000)
	{
		descuento = 15;
	}
	else
	{
		descuento = 0;
	}
	costoDescuento = acumuladorCosto * descuento/100;
	costoFinal = acumuladorCosto - costoDescuento;
	
	//a- El origen que envió menor cantidad de vacunas
	document.write("<br>" + mensaje);
	//b- El total sin descuentos a pagar por los gastos de los viajes
	document.write("<br>El total sin descuentos es " + acumuladorCosto)
	//c- Si en total se recibieron mas de 10 millones de vacunas se hace
	//un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
	//descuento es del 15% con menor cantidad no hay descuento.
	//Informar si hubo descuento de cuanto fue y el importe final con descuento.
	document.write("<br>El descuento fue de %" + descuento + " Y el importe final con ese descuento es: " + costoFinal )
	

}