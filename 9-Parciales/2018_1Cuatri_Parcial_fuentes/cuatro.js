/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, 
los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/
function mostrar()
{
  var nombre;
  var carrera;
  var sexo;
  var cantidad;
  var nota;
  var edad;
  var i=0;

  var flagPromedio=0;//a
  var nombrePromedio;//a
  var mejorPromedio;//a

  var nombreJoven;//b
  var flagJoven=0;//b
  var edadJoven;//b

  var contadorQuimica=0;//c
  var contadorFisica=0;//c
  var contadorSistemas=0;//c
  var contadorTotal;//c
  var porcentajeQuimica;//c
  var porcentajeFisica;//c
  var porcentajeSistema;//c

  var flagMaterias=0;
  var edadMaterias;
  var nombreMaterias;
  var maxMaterias;

  while( i<500)
  {
    nombre = prompt("ingrese el nombre").toLowerCase();
    
    carrera = prompt("ingrese la carrera (quimica - fisica - sistemas)").toLowerCase();
    while(carrera !="quimica" && carrera != "fisica" && carrera != "sistemas")
    {
      carrera = prompt("Error. Ingrese la carrera (quimica - fisica - sistemas)").toLowerCase();
    }

    sexo = prompt("Ingrese su sexo (f - m - nb)").toLowerCase();
    while(!(sexo == 'f'|| sexo=='m' || sexo=="nb"))
    {
      sexo = prompt("Error.Ingrese su sexo (f - m - nb)").toLowerCase();
    }

    cantidad=parseInt(prompt("Ingrese la cantidad de materias (entre 1 y 5)"));
    while(cantidad<1 && cantidad>5)
    {
      cantidad=parseInt(prompt("Error.Ingrese la cantidad de materias (entre 1 y 5)"));
    }

    nota = parseInt(prompt("ingrese el promedio de la nota (entre 0 y 10)"));
    while(nota<0 && nota>10)
    {
      nota = parseInt(prompt("Error.Ingrese el promedio de la nota (entre 0 y 10)"));
    }

    edad = parseInt(prompt("Ingrese la edad"));
    while(edad<18)
    {
      edad = parseInt(prompt("Ingrese la edad"));
    }
    //fin ingreso de datos

    if(sexo=="f" && edad<edadJoven || flagJoven==0)
    {
      edadJoven = edad;
      nombreJoven = nombre;
      flagJoven = 1;
    }


   switch(carrera)
   {
      case "fisica":
        contadorFisica++;
        if (nota>mejorPromedio || flagPromedio==0 )
        {
          mejorPromedio = promedio;
          nombrePromedio=nombre;
          flagPromedio = 1;
        }
        break;
      case "quimica":
        contadorQuimica++;
        break;
      case "sistemas":
        contadorSistemas++;
        break;  
   } 

   if(carrera=="fisica" || carrera=="sistemas")
   {
     if(cantidad>maxMaterias || flagMaterias == 0)
     {
       maxMaterias = cantidad;
       edadMaterias = edad;
       nombreMaterias = nombre;
       flagMaterias = 1;
     }
   }
    
    i++
  }

  contadorTotal=contadorFisica+contadorQuimica+contadorSistemas;
  porcentajeFisica= (contadorFisica/contadorTotal)*100;
  porcentajeQuimica = (contadorQuimica/contadorTotal)*100;
  porcentajeSistema = (contadorSistemas/contadorSistemas)*100;


  //a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
  document.write("<br>El mejor promedio de fisica se llama " + nombrePromedio);
  //b) El nombre de la alumna mas joven.
  document.write("<br>El nombre de la aluman mas joven es: " + nombreJoven);
  //c) Porcentaje de estudiantes que estudia cada carrera.
  document.write("<br>El porcentaje de estudiantes que estudia fisica" + porcentajeFisica+" El porcentaje que estudia quimica " + porcentajeQuimica+ " El porcentaje ue estudia sistemas "+ porcentajeSistema);
  //d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
  document.write("<br>La edad del estudiante con mas materias es: "+edadMaterias+ "y su nombre es: " +nombreMaterias);
}
