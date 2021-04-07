var cartaSeiya = {
    nome: "Seiya de Pegaso",
    imagem: "https://thumbs.gfycat.com/CircularWelltodoAzurewingedmagpie-small.gif",
    audio: "https://www.myinstants.com/media/sounds/mteoro-de-pegaso.mp3",
    atributos: {
        ataque: 84,
        defesa: 88,
        magia: 80
    }
}

var cartaPikachu = {
    nome: "Pikachu",
    imagem: "https://pa1.narvii.com/6918/69e8b86731f6d1131752e1038770bf03cfd7c720r1-500-281_hq.gif",
    audio: "https://www.myinstants.com/media/sounds/pikachu-thunderbolt.mp3",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 80
    }
}

var cartaGoku = {
    nome: "Goku",
    imagem: "https://thumbs.gfycat.com/WarmheartedExcitableBoilweevil-small.gif",
    audio: "https://www.myinstants.com/media/sounds/goku-kamehameha-br.mp3",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 85
    }
}

var cartaSaitama = {
    nome: "Saitama",
    imagem: "https://media.tenor.com/images/1a78643f38cf7c36e91835c8290c01af/tenor.gif",
    audio: "https://www.myinstants.com/media/sounds/tmpjmo4h_fb.mp3",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100
    }
}

var cartaNaruto = {
    nome: "Naruto Uzumaki",
    imagem: "https://i.pinimg.com/originals/9a/1f/11/9a1f11839c9f9e902f09e8259805319a.gif",
    audio: "https://www.myinstants.com/media/sounds/naruto-rasenganshippuden-mp3cut.mp3",
    atributos: {
        ataque: 88,
        defesa: 75,
        magia: 90
    }
}

var cartaLuffy = {
    nome: "Monkey D. Luffy",
    imagem: "https://i.pinimg.com/originals/ff/ce/63/ffce63a1ad8c432ced533590921e122e.gif",
    audio: "https://www.myinstants.com/media/sounds/gomu-gomu-no-red-hawk-hd-one-piece-565_part.mp3",
    atributos: {
        ataque: 85,
        defesa: 90,
        magia: 70
    }
}

var cartaMaquina;
var cartaJogador;
var cartas = [cartaSeiya, cartaPikachu, cartaGoku, cartaSaitama, cartaLuffy, cartaNaruto];

var pontosJogador = 0;
var pontosMaquina = 0;

atualizaPlacar();
atualizaQtdCartas();

function atualizaQtdCartas(){
  var divQtdCartas = document.getElementById("quantidade-cartas");
  var html = "Quantidade de Cartas no Jogo: " + cartas.length;
  
  divQtdCartas.innerHTML = html;
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar');
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina";
  
  divPlacar.innerHTML = html;
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];
  cartas.splice(numeroCartaMaquina, 1);

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroCartaJogador];
  cartas.splice(numeroCartaJogador, 1);

  document.getElementById('btnSortear').disabled = true;
  document.getElementById('btnJogar').disabled = false;

  exibeCartaJogador();
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`;
  var opcoesTexto = "";
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>";
    }
  
  var html = "<div id = 'opcoes' class = 'carta-status'>";
  
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado();
  exibeCartaMaquina();
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class = "resultado-final">Jogador Venceu Rodada!!!</p>';
    pontosJogador++;
    tocaSomJogador();
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p class = "resultado-final">Máquina Venceu Rodada!!!</p>';
    pontosMaquina++;
    tocaSomMaquina();
  } else {
    htmlResultado = '<p class = "resultado-final">Rodada Empatou!!!</p>';
  }
  
  if(cartas.length == 0){
    alert("Fim de Jogo!!!");
    if (pontosJogador > pontosMaquina){
      htmlResultado = '<p class="resultado-final">O Jogador Venceu o Jogo!!!</p>';
    }else if (pontosMaquina > pontosJogador){
      htmlResultado = '<p class="resultado-final">A Máquina Venceu o Jogo!!!</p>';
    }else{
      htmlResultado = '<p class="resultado-final">Jogo Empatou!!!</p>'
    }
  }else{
    document.getElementById("btnProximaRodada").disabled = false;
  }
  
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  
  atualizaPlacar();
  atualizaQtdCartas();
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = "";
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "<br>";
    }
  
  var html = "<div id = 'opcoes' class = 'carta-status'>";
  
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}

function tocaSomJogador(){
  var audioCarta = new Audio(cartaJogador.audio);
  audioCarta.play();
}

function tocaSomMaquina(){
  var audioCarta = new Audio(cartaMaquina.audio);
  audioCarta.play();
}

function proximaRodada(){
  var divCartas = document.getElementById("cartas");
  divCartas.innerHTML = `<div id = "carta-jogador" class = "carta"></div> <div id = "carta-maquina" class = "carta"></div>`;
  
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnProximaRodada").disabled = true;
  
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "";
}