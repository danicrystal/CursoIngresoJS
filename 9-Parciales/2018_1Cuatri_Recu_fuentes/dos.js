/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan 
nombre , 
edad, 
sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y 
temperatura corporal.

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/ 
function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var estado;
    var temperatura;
    var respuesta;

    var flagTemperatura=0;//a
    var nombreTemperatura;//a
    var masTemperatura;//a

    var contadorViudos=0;
    var contadorViudosMayor=0;
    var contadorSolteros=0;

    do 
    {
        nombre = prompt("Ingrese su nombre.");

        edad =parseInt(prompt("Ingrese su edad."));
        while(edad<0)
        {
            edad =parseInt(prompt("Ingrese su edad."));
        }

        sexo = prompt("Ingrese su sexo (f - m)").toLowerCase();
        while(!(sexo == 'f'|| sexo=='m'))
        {
            sexo = prompt("Error.Ingrese su sexo (f - m)").toLowerCase();
        }

        estado = prompt("Ingrese su estado civil (soltero, casado o viudo)")
        while(estado!="soltero" && estado!="casado" && estado!="viudo")
        {
            estado = prompt("Error.Ingrese su estado civil (soltero, casado o viudo)")
        }

        temperatura=parseInt(prompt("Ingrese su temperatura"));
        while(temperatura>40)
        {
            temperatura=parseInt(prompt("Usted no deberia volar.Ingrese su temperatura"));
        }

        if(temperatura>masTemperatura || flagTemperatura==0)
        {
            masTemperatura=temperatura;
            nombreTemperatura=nombre;
            flagTemperatura=1;
        }
        
        if(sexo=="m")
        {

            switch(estado)
            {
                case "viudo":
                        contadorViudos++;
                    break;
                case "soltero":
                    contadorSolteros++;
                    break;

            }
        }

        if(edad>18)
        {
            contadorViudosMayor++;
        }


        respuesta = prompt("desea seguir ingresando datos? (si o no)").toLowerCase();
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("error.desea seguir ingresando datos? (si o no)").toLowerCase();
		}


    }while(respuesta=="si")

    //a) El nombre de la persona con mas temperatura.
    document.write("<br>El nombre de la persona con mas temperatura es: "+nombreTemperatura);
    //b) Cuantos mayores de edad estan viudos
    document.write("<br>Los mayores de edad que estan viudos es :" + contadorViudosMayor);
    //c) La cantidad de hombres que hay solteros o viudos.

    //d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
    //e) El promedio de edad entre los hombres solteros.
  
}
