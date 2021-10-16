const path = require('path');

const model = require('../models/footballers.model');

// for debugging benefit use name function instead of arrow function
function postFootballer(req, res) {
  const { name, shirt, club, nationality } = req.body;

  if (!name || !shirt || !club || !nationality) {
    return res.status(400).json({
      error: 'Required fields missing',
    });
  }

  const newFootballer = {
    id: model.length,
    name,
    shirt,
    club,
    nationality,
  };

  model.push(newFootballer);

  res.json(newFootballer);
};

function getFootballers(req, res) {
  res.json(model);
}

function getFootballer(req, res) {
  const footballerId = Number(req.params.footballerId);
  const footballer = model[footballerId];

  if (footballer) {
    res.status(200).json(footballer);
  } else {
    res.status(404).json({
      error: 'Footballer does not exist',
    });
  }
};

function getPlayerImage(req, res) {
  // Different OS uses path in different way some use / others use \
  const filePath = path.join(__dirname, '..', 'public', 'images', 'son-heung-min.jpg');
  res.sendFile(filePath);
};

module.exports = {
  postFootballer,
  getFootballers,
  getFootballer,
  getPlayerImage,
}