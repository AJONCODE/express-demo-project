const express = require('express');
const path = require('path');

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

// serving static files
app.use('/site', express.static(path.join(__dirname, 'public')));

// parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

app.use('/footballers', footballersRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});