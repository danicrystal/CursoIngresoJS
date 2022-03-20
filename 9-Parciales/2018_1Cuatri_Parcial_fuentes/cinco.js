/*
Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los 
datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad
*/
function mostrar()
{
    var nombre;
    var tipo;
    var sangre;
    var edad;
    var sexo;
    var respuesta;

    var contadorReptil=0;//a
    var acumuladorEdadReptil=0;//a
    var promedioEdadReptil;//a

    var flagJoven=0;//b
    var tipoJoven;//b
    var sexoJoven;//b
    var edadJoven;//b

    var contadorAves=0;//c
    var contadorMamiferos=0;//c
    var contadorTotal;//c
    var porcentajeAves;//c

    var mensaje;//d

    do
    {
        nombre = prompt("Ingrese el nombre de su mascota").toLowerCase();
        while(nombre.length < 3 || nombre.length > 8)
        {
          nombre = prompt("Error.Ingrese el nombre de su mascota.").toLowerCase();
        }

        tipo= prompt("Ingrese el tipo de mamifero (mamifero - ave - reptil)").toLowerCase();
        while(tipo!="mamifero" && tipo!="ave" && tipo!="reptil")
        {
            tipo= prompt("Error.Ingrese el tipo de mamifero (mamifero - ave - reptil)").toLowerCase();
        }

        edad = parseInt(prompt("Ingrese la edad de su mascota (mayor a 0)"));
        while(edad<1)
        {
            edad = parseInt(prompt("Error.Ingrese la edad de su mascota (mayor a 0)"));
        }

        if(tipo == "reptil")
        {
            sangre = "fria";
            contadorReptil++;
            acumuladorEdadReptil=acumuladorEdadReptil+edad;
        }
        else
        {
            sangre = prompt("Ingrese que tipo de sangre es.( fria, calida)").toLowerCase();
            while(sangre != "fria" && sangre != "calida")
            {
            sangre = prompt("Error.Ingrese que tipo de sangre es.( fria, calida)").toLowerCase();

            }
        }

        sexo = prompt("Ingrese el sexo de su mascota (h o m)").toLowerCase();
        while(!(sexo == 'h'|| sexo=='m' ))
        {
            sexo = prompt("Error.Ingrese su sexo (h - m)").toLowerCase();
        }

        if(edad<edadJoven || flagJoven==0)
        {
            edadJoven = edad;
            tipoJoven= tipo;
            sexoJoven = sexo;
        }

        switch(tipo)
        {
            case "ave":
                contadorAves++;
                break;
            case "mamifero":
                contadorMamiferos++;
                break;    

        }

        if(contadorAves>contadorMamiferos && contadorAves>contadorReptil)
        {
            mensaje = "Hay mas aves"
        }
        else if(contadorMamiferos>contadorReptil)
        {
            mensaje = "hay mas mamiferos"
        }
        else
        {
            mensaje = "Hay mas reptiles"
        }

        respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}

    }while (respuesta=="si")

    promedioEdadReptil = acumuladorEdadReptil/contadorReptil;

    contadorTotal = contadorAves + contadorReptil + contadorMamiferos;
    porcentajeAves = (contadorAves/contadorTotal)*100;

    //a- Promedio de edad de los reptiles
    document.write("<br>El promedio de edad de los reptiles es: " + promedioEdadReptil);
    //b- tipo y sexo de la mascota mas joven
    document.write("<br>El tipo de la mascota mas joven es: " + tipoJoven + " Y su sexo es : " + sexoJoven);
    //c- Del total de mascotas que porcentaje son aves
    document.write("<br>El porcentaje de aves es: " + porcentajeAves);
    //d- De que tipo de mascota hay mas cantidad
    document.write("<br>"+mensaje);
}