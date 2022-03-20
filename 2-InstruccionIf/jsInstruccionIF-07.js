/*
Camila Viñas Velazquez
DIV E
EJ 7 IF
Al ingresar una edad menor a 18 años y un estado civil distinto
 a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO 
 ser soltero.'*/
function mostrar()
{
	var edad;
	var estadoCivil;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;
	estadoCivil = estadocivil.tolowerCase

	if (edad< 18 && estadoCivil != "soltero" ){

		alert("Es muy pequeño para NO ser soltero");

	}


}//FIN DE LA FUNCIÓN
//txtIdEdad
//estadoCivil