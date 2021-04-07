function converterValor(){
  var campoValor = document.querySelector('#valorDolar');
  var valorDolar = parseFloat(campoValor.value);
  if(isNaN(valorDolar)){
    alert("Valor Inválido!!! Digite um outro valor!!!");
  }else{
    var valorReal = (valorDolar * 5.53).toFixed(2);
    document.getElementById("valor").innerHTML = ("R$ "+valorReal);
  } 
}