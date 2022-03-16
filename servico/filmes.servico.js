import repositorio from "../repositorio/filmes.repositorio.rest.js";

function adicionarFilme(filme) {
  const anoCorrente = new Date().getFullYear();
  if (filme.ano > anoCorrente) {
    throw Error("Não são permitidos filmes em datas futuras");
  }
  repositorio.adicionarFilme(filme);
}

function removerFilme(filmeARemover) {
  const indiceFilme = repositorio.getId(filmeARemover);
  repositorio.removerFilme(indiceFilme);
}

function getQtdeFilmes() {
  return repositorio.getQtdeFilmes();
}

export default {
  adicionarFilme,
  removerFilme,
  getQtdeFilmes,
};
