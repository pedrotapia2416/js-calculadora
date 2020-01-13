var calculadora = {

//Inicializador para eventos y formato de botones.
init: (function(){
	this.formatoBotones(".tecla");
	this.asignarBotones();
}),

// Asignar eventos a los botones
asignarBotones: function(){
	document.getElementById("1").addEventListener("click",n1);
	document.getElementById("2").addEventListener("click",n2);
	document.getElementById("3").addEventListener("click",n3);
	document.getElementById("4").addEventListener("click",n4);
	document.getElementById("5").addEventListener("click",n5);
	document.getElementById("6").addEventListener("click",n6);
	document.getElementById("7").addEventListener("click",n7);
	document.getElementById("8").addEventListener("click",n8);
	document.getElementById("9").addEventListener("click",n9);
	document.getElementById("0").addEventListener("click",n0);
	document.getElementById("on").addEventListener("click",on);
	document.getElementById("sign").addEventListener("click",signo);
	document.getElementById("raiz").addEventListener("click",raiz);
	document.getElementById("dividido").addEventListener("click",division);
	document.getElementById("por").addEventListener("click",multiplicacion);
	document.getElementById("menos").addEventListener("click",resta);
	document.getElementById("punto").addEventListener("click",punto);
	document.getElementById("igual").addEventListener("click",igual);
	document.getElementById("mas").addEventListener("click",suma);

function n1() {
	calculadora.numero("1")
}
function n2() {
	calculadora.numero("2")
}
function n3() {
	calculadora.numero("3")
}
function n4() {
	calculadora.numero("4")
}
function n5() {
	calculadora.numero("5")
}
function n6() {
	calculadora.numero("6")
}
function n7() {
	calculadora.numero("7")
}
function n8() {
	calculadora.numero("8")
}
function n9() {
	calculadora.numero("9")
}
function n0() {
	calculadora.numero("0")
}
function on() {
	calculadora.on()
}
function signo() {
	calculadora.signo()
}
function raiz() {
	 calculadora.operaciones("raiz")
}
function division() {
	calculadora.operaciones("/")
}
function multiplicacion() {
	calculadora.operaciones("*")
}
function suma() {
	calculadora.operaciones("+")
}
function resta() {
	calculadora.operaciones("-")
}
function punto() {
	calculadora.punto()
}
function igual() {
	calculadora.resolver()
}
},

//ingreso de numeros
numero: function(valor){
	if (this.visualizador.length < 8) {
		if (this.visualizador=="0") {
			this.visualizador = "";
			this.visualizador = this.visualizador + valor;
		} else {
			this.visualizador = this.visualizador + valor;
		}
	this.visualizar();
	}
},

visualizar: function(){
	this.visor.innerHTML = this.visualizador;
},

//Valores Base
visualizador: "0",
operacion: "",
numN: 0,
numNM: 0,
numNMM: 0,
resultado: 0,
igual: false,


//Boton ON - Clear
on: function(){
this.visualizador = "0";
this.operacion = "";
this.numN = 0;
this.numNM = 0;
this.resultado = 0;
this.igual = false;
this.numNMM = 0;
this.visualizar();
},


//ingreso Operacion
operaciones: function(oper){
	this.numN = parseFloat(this.visualizador);
	this.visualizador = "";
	this.operacion = oper;
	this.igual = false;
	this.visualizar();
},

//Realizar Operacion
realizarOperacion: function(numN, numNM, operacion){
	switch(operacion){
		case "+":
			this.resultado = eval(numN + numNM);
		break;
		case "-":
			this.resultado = eval(numN - numNM);
		break;
		case "*":
			this.resultado = eval(numN * numNM);
		break;
		case "/":
			this.resultado = eval(numN / numNM);
	}
},

resolver: function(){
	if(!this.igual){
		this.numNM = parseFloat(this.visualizador);
		this.numNMM = this.numNM;
		this.realizarOperacion(this.numN, this.numNM, this.operacion);
	} else {
		this.realizarOperacion(this.numN, this.numNMM, this.operacion);
	}
	this.numN = this.resultado;
	this.visualizador = "";
	if (this.resultado.toString().length < 9){
		this.visualizador = this.resultado.toString();
	} else {
		this.visualizador = this.resultado.toString().slice(0,8) + "e";
	}
	this.igual = true;
	this.visualizar();
},

// Cambiar Signo
signo: function(){
	if (this.visualizador !="0") {
		var sig;
		if (this.visualizador.charAt(0)=="-") {
			sig = this.visualizador.slice(1);
		}	else {
			sig = "-" + this.visualizador;
		}
	this.visualizador = "";
	this.visualizador = sig;
	this.visualizar();
	}
},

// Decimal
punto: function(){
	if (this.visualizador.indexOf(".")== -1) {
		if (this.visualizador == ""){
			this.visualizador = this.visualizador + "0.";
		} else {
			this.visualizador = this.visualizador + ".";
		}
		this.visualizar();
	}
},


//Formato de botones
formatoBotones: function(selector){
	var x = document.querySelectorAll(selector);
	for (var i = 0; i<x.length;i++) {
		x[i].onmouseover = this.aprietaBoton;
		x[i].onmouseleave = this.sueltoBoton;
	};
},

aprietaBoton: function(event){
	calculadora.botonChico(event.target);
},

sueltoBoton: function(event){
	calculadora.botonNormal(event.target);
},

//Formato de botones

botonChico: function(elemento){
	var ch = elemento.class;
	if (ch = "tecla" ) {
		elemento.style.padding = "1px"
	}
},

botonNormal: function(elemento){
	var nm = elemento.class;
	if (nm = "tecla" ) {
		elemento.style.padding = "0px";
	}
},

visor: document.getElementById("display"),



};
calculadora.init();
