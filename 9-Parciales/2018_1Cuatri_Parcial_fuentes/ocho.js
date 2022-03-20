/*
	EJERCICIO EXTRA
Nos piden hacer un programa para saber la cantidad de tropas que llevaron al combate
entre rusia y ucrania
Nos piden
 - Nombre del grupo
 - Tanques que llevaron(entre 10 y 50)
 - cantidad de soldados (min 1000)
 - Pais(ucrania, rusia o eeuu)

Debemos informar:
 - Qué pais envio mas tanques
 - El porcentaje de soldados que posee eeuu
 - Mostrar el nombre del grupo con mas soldados de rusia
 */

function mostrar()
{
    var nombre;
    var tanques;
    var cantidadSoldados;
    var pais;
    var respuesta;

    var acumuladorTanquesU=0;//a
    var acumuladorTanquesR=0;//a
    var acumuladorTanquesE=0;//a
    var mensaje;//a

    var porcentajeSoldadosEEUU;//b
    var acumuladorSoldadosE=0;//b
    var acumuladorSoldadosU=0;//b
    var acumuladorSoldadosR=0;//b
    var acumuladorSoldadoTotal;//b

    var flagSoldado=0;
    var nombreGrupo;
    var maxSoldados;


    do{
        nombre = prompt("Ingrese el nombre del grupo").toLowerCase();

        tanques = parseInt(prompt("ingrese la cantidad de tanques (entre 10 y 50)"));
        while(tanques<10 && tanques>50)
        {
            tanques = parseInt(prompt("Error.Ingrese la cantidad de tanques (entre 10 y 50)"));
        }

        cantidadSoldados = parseInt(prompt("ingrese la cantidad de soldados (Min 1000)"));
        while(cantidadSoldados<1000)
        {
            cantidadSoldados = parseInt(prompt("Error.Ingrese la cantidad de soldados (Min 1000)"));
        }

        pais =prompt("ingrese el pais de origen (ucrania, rusia o eeuu)").toLowerCase();
        while (pais!="ucrania" && pais!="rusia" && pais!="eeuu");
        {
            pais =prompt("Error.Ingrese el pais de origen (ucrania, rusia o eeuu)").toLowerCase();
        }

        switch(pais)
        {
            case "ucrania":
                acumuladorTanquesU=acumuladorTanquesU+tanques;
                acumuladorSoldadosU=acumuladorSoldadosU+cantidadSoldados;
                break;
            case "rusia":
                acumuladorTanquesR=acumuladorTanquesR+tanques;
                acumuladorSoldadosR= acumuladorSoldadosR+cantidadSoldados;
                break;
            case "eeuu":
                acumuladorTanquesE=acumuladorTanquesE+tanques;
                acumuladorSoldadosE=acumuladorSoldadosE+cantidadSoldados;
                break;

        }
        
        respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}
        
    }while(respuesta=="si")

    if(acumuladorTanquesE>acumuladorTanquesR && acumuladorTanquesE>acumuladorTanquesU)
    {
        mensaje = "eeuu mando mas tanques";
    }
    else if (acumuladorTanquesR>acumuladorTanquesU)
    {
        mensaje = "rusia mando mas tanques";
    }
    else
    {
        mensaje = "ucrania mando mas tanques";
    }
    acumuladorSoldadoTotal=acumuladorSoldadosE+acumuladorSoldadosR+acumuladorSoldadosU;
    porcentajeSoldadosEEUU = (acumuladorSoldadosE/acumuladorSoldadoTotal)*100;

    if (acumuladorSoldadosR<acumuladorSoldadosE || acumuladorSoldadosR<acumuladorSoldadosU)
    {
        nombreGrupo = nombre;
    }

    //Qué pais envio mas tanques
    document.write("<br>"+mensaje);
    //El porcentaje de soldados que posee eeuu
    document.write("<br>El porcentaje de soldados que mando EEUU es %"+porcentajeSoldadosEEUU);
    //Mostrar el nombre del grupo con mas soldados de rusia
    document.write("<br>el nombre del grupo con mas soldados de rusia "+ nombreGrupo);

}
