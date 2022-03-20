/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/ 
function mostrar()
{
    var tipo;
    var cantidad;
    var precio;
    var respuesta;
    var precioTotal;

    var acumuladorPrecio=0;//a

    var acumuladorCantidad=0;//b
    var porcentaje;//b
    var descuento;//b
    var precioDescuento;//b

    var acumuladorArena=0;//c
    var acumuladorCal=0;//c
    var acumuladoCemento=0;//c

    var flagCaro=0;
    var precioCaro;
    var tipoCaro;
     

    do 
    {
        tipo = prompt("Ingrese el material (arena - cal - cemento)").toLowerCase();
        while (tipo!="arena" && tipo!="cal" && tipo!= "cemento")
        {
            tipo = prompt("Error.Ingrese el material (arena - cal - cemento)").toLowerCase();
        }

        cantidad=parseInt(prompt("Ingrese la cantidad de bolsas"));
        while(cantidad<1)
        {
            cantidad=parseInt(prompt("Ingrese la cantidad de bolsas"));
        }

        precio=parseInt(prompt("Ingrese el precio de la bolsa"));
        while(precio<1)
        {
            precio=parseInt(prompt("Error.Ingrese el precio de la bolsa"));
        }  

        switch(tipo)
        {
            case "arena":
                acumuladorArena=acumuladorArena+cantidad;
                break;
            case "cal":
                acumuladorCal=acumuladorCal+cantidad;
            case "cemento":
                acumuladoCemento=acumuladoCemento+cantidad
                break;      
        }

         
        if(precioCaro<precio || flagCaro==0)
        {
            precioCaro=precio;
            tipoCaro = tipo;
            flagCaro=1;
        }

        respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}

        precioTotal = cantidad*precio;
        acumuladorPrecio=acumuladorPrecio+precioTotal;

    }while(respuesta =="si")

    acumuladorCantidad=acumuladorArena+acumuladorCal+acumuladoCemento;

    if(acumuladorCantidad>30)
    {
        porcentaje= 25;
    }
    else if(acumuladorCantidad>10)
    {
        porcentaje=15;
    }
    else
    {
        porcentaje = 0;
    }

    descuento = acumuladorPrecio*porcentaje/100;
    precioDescuento=acumuladorPrecio-descuento;

    if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladoCemento)
    {
        mensaje = "El tipo con mas cantidad de bolsas es acumulador arena"
    }
    else if (acumuladorCal>acumuladoCemento)
    {
        mensaje= "El tipo con mas cantidad de bolsas es cal"
    }
    else 
    {
        mensaje= "El tipo con mas cantidad de bolsas es cemento"
    }



    //a) El importe total a pagar , bruto sin descuento y...
    document.write("<br>El improte total es: "+acumuladorPrecio);
    //b) el importe total a pagar con descuento(solo si corresponde)
    document.write("<br>El total a pagar con descuento si corresponde es: "+precioDescuento);
    //d) Informar el tipo con mas cantidad de bolsas.
    document.write("<br>"+mensaje);
    //f) El tipo mas caro
    document.write("<br>El tipo mas caro es "+tipoCaro);
}
