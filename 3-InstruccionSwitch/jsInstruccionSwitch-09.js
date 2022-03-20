/*
una agencia de viajes debe sacar las tarifas de los viajes ,
 se cobra $15.000 por cada estadia como base, se pide el ingreso de
 una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento
 del 10% Mar del plata tiene un descuento del 20%
 en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento
  del 10% Mar del plata tiene un aumento del 20%
  en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento
 del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/


function mostrar()
{
	//defino variables
	var destino ; 
	var estacion;
	var precioBase= 15000;
	var precioFinal;
	var aumento;

	//tomo los datos no hace falta parsear los numeros solo se parsea si el usuario los ingresa
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	


	switch (estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento = 20/100;
					break;
				case "Cordoba":
				case "Cataratas":
					aumento = -10/100;
					break;
				case "Mar del plata":
					aumento = -20/100
					break;					
			}
			break;

		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					aumento = -20/100;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10/100;
					break;
				case "Mar del plata":
					aumento = 20/100
					break;
			}
			break;

		default:
			switch (destino)
			{
				case "Bariloche":	
				case "Cataratas":
				case "Mar del plata":	
					aumento = 10/100;
					break;	
				case "Cordoba":
					aumento = 0
					break;	
			}
			break;	
	}

	precioFinal = precioBase + (precioBase*aumento);
	alert ("El costo es " + precioFinal);


}//FIN DE LA FUNCIÓN