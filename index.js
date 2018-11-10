var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const arr = ['tits', 'boobs', 'ass', 'pussy'];
app.get('/', (req, res) => res.render('index',{arr: arr}));

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
  arr.push(req.body.text);
  res.redirect('/');
  console.log(req.body)
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
