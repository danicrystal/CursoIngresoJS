/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;

	var descuento;

	var nuevoImporte;

	importe = parseInt(document.getElementById("txtIdImporte").value);
    //claculo para agregar el porcentaje de sueldo
    descuento = importe * 25 / 100;
    // para conseguir el sueldo nuevo se suman el sueldo viejo mas el aumento
	nuevoImporte = importe - descuento;
    //se pone al reves ya que el origen es la variable
	document.getElementById("txtIdResultado").value = nuevoImporte;

}
//txtIdImporte
//txtIdResultado