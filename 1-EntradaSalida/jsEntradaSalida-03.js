/*
Camila Viñas Velazqez Div E
E/S Ej 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
     
	// nombreIngresado = txtIdNombre.value tmb esta bien pero lo de abajo es JS
	nombreIngresado =document.getElementById("txtIdNombre").value;

	Alert = nombreIngresado;
	
	alert("Su nombre es " + Alert);

}
//txtIdNombre
/*

entrada:
-prompt
-id
procesos:

salida:
alert

*/

