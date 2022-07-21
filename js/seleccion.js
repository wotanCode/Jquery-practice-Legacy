/*Primera parte de selectores... el Click me*/
var x;
x = $(document);
x.ready(inicializar);

function inicializar() {
	var x;
	x = $("#jquery-hola");
	x.click(clickHecho);
}

function clickHecho() {
	var x;
	x = $("#jquery-hola");
	x.css("color", "green"); //Si quisiera añadir mas css simplemente es el codigo siguiente
	x.css("background-color", "yellow");
	x.css("font-size", "24px");
	x.css("border", "green");
	x.css("color", "1px solid black");
	x.css("height", "400px");
}

/*Seguna parte de selectores. Selectores de clase*/

var x;
x = $(document);
x.ready(resaltar);

function resaltar() {
	var x;
	x = $("#boton");
	x.click(resaltame);
}
function resaltame() {
	var x
	x = $(".claseprimaria");
	x.css("background-color", "yellow");
}

/*Tercera parte de selectores. Selectores por etiqueta*/

var x;
x = $(document);
x.ready(inicializar);

function inicializar() {
	var x;
	x = $("h1");
	x.click(presionar);
}

function presionar() {
	var x;
	x = $(this); /*En este caso solo pone el que hice click chico, si hubiera querido que todos se pusiera chicos uso este codigo.  x=$("h1");*/
	x.css("font-size", "12px");
}

/*Tercera parte de selectores. Selectores por atributo*/

var x;
x = $(document);
x.ready(inicio);

function inicio() {
	var x = $("#revelar");
	x.click(mostrar);
}

function mostrar() {
	var x = $("[href]");/*NOTA
	Si hubiera querido que busque un valor de href, por ejemplo todos los que tengan de valor # el codigo es
	var x=$("[href='#']");
	Si hubiera querido todo lo diferente a # el codigo es
	var x=$("[href!='#']");
	El problema es que este busca absolutametne todo, incluyendo etiquetas fuera de href
	Si hubiera que buscara por cadenas de texto similares a algo en mi codigo el codigo seria
	var x=$("[href$='.jpg']");
	Este codigo buscara cadenas de caracteres que terminen en .jpg*/
	x.css("background", "yellow")
}
