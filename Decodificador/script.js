var inputTexto=document.querySelector("#input-texto");
var btnCripto=document.querySelector("#btn-cripto");

var msg=document.querySelector("#msg");
btnCripto.onclick=mostraMsg;

var btnCopy=document.querySelector("#btn-copy");
btnCopy.onclick=copiaMsg;

var btnDescripto=document.querySelector("#btn-descripto");
btnDescripto.onclick=mostraMsg2;

var teste=false;

function testaMsg(texto){
	if(texto.match(/[^a-z]/g)){
		teste=true;
	}else{
		teste=false;
	}
	return teste;
}

function mostraMsg(event){
	event.preventDefault();
	teste=testaMsg(inputTexto.value);
	if(teste==true){
		alert("Apenas letras minúsculas, sem caracteres especiais ou números");
	}else{
	msg.value=criptografa(inputTexto.value);
	}
}

function copiaMsg(){
	msg.select();
	document.execCommand("copy");
	msg.value="";
	inputTexto.value="";
}

function mostraMsg2(event){
	event.preventDefault();
	msg.value=descriptografa(inputTexto.value);
}

function criptografa(texto){
	var textoCripto=[];
	for(var i=0;i<texto.length;i++){
		if(texto[i]=="e"){
			textoCripto[i]="enter";
		}else if(texto[i]=="i"){
			textoCripto[i]="imes";
		}else if(texto[i]=="a"){
			textoCripto[i]="ai";
		}else if(texto[i]=="o"){
			textoCripto[i]="ober";
		}else if(texto[i]=="u"){
			textoCripto[i]="ufat";
		}
		else{
			textoCripto[i]=texto[i];
		}
	}
	return textoCripto.join("");
}

function descriptografa(texto){
		var textoDescripto=
		texto.replace(/enter/g,"e")
		.replace(/imes/g,"i")
		.replace(/ai/g,"a")
		.replace(/ober/g,"o")
		.replace(/ufat/g,"u");
		return textoDescripto;
}

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/
