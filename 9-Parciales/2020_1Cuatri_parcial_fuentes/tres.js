/*
Una agencia de autos nos contrata para generarle un software que permita el ingreso de 
sus autos, sin limite de ingresos, al comenzar la carga de datos debemos pedir:
- Marca.
- El Peso en kg. del auto que ingresa (tiene que estar entre 917 y 3900).
- El importe del auto en pesos (mayor a 600000).
- Validar que tipo de auto es sedan o coupé.
Debemos informar:
a) Mostrar el promedio total del importe de todos los autos que ingresaron.
b) Mostrar La marca y el importe del auto más liviano que sea sedan.
c) El auto mas pesado que sea coupé.
*/ 

function mostrar()
{
	var marca;
    var peso;
    var importe;
    var tipoCoche;
    var respuesta;

    var i=0;//a
    var acumuladorImporte=0;//a
    var promedioTotal;//a

    var marcaLiviano;//b
    var importeLiviano;//b
    var flagLiviano=0;//b
    var pesoLiviano;//b

    var marcaPesado;
    var importePesado;
    var pesoPesado;
    var flagPesado=0;


    do
    {
        marca = prompt("Ingrese la marca del coche").toLowerCase();

        peso = parseInt(prompt("ingrese el peso del coche (Entre 917 y 3900 KG)"));
        while(peso<917 && peso>3900)
        {
            peso = parseInt(prompt("Error.ingrese el peso del coche (Entre 917 y 3900 KG)"));
        }

        importe = parseInt(prompt("Ingrese el importe (mayor a 600000)"));
        acumuladorImporte = acumuladorImporte + importe;
        while(importe<600000)
        {
            importe = parseInt(prompt("Error.Ingrese el importe (mayor a 600000)"));
            acumuladorImporte = acumuladorImporte + importe;
        }

        tipoCoche = prompt("Ingrese el tipo de coche (coupe o sedan)");
        while(!(tipoCoche == "coupe" || tipoCoche == "sedan"))
        {
            tipoCoche = prompt("Error.Ingrese el tipo de coche (coupe o sedan)");
        }
        //fin de ingreso de datos


        respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
        while(!(respuesta == "si" || respuesta == "no"))
        {
            respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
        }

        if(tipoCoche =="sedan" && pesoLiviano>peso || flagLiviano==0 )
        {
            marcaLiviano = marca;
            importeLiviano = importe;
            flagLiviano=1;
        }
        else
        {
            if(pesoPesado<peso || flagPesado == 0)
            {
                marcaPesado = marca;
                importePesado = importe;
                pesoPesado = peso;
                flagPesado = 1;

            }
        }
        i++;
    }while (respuesta =="si")

    promedioTotal = acumuladorImporte/i;

    //a) Mostrar el promedio total del importe de todos los autos que ingresaron.
    document.write("<br>El promedio total es: " + promedioTotal);
    //b) Mostrar La marca y el importe del auto más liviano que sea sedan.
    document.write("<br>La Marca es: "+ marcaLiviano +" Y el importe es: "+ importeLiviano);
    //c) El auto mas pesado que sea coupé.
    document.write("<br>El auto mas pesado que es coupe es: " + marcaPesado +" que costo $"+ importePesado + " y pesa: "+ pesoPesado+"KG");
}
