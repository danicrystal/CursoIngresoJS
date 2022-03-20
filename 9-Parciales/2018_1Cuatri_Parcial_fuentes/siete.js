
/*el hospital mi pueblo nos pide realizar un programa para tomar los 
siguientes datos: pedir el ingreso de datos hasta que el usuario quiera
-vacunas aplicadas validar (0 para ninguna, 1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)
-edad (validar que no sea negativo y no puede sobrepasar los 150 años)
-doctor (validar su apellido debe ser (perez, lopez,diaz))
-nombre del paciente.

a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años.
b) el menor paciente que tenga 1 dosis o más, su nombre y su edad.
c)el doctor que más pacientes tuvo 
d) sacar el promedio de edades.*/


function mostrar()
{
	var vacunas;
	var edad;
	var doctor;
	var nombre;
	var respuesta;

	var contadorNoVacunados=0;//a

	var flagPaciente=0;//b
	var edadPaciente;//b
	var nombrePaciente;//b

	var contadorPerez=0;//c
	var contadorDiaz=0;//c
	var contadorLopez=0;//c
	var mensaje;//c

	var contadorTotal;//d
	var acumuladorEdad=0;//d
	var promedio;//d

	do 
	{
		nombre = prompt("ingrese nombre del paciente.").toLowerCase();

		edad =parseInt(prompt("ingrese la edad del paciente"));
		while(edad<0 && edad>150)
		{
			edad =parseInt(prompt("Error. Ingrese la edad del paciente"));
		}

		vacunas = parseInt(prompt("Ingrese la cantidad de vacunas.(0 para ninguna, 1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)"))
		while (vacunas!=0 && vacunas != 1 && vacunas !=2 && vacunas !=3 )
		{
			vacunas = parseInt(prompt("Error.Ingrese la cantidad de vacunas.(0 para ninguna, 1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)"))
		}

		doctor = prompt("Ingrese el nombre del doctor(perez, lopez,diaz)").toLowerCase();
		while(doctor!="perez" && doctor!="lopez" && doctor!="diaz")
		{
			doctor = prompt("Error.Ingrese el nombre del doctor(perez, lopez,diaz)").toLowerCase();
		}

		if(edad>60 && vacunas==0)
		{
			contadorNoVacunados++;
		}
		switch(doctor)
		{
			case "perez":
				contadorPerez++;
				break;
			case "lopez":
				contadorLopez++;
				break;
			case "diaz":
				contadorDiaz++;
				break;		
		}
		
		if((vacunas>=1 && edad<edadPaciente) || flagPaciente==0)
		{
			edadPaciente=edad;
			nombrePaciente=nombre;
			flagPaciente=1;
		}

		respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}

		
		
		
		acumuladorEdad=acumuladorEdad+edad;
		
		
	}while(respuesta=="si")

	if(contadorPerez>contadorDiaz && contadorPerez>contadorLopez)
	{
		mensaje = "El doctor perez tuvo mas pacientes";
	}
	else if(contadorDiaz>contadorLopez)
	{
		mensaje = "El doctor diaz tuvo mas pacientes";
	}
	else
	{
		mensaje = "El doctor lopez tuvo mas pacientes";
	}
	contadorTotal=contadorDiaz+contadorLopez+contadorPerez;
	promedio=acumuladorEdad/contadorTotal;

	//a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años.
	document.write("<br>La cantidad de pacientes que no tengan vacunas y sean mayor a 60 años es: "+contadorNoVacunados);
	//b)el menor paciente que tenga 1 dosis o más, su nombre y su edad.
	document.write("<br>El paciente mas joven es: "+ nombrePaciente + " y su edad es "+ edadPaciente);
	//c)el doctor que más pacientes tuvo,
	document.write("<br>"+mensaje);
	//d)sacar el promedio de edades.
	document.write("<br>El promedio de edades es: "+promedio);
	
}//fin funcion
