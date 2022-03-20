/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	//declaro variables
	var i; //variable de control
	contador =0 ;

	while (contador<10)
	{
		//lo que voy a mostrar
		document.write("El numero a mostrar es: " + (contador + 1) + "<br>");

		//cada vez que itere
		contador = contador+1; //contador
	}
}

/*
otra forma de resolver

var i; //variable de control
i = 0   inicializamos la variable de control

	while (i<11)
	{
		//cada vez que itere
			i = i+1
		//lo que voy a mostrar
		document.write("El numero a mostrar es: " + i + "<br>")

		

	}

*/