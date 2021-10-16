const express = require('express');

const footballersRouter = require('./routes/footballers.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // flow returns back after the route gives response
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.use('/footballers', footballersRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});