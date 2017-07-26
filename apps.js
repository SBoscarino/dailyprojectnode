const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data');

app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

//render index page in views
//will render the index page and pull in the variable data.
app.get('/', function(req, res){
  res.render('index', data);
  console.log(data);
})

//gets then renders a robot to the detail.mustache page.
app.get('/detail/:id', function(req, res){
  let robot = data.users.find(function(item){
    return item.id == req.params.id;
  });
  console.log(robot);
  res.render('detail', robot);
});


app.listen(3500, function(){
  console.log("App is listening for you on port 3500.")
})
