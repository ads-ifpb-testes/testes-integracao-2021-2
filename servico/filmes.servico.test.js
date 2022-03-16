import gerenciador from "./filmes.servico";
import repositorio from "../repositorio/filmes.repositorio.rest";

jest.mock("../repositorio/filmes.repositorio.rest", () => ({
  adicionarFilme: jest.fn(),
  removerFilme: jest.fn(),
  getId: jest.fn().mockReturnValue(1),
  getQtdeFilmes: jest.fn().mockReturnValue([].length),
  getFilmes: jest.fn().mockReturnValue([]),
}));

describe("Gerenciamento de filmes", () => {
  beforeEach(() => {});

  test("Deve inserir um filme", () => {
    gerenciador.adicionarFilme({ nome: "Miranha 3", ano: 2021 });

    repositorio.getQtdeFilmes.mockReturnValue(1);

    const qtdeFilmes = gerenciador.getQtdeFilmes();
    expect(qtdeFilmes).toBe(1);
  });

  test("Deve inserir vários filmes", () => {
    const filme1 = {
      nome: "A Fuga das Galinhas",
      ano: 2000,
    };
    const filme2 = {
      nome: "As vantagens de ser invisível",
      ano: 2012,
    };
    gerenciador.adicionarFilme(filme1);
    gerenciador.adicionarFilme(filme2);

    repositorio.getQtdeFilmes.mockReturnValue(2);

    const qtdeFilmes = gerenciador.getQtdeFilmes();
    expect(qtdeFilmes).toBe(2);
  });

  test("Não deve permitir filmes futuros", () => {
    const filme = {
      nome: "Doutor Estranho no Multiverso da Loucura",
      ano: 2025,
    };
    expect(() => {
      gerenciador.adicionarFilme(filme);
    }).toThrow(Error);
  });

  test("Deve remover um filme", () => {
    const filme = {
      nome: "Matrix",
      ano: 1999,
    };

    gerenciador.adicionarFilme(filme);
    repositorio.getQtdeFilmes.mockReturnValue(1);

    let qtdeFilmes = gerenciador.getQtdeFilmes();
    expect(qtdeFilmes).toBe(1);

    gerenciador.removerFilme(filme);
    repositorio.getQtdeFilmes.mockReturnValue(0);

    qtdeFilmes = gerenciador.getQtdeFilmes();
    expect(qtdeFilmes).toBe(0);
  });

  test("Deve remover vários filmes", () => {
    const filme1 = {
      nome: "A Fuga das Galinhas",
      ano: 2000,
    };
    const filme2 = {
      nome: "As vantagens de ser invisível",
      ano: 2012,
    };
    gerenciador.adicionarFilme(filme1);
    gerenciador.adicionarFilme(filme2);

    repositorio.getQtdeFilmes.mockReturnValue(2);

    let qtdeFilmes = gerenciador.getQtdeFilmes();
    expect(qtdeFilmes).toBe(2);

    gerenciador.removerFilme(filme1);
    gerenciador.removerFilme(filme2);

    repositorio.getQtdeFilmes.mockReturnValue(0);

    qtdeFilmes = gerenciador.getQtdeFilmes();
    expect(qtdeFilmes).toBe(0);
  });
});
