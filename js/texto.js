//Leer y sobre escribir texto

var z;
z = $(document)
z.ready(inicializar);

function inicializar() {
	var x = $("#boton1");
	x.click(leer);
	x = $("#boton2");
	x.click(escribir);
}
function leer() {
	var x = $("p");//p de parrafo
	alert(x.text());
}

function escribir() {
	var x = $("p");
	x.text("Este es un nuevo texto");
	/*text quita el texto viejo y sustituye, otras opciones son
	x.before este lo que hace es poner el texto en un elemento nuevo y anterior al que estaba
	x.after lo que hace es poner el texto en un elemento nuevo y posterior al texto
	x.prepend coloca el texto en el mismo elemento y anterior al texto viejo
	x.append coloca el texto en el mismo elemento y posterior al texto viejo
	*/
}

//Atributos

var y;
y = $(document)
y.ready(inicializar2);

function inicializar2() {
	var x = $("#boton3");
	x.click(leer);
	var x = $("#boton4");
	x.click(escribir);
	var x = $("#boton5");
	x.click(borrar);
}

function leer() {
	var x = $("table");
	alert(x.attr("border"));//attr lo que hace es leer un valor
}
function escribir() {
	var x = $("table");
	x.attr("border", "4");//attr aqui con esto escribo
}
function borrar() {
	var x = $("table");
	x.removeAttr("border"); //No es que ponga en cero, lo borra totalmente
}

//Añadir y quitar clases


var y;
z = $(document)
z.ready(inicializar3);

function inicializar3() {
	var x = $("#boton6");
	x.click(asociarClase);
	var x = $("#boton7");
	x.click(disociarClase);
}

function asociarClase() {
	var x = $("#elarticulo")
	x.addClass("noticia");
}

function disociarClase() {
	var x = $("#elarticulo")
	x.removeClass("noticia");
}

//Añadir HTML


var y;
q = $(document)
q.ready(inicializar4);

function inicializar4() {
	var x = $("#boton8");
	x.click(muestraHtml);
}

function muestraHtml() {
	var x = $("#formulario");
	x.html('<form><input type="text"><input type="submit"</form>');
}

//Añadir Sin borrar

var y;
q = $(document)
q.ready(inicializar4);

function inicializar4() {
	var x = $("#boton8");
	x.click(muestraHtml);
}

function muestraHtml() {
	var x = $("#formulario");
	x.html('<form><input type="text"><input type="submit"</form>');
}


//MouseOver y MouseOut

var w;
w = $(document)
w.ready(inicializar5);

function inicializar5() {
	var x = $("#holahola");
	x.mouseover(entraRaton);
	x.mouseout(saleRaton);
	/*Estas dos lineas se pueden resumi con esta sola linea
	x.hover(entraRaton,saleRaton);*/
}

function entraRaton() {
	$(this).css("background-color", "yellow");
}
function saleRaton() {
	$(this).css("background-color", "white");
}


//MouseMove Cuando el raton se mueve poes

var w;
w = $(document)
w.ready(inicializar6);

function inicializar6() {
	var x = $(document);
	x.mousemove(moverRaton);
}

function moverRaton() {
	var x;
	x = $("#X");
	x.text("Coordenada X= " + event.clientX);
	x = $("#Y");
	x.text("Coordenada X= " + event.clientY);
}

//MouseUp y MouseDown
var a;
a = $(document)
a.ready(inicializar7);

function inicializar7() {
	var x = $("#pulsame");
	x.mousedown(presionar);
	x.mouseup(soltar);
}

function presionar() {
	$(this).css("background-color", "red");
}
function soltar() {
	$(this).css("background-color", "blue");
}

//Doble click
var a;
c = $(document)
c.ready(inicializar8);

function inicializar8() {
	var x = $("#pulsame2");
	x.dblclick(pulsar);
	//Si quisiera que fuera solo un click el codigo es
	//x.click(pulsar);
}

function pulsar() {
	alert('has hecho doble click div');
}

//Focus a formulario
var a;
s = $(document)
s.ready(inicializar9);

function inicializar9() {
	var x = $("#usuario");
	x.focus(enfocar);
	x.blur(denfocar);
}

function enfocar() {
	var x = $("#usuario");
	x.attr("value", "");
}

function denfocar() {
	var x = $("#usuario");
	x.attr("value", "Al hacerme focus me borro");
}





