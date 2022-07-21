//Acordeon
j = $(document);
j.ready(inicio4);

function inicio4() {
	var x = $("#acordeon");
	x.accordion(); //Esto logra el acordeon
}
//Autocompletado
h = $(document);
h.ready(inicio5);

function inicio5() {
	var posibilidades = [
		"manzana",
		"pepino",
		"pedro",
		"cambur",
		"zanahoria",
		"aguacate",
	];
	x = $("#completar");
	x.autocomplete({ source: posibilidades })
}

//Boton personalizado
g = $(document);
g.ready(inicio6);

function inicio6() {
	var x = $("#botonpersonalizado");
	x.button(); //Esto logra el acordeon
}
//Calendario
f = $(document);
f.ready(inicio7);

function inicio7() {
	var x = $("#calendario");
	x.datepicker(); //Esto logra el acordeon
}


//Dialogo
d = $(document);
d.ready(inicio8);

function inicio8() {
	var x = $("#dialogo");
	x.dialog(); //Esto logra el acordeon
}

//Barra de progreso, el valor esta representado en porcentaje
m = $(document);
m.ready(inicio9);

function inicio9() {
	var x = $("#barradeprogreso");
	x.progressbar({ value: 90 }); //Esto logra el acordeon
}

//Slider por deefecto es horizontal
n = $(document);
n.ready(inicio10);

function inicio10() {
	var x = $("#deslizador");
	x.slider();
}

//Navegar por pestañas
n = $(document);
n.ready(inicio11);

function inicio11() {
	var x = $("#pestanas");
	x.tabs();
}