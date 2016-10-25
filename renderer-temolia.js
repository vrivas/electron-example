var remote=require('electron').remote;
var tm=remote.getGlobal("consts").temuelos;

// Declara funciones
function muestraTeMuelos() {
  var div=document.getElementById('div-temuelos');
  div.innerHTML="";
  for( var i=0; i<tm.length; ++i ) {
    div.innerHTML="<div class='elemento-motivo'>"
      + (i+1) +". "+tm[i]
      + "</div>"
      + div.innerHTML;
  }
}
function aniadeTeMuelo() {
  tm.push( document.getElementById('motivo').value);
  remote.getGlobal("consts").temuelos=tm;
  muestraTeMuelos();
}

// Asigna callbacks a eventos
document.getElementById("bt-aniadir-temuelo").onclick=aniadeTeMuelo;

// Muetsra estado de temuelos
muestraTeMuelos();
