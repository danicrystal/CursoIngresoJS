/*
Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)
*/
function mostrar()
{
    var tipo;
    var origen;
    var precio;
    var respuesta;

    var contadorMuñecas=0;//a
    var contadorRompecabezas=0;//a
    var contadorPelota=0;//a
    var mensaje;//a

    var acumuladorImportado=0;//b
    var contadorImportado=0;//b
    var promedio;//b

    var acumuladorNacional=0;//c
    var acumuladorTotal;//c

    var flagRompecabezas=0;//d
    var precioRompecabezas;//d

    var precioFinalConIva;
    


    do
    {
        tipo=prompt("Ingrese el tipo de juguete(muñeca - rompecabezas - pelota)");
        while(tipo!="muñeca" && tipo!="rompecabezas" && tipo!="pelota")
        {
            tipo=prompt("Error.Ingrese el tipo de juguete (muñeca - rompecabezas - pelota)").toLowerCase();
        }

        origen =prompt("Ingrese el origen (nacional - importado)");
        while(!(origen=="nacional" || origen=="importado"))
        {
            origen =prompt("Error.Ingrese el origen (nacional - importado)");
        }

        precio = parseInt(prompt("Ingrese el precio (entre 1000 y 5000"));
        while(precio<1000 && precio>5000)
        {
            precio = parseInt(prompt("Error.Ingrese el precio (entre 1000 y 5000"));
        }
        //fin ingreso datos

        switch(tipo)
        {
            case "muñeca":
                contadorMuñecas++;
                break;
            case "pelota":
                contadorPelota++;
                break;
            case "rompecabezas":
                contadorRompecabezas++;
                break;        
        }

        if(origen =="importado")
        {
            contadorImportado++;
            acumuladorImportado=acumuladorImportado+precio;
        }
        else
        {
            acumuladorNacional=acumuladorNacional+precio;
        }

        if(origen=="nacional" && tipo=="rompecabezas") 
        {

            if(precio<precioRompecabezas || flagRompecabezas==0)
            {
                precioRompecabezas=precio;
                flagRompecabezas==1;
            }
        }

        respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}

    }while (respuesta=="si")

    if(contadorMuñecas>contadorPelota && contadorMuñecas>contadorRompecabezas)
    {
        mensaje = "El tipo mas vendido es muñeca";
    }
    else if (contadorPelota>contadorRompecabezas)
    {
        mensaje = "El tipo mas comun es pelota";
    }
    else 
    {
        mensaje = "El tipo mas comun es rompecabezas";
    }

    promedio = acumuladorImportado/contadorImportado;

    acumuladorTotal = acumuladorImportado+ acumuladorNacional;

    iva = (acumuladorTotal * 21) / 100;
    

    //a- El tipo de juguete mas vendido
    document.write("<br>" + mensaje);
    //b- El promedio de precio de los juguetes importados
    document.write("<br>El promedio de precio de los juguetes importados es: "+ promedio);
    //c- La recaudacion total
    document.write("<br>La recaudacion total es: "+acumuladorTotal);
    //d- Cual es el precio del rompecabezas nacional mas barato
    document.write("<br> el precio del rompecabezas nacional mas barato es: " + precioRompecabezas);
    //e- Cuanto se percibio de iva en total (es el 21% de las ventas)
    document.write("<br>Se percibio de iva en total: " + iva);
}