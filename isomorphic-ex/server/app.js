const app = require('express')()
const template = require('./template')

var port = (process.argv.slice(2).length > 0) ? parseInt(process.argv.slice(2)) : 5000 ;

app.use('/',template.render);

var server = app.listen(port, function () {
  console.log ('Server started on port: ' + server.address().port);
});//server start up
