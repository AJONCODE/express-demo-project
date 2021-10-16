const express = require('express');

const footballersController = require('../controllers/footballers.controller');

const footballersRouter = express.Router();

footballersRouter.use((req, res, next) => {
  console.log(`IP address: ${req.ip}`);
  next();
})

footballersRouter.post('/', footballersController.postFootballer);

footballersRouter.get('/', footballersController.getFootballers);

footballersRouter.get('/:footballerId', footballersController.getFootballer);

footballersRouter.get('/image/player', footballersController.getPlayerImage);

module.exports = footballersRouter;