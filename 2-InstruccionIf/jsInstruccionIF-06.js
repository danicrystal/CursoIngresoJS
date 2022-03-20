/*
Camila Viñas Vealzquez
DIV E 
EJ 6 IF bis
*/
function mostrar() {
	//declaramos variable
	var edad;
	var texto;
	//definimos variable
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if (edad>4 && edad< 13  ) {// si es niño
		texto = "Es niño";
	}
	//si es adolescente
	else{
		if (edad>= 13 && edad <= 17) { // si es adolescente
			texto = "Es adolescente";
		}
		else{
			// si es mayor de edad
			if (edad>17 && edad < 70)
			{
				texto = "Es mayor de edad";
			}
			//si es bebe
			else {
				if (edad <= 3)
				{
					texto = "Es bebe";
				}
				// si es anciano
				else {
					texto = "Es anciano";
				}
			}
		}
	}
	txtIdEdad.value = texto;
}//FIN DE LA FUNCIÓN