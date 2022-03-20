/*Camila Viñas Velazquez DIV E
  E/S TP 2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  var ancho;
  var largo;
  var perimetro;
  var totalAlambre;

  ancho = document.getElementById("txtIdAncho").value;
  largo = document.getElementById("txtIdLargo").value;
  ancho = parseInt (ancho);
  largo = parseInt (largo);

  perimetro = (ancho + largo) * 2;

  totalAlambre = perimetro * 3;

  alert ("Se necesitaran " + totalAlambre + " metros de alambre");



}
function Circulo () 
{
	var perimetro;
  var radio;
  var totalAlambre;
  const PI = 3.14;

  radio = document.getElementById("txtIdRadio").value;
  radio = parseInt(radio);

  perimetro = 2 * PI * radio;

  totalAlambre = perimetro * 3;

  alert ("Se necesitaran " + totalAlambre + " metros de alambre");
}
function Materiales () 
{
  var ancho;
  var largo;
  var area;
  var cemento;
  var cal;
	
  ancho = (document.getElementById("txtIdAncho").value);
  largo = (document.getElementById("txtIdLargo").value);

  ancho = parseInt (ancho);
  largo = parseInt (largo);

  area = ancho * largo;
  cemento = area * 2;
  cal = area * 3;

  alert ("Se necesitaran " + cemento + " bolsas de cemento y " + cal +" bolsas de cal");

}    