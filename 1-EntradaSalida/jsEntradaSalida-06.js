/*
Camila Viñas Velazque Div E
E/S EJ 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var num1;
	var num2;
	var resultado

	num1 = document.getElementById("txtIdNumeroUno").value;

	num2 = document.getElementById("txtIdNumeroDos").value ;

	//parseo los dos numeros
	num1 = parseInt(num1);

	num2= parseInt(num2);
    
	resultado = num1 + num2;
	//
	alert("La suma es " + resultado);
}

//txtIdNumeroUno
//txtIdNumeroDos

/*
entrada:
Id
parseInt

Proceso:

Sumar

Salida:
alert
*/