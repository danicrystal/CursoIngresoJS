/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	; //variable de control
	contador =10 ;

	while (contador>0)
	{
		//lo que voy a mostrar
		document.write("El numero a mostrar es: " + (contador - 1) + "<br>");

		//cada vez que itere
		contador = contador-1; //contador
	}
}
//FIN DE LA FUNCIÓN