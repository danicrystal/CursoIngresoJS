/*
1.	Una empresa de venta de cosméticos necesita un programa que permita la carga de 
productos vendidos, junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
•	Vendedor: Juan, María, Lucrecia
•	Tipo producto: Perfume, Shampoo o Maquillaje
•	Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a.	Promedio de ventas por cada vendedor.
b.	Cantidad de perfumes que vendió María
c.	El importe mas barato junto con el vendedor que lo vendió.
d.	El nombre del vendedor con menor comisión.

*/

function mostrar()
{

	var vendedor;
	var tipo;
	var importe;
	var respuesta;

	var contadorJuan=0;//a
	var contadorMaria=0;//a
	var contadorLucrecia=0;//a
	var acumuladorJuan=0;
	var acumuladorMaria=0;
	var acumuladorLucrecia=0;
	var promedioJuan;//a
	var promedioMaria;//a
	var promedioLucrecia;//a

	var contadorPerfumes=0;//b

	var flagBarato=0;//c
	var importeBarato;//c
	var nombreBarato;//c

	var mensaje;//d

	do
	{
		vendedor = prompt("Ingrese nombre del vendedor (juan - maria - lucrecia)").toLowerCase();
		while(vendedor!="juan" && vendedor!="maria" && vendedor!="lucrecia")
		{
			vendedor = prompt("Error.Ingrese nombre del vendedor (juan - maria - lucrecia)").toLowerCase();
		}

		tipo = prompt("Ingrese el tipo de producto(perfume- shampoo- maquillaje)").toLowerCase();
		while(!(tipo=="perfume" || tipo=="shampoo" || tipo=="maquillaje"))
		{
			tipo = prompt("Error.Ingrese el tipo de producto(perfume- shampoo- maquillaje)").toLowerCase;
		}

		importe = parseInt(prompt("ingrese el importe (mayor a 0)"));
		while(importe<0)
		{
			importe = parseInt(prompt("Error.Ingrese el importe (mayor a 0)"));
		}
		//fin de ingreso de datos

		if(vendedor=="maria" && tipo == "perfume")
		{
			contadorPerfumes++
		}

		switch(vendedor)
		{
			case "juan":
				contadorJuan++;
				acumuladorJuan=acumuladorJuan+importe;
				break;
			case "maria":
				contadorMaria++;
				acumuladorMaria=acumuladorMaria+importe;
				break;
			case "lucrecia":
				contadorLucrecia++;
				acumuladorLucrecia=acumuladorLucrecia+importe;
				break;		
		}

		if(importeBarato>importe || flagBarato==0)
		{
			importeBarato = importe;
			nombreBarato = vendedor;
			flagBarato = 1;
		}

		respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}


	}while(respuesta=="si")

	promedioJuan=acumuladorJuan/contadorJuan;
	promedioMaria=acumuladorMaria/contadorMaria;
	promedioLucrecia=acumuladorLucrecia/contadorLucrecia;

	if(acumuladorJuan<acumuladorMaria && acumuladorJuan<acumuladorLucrecia)
	{
		mensaje = "El vendedor con menor comision es juan"
	}
	else if (acumuladorMaria<acumuladorLucrecia)
	{
		mensaje = "El vendedor con menor comision es Maria"
	}
	else
	{
		mensaje = "El vendedor con menor comision es Lucrecia"
	}

	//a.	Promedio de ventas por cada vendedor.
	document.write("<br>El promedio de juan es " + promedioJuan + " el promedio de maria es " + promedioMaria + " el promedio de lucrecia es " + promedioMaria);
	//b.	Cantidad de perfumes que vendió María
	document.write("<br>La cantidad de perfumes que vendio maria es " + contadorPerfumes);
	//c.	El importe mas barato junto con el vendedor que lo vendió.
	document.write("<br>El importe mas barato es " + importeBarato + " Y lo vendio " + nombreBarato);
	//d.	El nombre del vendedor con menor comisión.
	document.write("<br>"+mensaje);

}