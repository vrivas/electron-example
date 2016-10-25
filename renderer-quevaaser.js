var remote=require('electron').remote;
var tc=remote.getGlobal("consts").tecomos;
var tm=remote.getGlobal("consts").temuelos;
var div=document.getElementById('div-resultado');
div.innerHTML="Tengo "
  +tc.length+" motivos para comerte y "
  +tm.length+" motivos para molerte, así que he decidido que... ";

if( tc.length>tm.length ) {
  div.innerHTML+='<strong>te amo con toda el alma.</strong>';
}
if( tm.length>tc.length ) {
  div.innerHTML+='<strong>eres un ser abyecto y despreciable.</strong>';
}
if( tm.length==tc.length ) {
  div.innerHTML+='<strong>necesito otra semana para decidirme.</strong>';
}
