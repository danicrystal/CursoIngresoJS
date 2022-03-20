/*
Una reconocida empresa de desarrollo nos contratara para realizar un nuevo proyecto,
necesitamos crear un
software para el Hospital Garrahan que nos pide recopilar la información del ingreso
de niños en la semana, para eso
debemos tomar los siguientes datos:
- El nombre del niño:
- El turno de ingreso (validar: mañana, tarde y noche).
- Temperatura corporal con la que ingresa en ºC (validar que este entre 37 a 41 inclusive).
- Edad (entre 0 y 15 años inclusive).
Debemos informar:
a) La cantidad total de niños que ingresaron en la semana.
b) De los tres turnos debemos informar cual fue el turno que mayor cantidad de niños menores de 12 años
recibió.
c) El nombre del niño con más temperatura en la semana.
*/ 
 // no hace falta validar el nombre
            // no usar el isnan
            // comparaciones van afuera del while (sacar mayor sacar menor el flag)
            // promedio tambien
            // reconocer que va adentro y que va afuera
            //acumuladores adentro
            //contadores tambien
    
/* (comparacion)
if(contador1 > contador2 && contador1 > contador3)
		{
			mayorContador = "contador 1";
		}
		else
		{
			if(contador2 > contador3)
			{
				mayorContador = "contador 2";
			}
			else
			{
				mayorContador = "contador3";
			}
		}
*/

function mostrar()
{
  var apellido;
  var tipoReserva;
  var cantidad;
  var temporada;
  var respuesta;

  var contadorOtoño=0;//a
  var contadorInvierno=0;//a
  var contadorPrimavera=0;//a
  var contadorVerano=0;//a
  var mensaje;//a

  var acumuladorPersonas=0;//b
  var contadorFamiliar=0;//b
  var promedio;//b

  var acumuladorOtoño=0;//c
  



  do
  {
    apellido = prompt("Ingrese el apellido").toLowerCase();

    tipoReserva = prompt("Ingrese el tipo de reserva").toLowerCase();
    while(tipoReserva!="individual" && tipoReserva!="parejas" && tipoReserva!="familiar")
    {
      tipoReserva = prompt("Error.Ingrese el tipo de reserva").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de personas (mayor a 0 y menor a 10) "));
    while(cantidad<1 && cantidad>9)
    {
      cantidad = parseInt(prompt("Ingrese la cantidad de personas (mayor a 0 y menor a 10) "));
    }

    temporada = prompt("Ingrese la temporada(otoño, invierno, primavera y verano)").toLowerCase()
    while(temporada !="otoño" && temporada!="invierno" && temporada!="primavera" && temporada != "verano")
    {
      temporada = prompt("Error.Ingrese la temporada(otoño, invierno, primavera y verano)").toLowerCase()
    }
    //fin ingreso de datos

    if(tipoReserva=="parejas")
    {
      switch(temporada)
      {
        case "otoño":
          contadorOtoño++;
          break;
        case "invierno" :
          contadorInvierno++;
          break;
        case "primavera": 
          contadorPrimavera++
          break;
        case "verano":
          contadorVerano++;
          break;   
      }

    }

    while (tipoReserva == "familiar")
    {
      acumuladorPersonas=acumuladorPersonas+cantidad;
      contadorFamiliar++
    }

    if(temporada=="otoño")
    {
      acumuladorOtoño=acumuladorOtoño+cantidad;
    }

    respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}

  }while(respuesta=="si")

  if (contadorInvierno>contadorOtoño && contadorInvierno>contadorPrimavera && contadorInvierno>contadorVerano)
  {
    mensaje = "Invierno tiene mas parejas";
  }
  else if (contadorOtoño>contadorPrimavera && contadorOtoño>contadorVerano)
  {
    mensaje = "Otoño tiene mas parejas";
  }
  else if (contadorPrimavera>contadorVerano)
  {
    mensaje = "Primavera tiene mas parejas"
  }
  else
  {
    mensaje = "verano tiene mas parejas"
  }

  promedio=acumuladorPersonas/contadorFamiliar;

  //a) La temporada en la que reservan más parejas.
  document.write("<br>"+mensaje);
  //b) El promedio de las personas en las habitaciones familiares.
  document.write("<br> El promedio de las personas en las habitaciones familiares es " + promedio);
  //c) El total de personas que ingresaron en el hotel, en otoño.
  document.write("<br>En total ingresaron " +acumuladorOtoño + " personas en toatal en otoño");
}
      
