/*Camila Viñas Velazquez DIV E
  E/S TP 1 
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var pre1;
    var pre2;
    var pre3;
    var sumaTotal;

    pre1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    pre2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    pre3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumaTotal = pre1 + pre2 + pre3;

    alert("La suma es $ " + sumaTotal);


}
function Promedio () 
{
	var pre1;
    var pre2;
    var pre3;
    var sumaTotal;

    pre1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    pre2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    pre3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumaTotal = pre1 + pre2 + pre3;

    alert("El promedio es $ " + sumaTotal / 3);

}
function PrecioFinal () 
{
	var pre1;
    var pre2;
    var pre3;
    var sumaTotal;
    var masIva;
    var preFin;

    pre1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    pre2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    pre3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumaTotal = pre1 + pre2 + pre3;

    masIva = sumaTotal *21 /100;

    preFin = sumaTotal + masIva;

    alert("El precio final es $ " + preFin);
}


//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres