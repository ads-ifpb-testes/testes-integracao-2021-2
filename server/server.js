const jsonserver = require("json-server");

const { create, defaults, router } = jsonserver;
const data = () => {
  const filmesDatabase = { filmes: [] };
  for (let index = 1; index <= 100; index++) {
    const novoFilme = {
      id: index,
      nome: `Filme fake ${index} - ${new Date()}`,
      ano: Math.random() * (2020 - 2000) + 2000,
    };
    filmesDatabase.filmes.push(novoFilme);
  }
  return filmesDatabase;
};

const app = create();
const serverRouter = router(data());
const middlewares = defaults();

let server = null;

const runServer = () => {
  app.use(middlewares);
  app.use(serverRouter);
  server = app.listen(3000, () => {});
};

const stopServer = () => {
  server.close(() => {});
};

runServer();
