const express = require('express');
const path = require('path');

const footballersRouter = require('./routes/footballers.router');

const app = express();

// assigning setting view engine to hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // flow returns back after the route gives response
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// serving static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

app.get('/', (req, res) => {
  res.render('footballer', { 
    title: 'Son Heung Min', 
    caption: 'Son 7'
  });
})
app.use('/footballers', footballersRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});