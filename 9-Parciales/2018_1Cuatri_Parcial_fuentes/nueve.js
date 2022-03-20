/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
    var tipo;
    var precio;
    var cantidad;
    var marca;
    var fabricante;
    var i=0;

    var flagAlcohol=0;//a
    var precioAlcohol;//a
    var cantidadAlcohol;//a
    var fabricanteAlcohol;//a

    var acumuladorBarbijo=0;//b
    var acumuladorJabon=0;//b
    var acumuladorAlcohol=0;//b
    var contadorBarbijo=0;//b
    var contadorJabon=0;//b
    var contadorAlcohol=0;//b
    var promedioBarbijo;//b
    var promedioJabon;//b
    var promedioAlcohol;//b
    var acumuludorCantidadBarbijo=0;
    var acumuludorCantidadJabon=0;
    var acumuludorCantidadAlcohol=0;



    while(i<5)
    {
        tipo = prompt("Ingrese el tipo de producto. (barbijo - jabon - alcohol)").toLowerCase();
        while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol")
        {
            tipo = prompt("Error.Ingrese el tipo de producto. (barbijo - jabon - alcohol)").toLowerCase();
        }

        precio = parseInt(prompt("Ingrese el precio (Entre 100 y 300)"));
        while(precio<100 && precio>300)
        {
            precio = parseInt(prompt("Ingrese el precio (Entre 100 y 300)"));
        }

        cantidad = parseInt(prompt("Ingrese la cantidad de unidades (Mayor a 0 y menor a 1000)"));
        while(cantidad<0 && cantidad>1000)
        {
            cantidad = parseInt(prompt("Error.Ingrese la cantidad de unidades (Mayor a 0 y menor a 1000)"));
        }

        marca = prompt("Ingrese la marca ").toLowerCase();
        fabricante = prompt("Ingrese el fabricante").toLowerCase();

        if(precio<precioAlcohol || flagAlcohol==0)
        {
            precioAlcohol=precio;
            cantidadAlcohol=cantidad;
            fabricanteAlcohol=fabricante;
            flagAlcohol=1;
        }

        switch(tipo)
        {
            case "barbijo":
                acumuludorCantidadBarbijo=acumuludorCantidadBarbijo+cantidad;
                acumuladorBarbijo=acumuladorBarbijo+precio;
                contadorBarbijo++;
                break;
            case "jabon":
                acumuludorCantidadJabon=acumuludorCantidadJabon+cantidad;
                acumuladorJabon=acumuladorJabon+precio;
                contadorJabon++;
                break;
            case "alcohol":
                acumuludorCantidadAlcohol=acumuludorCantidadAlcohol+cantidad;
                acumuladorAlcohol=acumuladorAlcohol+precio;
                contadorAlcohol++;
                break;     
        }

        i++;
    }

    promedioBarbijo= acumuladorBarbijo/contadorBarbijo;
    promedioJabon=promedioJabon/contadorJabon;
    promedioAlcohol=acumuladorAlcohol/contadorAlcohol;

    if(acumuludorCantidadBarbijo>acumuludorCantidadAlcohol && acumuludorCantidadBarbijo>acumuludorCantidadJabon)
    {
        mensaje = "El promedio de los barbijos: " + promedioBarbijo;
    }
    else if (acumuludorCantidadAlcohol>acumuladorJabon)
    {
        mensaje = "El promedio del alcohol: " + promedioAlcohol;
    }
    else
    {
        mensaje = "El promedio del jabon es: " + promedioJabon;
    }

    

    //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
    document.write("<br>la cantidad de unidades del alcohol mas barato es: " + cantidadAlcohol + " Y su fabricante es: " + fabricanteAlcohol);
    //b) Del tipo con mas unidades, el promedio por compra
    document.write("<br>"+ mensaje);
    //c) Cuántas unidades de jabones hay en total
    document.write("<br>Hay "+ acumuludorCantidadJabon + " unidades de jabon");

}
