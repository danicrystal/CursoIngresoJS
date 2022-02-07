/*
Camila Viñas Velazquez DIV E
E/S EJ 9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var nuevoSueldo;
	var aumento;
	var porcentaje;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	porcentaje =parseInt(prompt("ingrese el porcentaje"));

     //claculo para agregar el porcentaje de sueldo
    aumento = sueldo * porcentaje / 100 ;
    // para conseguir el sueldo nuevo se suman el sueldo viejo mas el aumento
	nuevoSueldo = sueldo + aumento;
    //se pone al reves ya que el origen es la variable
	document.getElementById("txtIdResultado").value = nuevoSueldo;
}

//txtIdSueldo
//txtIdResultado