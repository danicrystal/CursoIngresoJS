/*
Viñas Velazquez Camila
40458366
Div E
Ej 3
Una agencia de autos usados nos contrata para desarrollarle un software que permita la venta de sus autos, sin límite
de cargas, debemos pedir los siguientes datos:
- Marca (Fiat, Ford, Renault).
- El color del auto (gris, azul, rojo).
- Nombre del vendedor.
- Validar que el kilometraje este entre (10.000 y 100000 kilómetros).
Debemos informar:
a) El nombre del vendedor que vendió el auto con más kilometraje.
b) El porcentaje de autos azules que se vendieron.
c) La marca del auto rojo con menos kilometraje. 
*/
function mostrar()
{
	var marca;
	var color;
	var nombre;
	var kilometraje;
	var respuesta;

	var flagVendedor=0;
	var nombreVendedor;
	var kilometrajeVendedor;

	var contadorAzul=0;
	var contadorGris=0;
	var contadorRojo=0;
	var contadorTotal;
	var porcentaje;

	var flagAuto=0
	var marcaKilometraje;
	

	do{
		marca = prompt("Ingrese la marca (fiat - ford - renault)").toLowerCase();
		while(marca!= "fiat" && marca!= "ford" && marca != "renault")
		{
			marca = prompt("Error.Ingrese la marca").toLowerCase();
		}

		color = prompt("Ingrese el color (gris - azul - rojo)").toLowerCase();
		while(color!= "gris" && color!="azul" && color!= "rojo")
		{
			color = prompt("Error.Ingrese el color (gris - azul - rojo)").toLowerCase();
		}

		nombre = prompt("Ingrese el nombre del vendedor").toLowerCase();

		kilometraje = parseInt(prompt("Ingrese el kilometraje (Entre 10000 y 100000)"));
		while (kilometraje<10000 && kilometraje>100000)
		{
			kilometraje = parseInt(prompt("Ingrese el kilometraje (Entre 10000 y 100000)"));
		}
		//fin ingreso de datos

		if(kilometraje>kilometrajeVendedor || flagVendedor==0)
		{
			kilometrajeVendedor=kilometraje;
			nombreVendedor=nombre;
			flagVendedor=1;
		}

		switch(color)
		{
			case "azul":
				contadorAzul++;
				break;
			case "gris":
				contadorGris++;
				break;
			case "rojo":
				contadorRojo++;
				break;
					
		}

		if (color =="rojo" && kilometraje<kilometrajeVendedor || flagAuto==0)
		{
			kilometrajeVendedor=kilometraje;
			marcaKilometraje=marca;
			flagAuto=1;

		}

		respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}

	}while(respuesta=="si")

	contadorTotal=contadorAzul+contadorGris+contadorRojo;
	porcentaje = contadorAzul/contadorTotal*100;

	//a) El nombre del vendedor que vendió el auto con más kilometraje.
	document.write("<br> El nombre del vendedor que vendió el auto con más kilometraje es : " + nombreVendedor);
	//b) El porcentaje de autos azules que se vendieron.
	document.write("<br>El porcentaje de autos azules que se vendieron es: %"+porcentaje);
	//c) La marca del auto rojo con menos kilometraje.
	document.write("<br>La marca del auto rojo con menos kilometraje es: " + marcaKilometraje);
}
