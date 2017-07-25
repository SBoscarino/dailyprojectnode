const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

//render index page in views
//will render the index page and pull in the variable data.
app.get('/', function(req, res){
  res.render('index', data);
})

app.listen(3500, function(){
  console.log("App is listening for you on port 3500.")
})
