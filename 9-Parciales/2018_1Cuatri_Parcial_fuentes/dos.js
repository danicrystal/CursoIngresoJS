/*
2. Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los
datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna más inoculada
*/

function mostrar()
{
	var nombre;
	var edad;
	var vacuna;
	var dosis;
	var genero;
	var respuesta;

	var contadorChina=0;//A
	var acumuladorEdad=0;//A
	var promedio;//A

	var flagJoven=0;//b
	var nombreJoven;//b
	var vacunaJoven;//b
	var edadJoven;//b

	var contadorAmericana=0;//c
	var contadorAmericanaMenor=0;//c
	var vacunadosAmericanosTotal;//c
	var vacunadosMenoresAmericanos;//c

	var contadorDosisP=0;//d
	var contadorDosisS=0;//d
	var contadorDosisTotales;//d
	var VacunadosPDosis;//d

	var mensaje;//E
	var contadorRusa=0;//E


	do
	{
		nombre = prompt("Ingrese un nombre.").toLowerCase();

		edad = parseInt(prompt("Ingrese la edad.(mayor o igual a 12)"));
		while(edad<12)
		{
			edad = parseInt(prompt("Error.Ingrese la edad.(mayor o igual a 0)"));
		}

		vacuna = prompt("Ingrese su vacuna. (rusa - americana - china)").toLowerCase();
		while(vacuna!="rusa" && vacuna!= "americana" && vacuna!="china")
		{
			vacuna = prompt("Error.Ingrese su vacuna. (rusa - americana - china)").toLowerCase();
		}

		dosis = prompt("Ingrese la dosis (p (primera) o s (segunda))").toLowerCase();
		while(dosis!='p' && dosis!='s')
		{
			dosis = prompt("Error.Ingrese la dosis (p (primera) o s (segunda))").toLowerCase();
		}

		genero = prompt("Ingrese su genero (f o m)").toLowerCase();
		while(genero!='f' && genero!='m')
		{
			genero = prompt("Error.Ingrese su genero (f o m)").toLowerCase();
		}
		//fin de ingresos de datos

		if(edad>=12 && edad<18)
		{
			vacuna =="americana";
		}

		switch(vacuna)
		{
			
			case "china":
				acumuladorEdad=acumuladorEdad+edad;
				contadorChina++;
				break;
			case "americana":
				if(edad<18)
				{
					contadorAmericanaMenor;
				}
				else
				{
					contadorAmericana;
				}	
				break;
			case "rusa":
				contadorRusa++;
				break;		
		}

		if(dosis=='p')
		{
			contadorDosisP++;
		}
		else
		{
			contadorDosisS++;
		}

		if(genero == 'm' && edad<edadJoven || flagJoven == 0)
		{
			edadJoven=edad;
			nombreJoven=nombre;
			vacunaJoven=vacuna;
			flagJoven=1;
		}

		respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}
		
	}while(respuesta =="si")

	promedio = acumuladorEdad/contadorChina;

	vacunadosAmericanosTotal=contadorAmericana+contadorAmericanaMenor;
	vacunadosMenoresAmericanos=(contadorAmericanaMenor/vacunadosAmericanosTotal)*100;

	contadorDosisTotales=contadorDosisP+contadorDosisS;
	VacunadosPDosis= (contadorDosisP/contadorDosisTotales)*100;

	if(vacunadosAmericanosTotal>contadorChina && vacunadosAmericanosTotal>contadorRusa)
	{
		mensaje = "La mas inoculada es la americana"
	}
	else if (contadorChina>contadorRusa)
	{
		mensaje = "La mas inoculada es la china"
	}
	else
	{
		mensaje = "la mas inoculada es la rusa"
	}

	
	//a- Promedio de edad de los que se vacunaron con la china.
	document.write("<br>El promedio de vacunados con la china es: " + promedio);
	//b- Nombre y vacuna del masculino más joven.
	document.write("<br>El nombre del masculino mas joven es: " + nombreJoven + " y su vacuna es " + vacunaJoven);
	//c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
	document.write("<br>El porcentaje de los menores vacuandos con la americana por sobre el total es: " + vacunadosMenoresAmericanos+'%')
	//d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
	document.write("<br>El porcentaje de los vacunados con la primera dosis es " +VacunadosPDosis+'%');
	//e- Vacuna más inoculada
	document.write("<br>"+mensaje)

}


