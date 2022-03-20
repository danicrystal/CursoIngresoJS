/*
3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Asia”, “Asia”)
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
	var cantidadVacunas;
	var costoVuelo;
	var respuesta = "si";

	var menorCantidadVacunasEnviadas;//a
	var banderaDelPrimerVuelo = 0;//a
	var origenMenorVacunas;//a

	var sumaCostoVuelo = 0; //b

	var sumaCantidadvacunas = 0; //c
	var descuento;//c
	var precioFinal;//c
	var precioDescuento;//c

	while(respuesta=="si")
	{
		origen = prompt("ingrese el pais de origen");
		origen = origen.toLowerCase();

		while(origen!="asia" && origen!="america" && origen != "europa")
        {
        	origen=prompt("Error, ingrese el origen(asia - america - europa)");
        	origen=origen.toLowerCase();
        }

		cantidadVacunas = prompt("ingrese la cantidad de vacunas");
		cantidadVacunas = parseInt(cantidadVacunas);
		

		while(cantidadVacunas<500000 && cantidadVacunas>2500000 )
        {
        	cantidadVacunas=prompt("Error, ingrese una cantidad de vacunas vailida (entre 500000 y 2500000 inclusive )");
        	cantidadVacunas=parseInt(cantidadVacunas);
			

        }


		costoVuelo = prompt("ingrese el costo del vuelo");
		costoVuelo = parseInt(costoVuelo);
		

		while(costoVuelo<1000000 && costoVuelo>5000000)
        {
        	costoVuelo=prompt("Error, ingrese un costo valido (entre 1000000 y 5000000 inclusive )");
        	costoVuelo=parseInt(costoVuelo);
			
        }

		if (costoVuelo>=1000000 && costoVuelo<=5000000)
		{
			sumaCostoVuelo= sumaCostoVuelo + costoVuelo;
		}

		
		while (cantidadVacunas>500000 && cantidadVacunas<2500000 )
		{
			sumaCantidadvacunas= sumaCantidadvacunas + cantidadVacunas;
		}
		

		if(cantidadVacunas < menorCantidadVacunasEnviadas || banderaDelPrimerVuelo==0)
		{
			menorCantidadVacunasEnviadas = cantidadVacunas;
			origenMenorVacunas = origen;
			banderaDelPrimerVuelo = 1;
		}
		
		respuesta=prompt("Desea seguir ingresando datos?si-no");

	}

	

	// El origen que envió menor cantidad de vacunas
	document.write("El origen que mando menor cantidad de vacunas es "+ origenMenorVacunas + "<br>");
	//El total sin descuentos a pagar por los gastos de los viajes
	document.write("EL costo total sin descuento es $ " + sumaCostoVuelo + "<br>");


	if(sumaCantidadVacunas>10000000)
	{
		descuento = 25;


	}
	else if(sumaCantidadvacunas>=5000000 && sumaCantidadvacunas<= 10000000)
	{
		descuento = 15;
	}
	else
	{
		descuento= 0;
	}

	precioDescuento = sumaCostoVuelo * descuento / 100;
	precioFinal = sumaCostoVuelo - precioDescuento;
	//Informar si hubo descuento de cuanto fue y el importe final con  Descuento.
	document.write("El descuento es de %" + descuento +"y el costo final con descuento es "+precioFinal + "<br>");
	

}

