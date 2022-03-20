/*Camila viñas velazquez
  Div e Ej 10 IF
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var aleatorio = Math.random();  //Math va con mayus
	var enteroAleatorio;

//Math.floor(Math.random() * (max - min)) + min
	enteroAleatorio = Math.floor(aleatorio* (10 - 1 + 1) + 1);

	if (enteroAleatorio > 8)
	{
		alert("Su nota es " + enteroAleatorio+  " EXCELENTE");
	}

	else if (enteroAleatorio< 4 )
		{
			alert("Su nota es " + enteroAleatorio+ " Vamos, la proxima se puede");
		}
		
		else
		{
			alert("Su nota es " + enteroAleatorio+ " APROBÓ");
		}
	}
//FIN DE LA FUNCIÓN