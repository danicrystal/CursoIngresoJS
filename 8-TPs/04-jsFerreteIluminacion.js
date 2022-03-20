/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos
 final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del
 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace
 un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos
 brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 

function CalcularPrecio () 
{
	var cantidadLamparitas;
	var marcaLamparita;
 	var porcentaje;
	var descuento;
	var precioFinal;
	var precio = 35;
	var iibb = precioFinal * 10 / 100; 

	//definir variables
	cantidadLamparitas = document.getElementById("txtIdCantidad").value;
	marcaLamparita = document.getElementById("Marca").value;
	cantidadLamparitas = parseInt (cantidadLamparitas);
	
	//calculo para sacar precioFinal en cada condicional
	precioLamparas = precio * cantidadLamparitas;
	descuento = precioLamparas * porcentaje / 100;
	precioFinal = precioLamparas - descuento;

 //A
 	if (cantidadLamparitas>5)
 	{
		porcentaje = 50;
		precioLamparas = precio * cantidadLamparitas;
		descuento = precioLamparas * porcentaje / 100;
		precioFinal = precioLamparas - descuento;
		
 	}
 //B
 	else
	{
	  	if (cantidadLamparitas==5 && marcaLamparita== "ArgentinaLuz")	
 		{
			porcentaje = 40;	
			precioLamparas = precio * cantidadLamparitas;
			descuento = precioLamparas * porcentaje / 100;
			precioFinal = precioLamparas - descuento;
			
 		}
 		else 
 		{
			if (cantidadLamparitas==5 && (marcaLamparita== "FelipeLamparas"||marcaLamparita== "JeLuz"||marcaLamparita=="HazIluminacion" ||marcaLamparita=="Osram" )) 
			{
				porcentaje = 30;
				precioLamparas = precio * cantidadLamparitas;
				descuento = precioLamparas * porcentaje / 100;
				precioFinal = precioLamparas - descuento;
			}
		 
 		
 //C
 			else
			{

	 			if (cantidadLamparitas==4 && (marcaLamparita== "ArgentinaLuz"|| marcaLamparita== "FelipeLamparas"))
				{
					porcentaje = 25;
					precioLamparas = precio * cantidadLamparitas;
					descuento = precioLamparas * porcentaje / 100;
					precioFinal = precioLamparas - descuento;
		
		
 				}
 				else
				{  				
					if (cantidadLamparitas==4 && (marcaLamparita== "JeLuz"||marcaLamparita=="HazIluminacion" ||marcaLamparita=="Osram" ))
					{
						porcentaje = 20;
						precioLamparas = precio * cantidadLamparitas;
						descuento = precioLamparas * porcentaje / 100;
						precioFinal = precioLamparas - descuento;				
					}
							//D
					else
					{ 
						if (cantidadLamparitas==3 && marcaLamparita== "FelipeLamparas")
						{
							porcentaje = 10;
							precioLamparas = precio * cantidadLamparitas;
							descuento = precioLamparas * porcentaje / 100;
							precioFinal = precioLamparas - descuento;
									
								
						}
						else
						{

							if (cantidadLamparitas==3 && (marcaLamparita== "JeLuz"||marcaLamparita=="HazIluminacion" ||marcaLamparita=="Osram") )
							{
								porcentaje = 5;
								precioLamparas = precio * cantidadLamparitas;
								descuento = precioLamparas * porcentaje / 100;
								precioFinal = precioLamparas - descuento;
										
							}
							else
							{
								if (cantidadLamparitas==3 && marcaLamparita== "ArgentinaLuz")
								{
									porcentaje = 15;
									precioLamparas = precio * cantidadLamparitas;
									descuento = precioLamparas * porcentaje / 100;
									precioFinal = precioLamparas - descuento;
										
								}
								else
								{
									precioLamparas = precio * cantidadLamparitas;
									precioFinal = precioLamparas;	
								}
							}
						}	
					}
				}
			}
		}
	}						
	if (precioFinal > 120) 
	{
		iibb = precioFinal * (10/100);
		precioFinal = precioFinal - iibb; 
		alert("Usted pago " + iibb + " de IIBB y su precio final es" + precioFinal );
	}
							
	document.getElementById("txtIdprecioDescuento").value = precioFinal;
}								
