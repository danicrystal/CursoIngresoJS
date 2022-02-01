/*Camila Viñas Velazquez DIV E
  E/S TP 3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

    var farenheit;
    var centigrados;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    centigrados = (fahrenheit - 32) /1.8;


	alert(fahrenheit + "F° equivale a " + centigrados + "C°");
}

function CentigradosFahrenheit () 
{
	var centigrados;
    var fahrenheit;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = (centigrados * 1.8) + 32

    alert(centigrados + "C° equivale a " + fahrenheit + "F°")
}
