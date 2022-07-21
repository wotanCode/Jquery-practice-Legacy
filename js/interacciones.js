// Para mover un objeto con dragabble
x = $(document);
x.ready(inicio);

function inicio() {
	var x = $("#muevemueve");
	x.draggable();
	x = $("#ponmedentro");
	x.droppable({ drop: soltado });
}
function soltado() {
	var x = $("#ponmedentro");
	x.css("background", "brown");
}
//Resizable para mover un ojbeto hacerlo mas grade o mas chico
l = $(document);
l.ready(inicio2);

function inicio2() {
	var x = $("#grande");
	x.resizable();
}

//Selectable Esto es para seleccionar. Sortable y mover
k = $(document);
k.ready(inicio3);

function inicio3() {
	var x = $("#seleccionable");
	x.sortable(); //Si quisiera seleccionar uso selectable
}

///EFECTOS
/*
Jquery tiene una serie de efectos que se hace
simplemente luego de haber seleccionado el objeto en una funciona poner
x.effect("");
Los valores posibles son
blind
bounce
shake
drop
explode
puff
fold
*/