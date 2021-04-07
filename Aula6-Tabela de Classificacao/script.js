var jogadores = [];

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores){
  var campo = "";
  var pontos = 0;
  for(var i=0; i < jogadores.length; i++){
    pontos = ((jogadores[i].vitorias * 3) + jogadores[i].empates);
    jogadores[i].pontos = pontos;
    campo += "<tr><td>" + jogadores[i].nome + "</td>";
    campo += "<td>" + jogadores[i].vitorias + "</td>";
    campo += "<td>" + jogadores[i].empates + "</td>";
    campo += "<td>" + jogadores[i].derrotas + "</td>";
    campo += "<td>" + jogadores[i].pontos + "</td>";
    campo += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    campo += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    campo += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = campo;
}

function adicionarVitoria(i){
  var jogador = jogadores[i];
  jogador.vitorias++;
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i){
  var jogador = jogadores[i];
  jogador.empates++;
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}

function adicionarJogador(){
  var campoJogador = document.querySelector('#jogador');
  if (campoJogador.value != ""){
    var jogador = {
      nome: "",
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    }
    jogador.nome = campoJogador.value;
    jogadores.push(jogador);
   } else{
    alert("Nome Inválido!!!");
   }
  exibirJogadoresNaTela(jogadores)
  campoJogador.value = "";
  console.log(jogadores);
}