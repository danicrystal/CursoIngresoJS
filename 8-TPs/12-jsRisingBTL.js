/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos 
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes 
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;

	edadIngresada = prompt("Ingrese su edad. Entre 18 y 90 inclusive."); //ingreso la edad
	edadIngresada = parseInt(edadIngresada)
	;
	while (!(edadIngresada>17 || edadIngresada<=90))

	{
		edadIngresada = prompt ("Valor incorrecto. Reingrese un valor entre 18 y 90 inclusive.");
		edadIngresada = parseInt(edadIngresada);
	}
		
	sexoIngresado = prompt("ingrese f ó m .");//ingreso el sexo
	sexoIngresado = sexoIngresado.toLowerCase();
	while((sexoIngresado != "f" && sexoIngresado != "m"))
	{
		
		sexoIngresado = prompt("reingrese f ó m");
		sexoIngresado = sexoIngresado.toLowerCase();
	}
	//estado civil
	estadoCivilIngresado = prompt("Ingrese su estado civil 1-soltero, 2-Casado, 3-Divorciado, 4-viudo");
	estadoCivilIngresado  = parseInt(estadoCivilIngresado);
	while(isNaN(estadoCivilIngresado) || estadoCivilIngresado!=1 && estadoCivilIngresado!=2 && estadoCivilIngresado!=3 && estadoCivilIngresado!=4)
	{
		
	}
			


	



}
