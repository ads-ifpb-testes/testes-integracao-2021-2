import gerenciador from "./filmes.servico";
import repositorio from "../repositorio/filmes.repositorio.rest";
describe("Gerenciamento de filmes - Teste de Integração", () => {
  beforeEach(() => {});

  test("Deve inserir um filme", () => {
    gerenciador.adicionarFilme({
      nome: `Miranha 3 -> ${new Date()}`,
      ano: 2021,
    });
    const qtdeFilmes = gerenciador.getQtdeFilmes();
    expect(qtdeFilmes).toBeGreaterThan(100);
  });

  test("Deve deletar um filme", () => {
    const filme = {
      nome: `FilmeParaDeletar`,
      ano: 2021,
    };
    const qtdeFilmesInicial = gerenciador.getQtdeFilmes();
    gerenciador.adicionarFilme(filme);

    gerenciador.removerFilme(filme);
    const qtdeFilmesFinal = gerenciador.getQtdeFilmes();
    expect(qtdeFilmesFinal).toBe(qtdeFilmesInicial);
  });
});
