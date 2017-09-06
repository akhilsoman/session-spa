const data = require('./data.json')

var getResults = (req, res) => {
  setTimeout(() => {
    res.json(data);
  }, 1000)
}

module.exports = {
  getResults: getResults
}
