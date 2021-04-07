inicioDeJogo();

function inicioDeJogo(){
  var result = document.getElementById("resultado");
  var tentat = "<h2> Tentativas = </h2>";
  var pontos = "<h3> Pontuação = </h3>";
  result.innerHTML = tentat + pontos;  
}


function iniciarJogo(){
  var numeroSecreto = parseInt(Math.random() * (20 - 10 + 1) + 10);
  var chances = 3;
  var tentativas = 0;
  var pontuacao = 0;
  while (chances > 0){
    tentativas += 1;
    var chute = parseInt(prompt("Digite um número entre 10 e 20:"));
    if(numeroSecreto == chute){
      alert("Acertou! Parabéns!!!");
      break;
    }else if(chute > numeroSecreto){
      alert("O número secreto é menor!");
      chances -= 1;
    }else if(chute < numeroSecreto){
      alert("O número secreto é maior!");
      chances -= 1;
    }
  }
  if (chances == 0){
    alert("Sem mais tentativas. O número secreto era " + numeroSecreto +".\nGame Over!!!");
  }
  if (chances == 3){
    pontuacao = 300;
  }else if (chances == 2){
    pontuacao = 200;
  }else if (chances == 1){
    pontuacao = 100;
  }
  
  var result = document.getElementById("resultado");
  tentat = "<h2> Tentativas = " + tentativas + "</h2>";
  pontos = "<h3> Pontuação = " + pontuacao + "</h3>";
  result.innerHTML = tentat + pontos;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnProximo").disabled = false;
}

function novaRodada(){
  inicioDeJogo();
  document.getElementById("btnProximo").disabled = true;
  document.getElementById("btnJogar").disabled = false;
}