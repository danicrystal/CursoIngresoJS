/*
Camila Viñas Velazqez Div E
E/S Ej 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
 	var nombre;
	var edad;
	

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value; 

	Nombre = nombre;
	Edad = edad;

	alert("su nombre es " + Nombre + " Y su edad es " + Edad);



}

