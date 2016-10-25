var remote=require('electron').remote;
var tc=remote.getGlobal("consts").tecomos;

// Declara funciones
function muestraTeComos() {
  var div=document.getElementById('div-tecomos');
  div.innerHTML="";
  for( var i=0; i<tc.length; ++i ) {
    div.innerHTML="<div class='elemento-motivo'>"
      + (i+1) +". "+tc[i]
      + "</div>"
      + div.innerHTML;
  }
}
function aniadeTeComo() {
  tc.push( document.getElementById('motivo').value);
  remote.getGlobal("consts").tecomos=tc;
  muestraTeComos();
}

// Asigna callbacks a eventos
document.getElementById("bt-aniadir-tecomo").onclick=aniadeTeComo;

// Muestra estado de tecomos
muestraTeComos();
