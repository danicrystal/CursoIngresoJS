/*
Viñas Velazquez Camila
40458366
Div E
Ej 1 
Una reconocida empresa de desarrollo nos contratara para realizar un nuevo proyecto, necesitamos desarrollar un
software para el Hospital Italiano en el sector odontológico, que nos pide recopilar la
 información para los 5 turnos que dio en el día, para eso debemos tomar los siguientes datos:
- El apellido.
- Obra social (“Ioma”, “Osde” y “Omint”).
- Tipo de tratamiento (“Extracción”,” Caries” y “Brackets”).
- Edad (entre 0 y 150 años inclusive).
Debemos informar:
a) Promedio de edad de los que utilizaron Brackets.
b) La obra social más atendida.
c) El apellido de la persona más joven con caries.
*/
function mostrar()
{
	var apellido;
	var obraSocial;
	var tratamiento;
	var edad;
	var i=0;

	var acumuladorEdad=0;//a
	var contador=0;//a
	var promedio;//a

	var contadorIoma=0;//b
	var contadorOsde=0;//b
	var contadorOmint=0;//b
	var mensaje;

	var flagApellido=0;
	var apellidoCaries;
	var edadCaries;

	while (i<5)
	{
		apellido=prompt("Ingrese su apellido").toLowerCase();

		obraSocial=prompt("Ingrese su obra social").toLowerCase();
		while(obraSocial!="ioma" && obraSocial!="osde" && obraSocial!="omint")
		{
			obraSocial=prompt("Error.Ingrese su obra social").toLowerCase();
		}

		tratamiento = prompt("Ingrese el tratamiento.").toLowerCase();
		while(tratamiento!="extraccion" && tratamiento!="caries" && tratamiento!="brackets")
		{
			tratamiento = prompt("Error.Ingrese el tratamiento.").toLowerCase();
		}

		edad=parseInt(prompt("Ingrese su edad (entre 0 y 150 años inclusive)"));
		while(edad<0 && edad>150)
		{
			edad=parseInt(prompt("Error.Ingrese su edad (entre 0 y 150 años inclusive)"));
		}
		//fin ingreso datos
		i++;

		if(tratamiento=="brackets")
		{
			acumuladorEdad=acumuladorEdad+edad;
			contador++;
		}

		switch(obraSocial)
		{
			case "omint":
				contadorOmint++;
				break;
			case "ioma"	:
				contadorIoma++;
				break;
			case "osde":
				contadorOsde++;
				break;	
		}

		if(tratamiento == "caries" && edad<edadCaries || flagApellido==0)
		{
			edadCaries=edad;
			apellidoCaries=apellido;
			flagApellido=1;
		}

		

	}

	promedio =acumuladorEdad/contador;

	if(contadorIoma>contadorOmint && contadorIoma>contadorOsde)
	{
		mensaje = "Ioma es la mas atendida";
	}
	else if (contadorOmint>contadorOsde)
	{
		mensaje = "Omint es la mas atendida";
	}
	else 
	{
		mensaje = "Osde es la mas atendida";
	}
	

	//a) Promedio de edad de los que utilizaron Brackets.
	document.write("<br>El promedio de edad de los que utilizaron brackets es: " + promedio);
	//b) La obra social más atendida.
	document.write("<br>"+mensaje)
	//c) El apellido de la persona más joven con caries.
	document.write("<br>El apellido de la persona más joven con caries es: "+ apellidoCaries)
}
