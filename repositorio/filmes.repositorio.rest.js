import request from "sync-request";

const baseUrl = "http://localhost:3000/filmes";

function adicionarFilme(filme) {
  const addFilmeResponse = request("POST", baseUrl, {
    json: filme,
  });
}

function removerFilme(indiceFilme) {
  const removerFilmeResponse = request("DELETE", baseUrl + "/" + indiceFilme);
}

function getId(filmeARemover) {
  const getIdResponse = request("GET", `${baseUrl}?q=${filmeARemover.nome}`);
  const colecao = JSON.parse(getIdResponse.getBody());
  return colecao.length > 0 ? colecao[0].id : -1;
}

function getFilmes() {
  const filmesResponse = request("GET", baseUrl);
  return JSON.parse(filmesResponse.getBody());
}

function getQtdeFilmes() {
  const filmesResponse = request("GET", baseUrl);
  return JSON.parse(filmesResponse.getBody()).length;
}

export default {
  adicionarFilme,
  removerFilme,
  getId,
  getFilmes,
  getQtdeFilmes,
};
