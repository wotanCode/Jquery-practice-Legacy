// JavaScript Document

//Efectos

//Ocultar y mostrar

var p;
p = $(document)
p.ready(inicializar10);

function inicializar10() {
	var x = $("#mostrar");
	x.click(muestrame);
	var x = $("#ocultar");
	x.click(ocultame);
}

function muestrame() {
	var x = $("#objetivo");
	x.show("slow");
}

function ocultame() {
	var x = $("#objetivo");
	x.hide();
}
/*Si queremos que se oculte o muestre sin animacion o mas rapido es:
x.show("fast"); Este es para que se oculte rapido
x.show(); se mostraria sin animacion*/

/*Otras opciones de esta animacion es no usar el show o el hide si no
x.fadeIn("fast"); Unicamente lo hace con transparencia, muestra
x.fadeOut("fast"); Lo mismo pero para ocultar
*/

/*Si se quiere controlar la transparencia se usa de esta manera con fadeTo
x.fadeTo("slow", 0.5); Este segundo parametro indica el niuvel de transparencia, los valores van del 1 al 0*/


//EL toggle	

var o;
o = $(document)
o.ready(inicializar11);

function inicializar11() {
	var x = $("#mostrar1");
	x.click(muestrame1);
}

function muestrame1() {
	var x = $("#objetivo1");
	x.toggle("slow");
}


//Slide
/*Otras opciones ademas de toggle, show o hide son. SlideUp y slideDown que para sustituor el show o el hide, es un barrido, y el sliderToggle que lo que hace para ambos para sustituir al toggle.*/

/*Para animaciones personalizadas ver videos de Jquery 3.4.6*/