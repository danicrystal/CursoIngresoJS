/*

La aerolínea UTN viajes nos pide generar un software para vender sus packs de viajes,
la carga de datos pedirá lo siguiente:
- Nombre del piloto.
- Destino (“Ushuaia”, “Córdoba” o ”Jujuy”).
- Cantidad de personas en el avión (tiene que ser mayor a 0 y menor 250).
- Tipo de clase en la que viaja (promocional, turista, ejecutiva).
Debemos informar:
a) La clase con más pasajeros.
b) El nombre del piloto que lleva más pasajeros a Ushuaia.
c) El promedio de personas que usan la clase Ejecutiva.
*/ 
function mostrar()
{
  var nombre;
  var destino;
  var cantidadPersonas;
  var tipoClase;
  var respuesta;

  var acumuladorPasajerosPromocional=0;//A
  var acumuladorPasajerosTurista=0;//A
  var acumuladorPasajerosEjecutivo=0;//A

  var flagPiloto=0;//B
  var mayorPasajeros;//B
  var mayorNombre;
  
  
  var promedioEjecutivos;//c
  var contadorEjecutivos=0;//c

  do
  {
    nombre=prompt("ingrese el nombre del piloto.").toLowerCase();

    destino = prompt("Ingrese destino. (ushuaia - cordoba - jujuy)").toLowerCase();
    while(!(destino== "ushuaia"|| destino=="cordoba" || destino=="jujuy" ))
    {
      destino = prompt("Error ingrese un destino valido. (ushuaia - cordoba - jujuy)").toLowerCase();
    }

    cantidadPersonas = parseInt(prompt("Ingrese la cantidad de pasajeros (entre 1 y 250)"));
    while(cantidadPersonas<1 && cantidadPersonas>250)
    {
      destino = parseInt(prompt("Error ingrese una cantidad de personas valida"));
    }

    tipoClase = prompt("ingrese que tipo de clase es (promocional - turista - ejecutiva)").toLowerCase();
    while(!(tipoClase== "promocional" || tipoClase=="turista" || tipoClase=="ejecutiva" ))
    {
      tipoClase = prompt("Error ingrese un tipo de clase valido (promocional - turista - ejecutiva)").toLowerCase();
    }
    //fin de ingreso de datos

    switch(tipoClase)
    {
      case "promocional":
        acumuladorPasajerosPromocional = acumuladorPasajerosPromocional + cantidadPersonas;
        break;
      case "turista":
        acumuladorPasajerosTurista = acumuladorPasajerosTurista + cantidadPersonas;
        break;
      case "ejecutiva" :
        acumuladorPasajerosEjecutivo = acumuladorPasajerosEjecutivo + cantidadPersonas;
        contadorEjecutivos++;
        break;    
    }

    if(destino == "ushuaia" && mayorPasajeros<cantidadPersonas || flagPiloto==0 )
    {
      mayorPasajeros = cantidadPersonas;
      mayorNombre = nombre;
      flagPiloto=1;
    }
    respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
    while(!(respuesta == "si" || respuesta == "no"))
    {
      respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
    }

  }while(respuesta=="si")

  if(acumuladorPasajerosPromocional>acumuladorPasajerosTurista && acumuladorPasajerosPromocional>acumuladorPasajerosEjecutivo)
  {
    mensaje = "La promocional";
  }
  else if (acumuladorPasajerosTurista>acumuladorPasajerosEjecutivo)
  {
    mensaje = "la turista";
  }
  else
  {
    mensaje = "la ejecutiva";
  }

  promedioEjecutivos = acumuladorPasajerosEjecutivo/contadorEjecutivos;

  //a) La clase con más pasajeros.
  document.write("<br>La clase con mas pasajeros es: " + mensaje);
  //b) El nombre del piloto que lleva más pasajeros a Ushuaia.
  document.write("<br>El nombre del piloto que mas pasajeros llevo a ushuaia es: " +mayorNombre);
  //c) El promedio de personas que usan la clase Ejecutiva.
  document.write("<br>El promedio de personas que usan clase ejecutiva es: " + promedioEjecutivos);

}
