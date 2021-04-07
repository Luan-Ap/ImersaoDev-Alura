function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme');
  var filmeFavorito = campoFilmeFavorito.value;
  validaTrailer(filmeFavorito);
  campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<iframe allowfullscreen src=" + filme + "></iframe>";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}

function validaTrailer(filme){
  if (filme.indexOf('/embed/') > -1){
    listarFilmesNaTela(filme);
  }else{
    alert("Endereço de Trailer Inválido!!!");
  }
}