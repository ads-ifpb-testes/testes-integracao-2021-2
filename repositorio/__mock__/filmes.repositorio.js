const colecao = [];

function adicionarFilme(filme) {
  colecao.push(filme);
}

function removerFilme(indiceFilme) {
  colecao.splice(indiceFilme, 1);
}

function getQtdeFilmes() {
  return colecao.length;
}

export default { adicionarFilme, removerFilme, getQtdeFilmes };
