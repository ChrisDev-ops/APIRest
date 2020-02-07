var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = require('./routes/router')
mongoose.connect("mongodb://localhost:27017/bibli", { useNewUrlParser : true});
var bodyParser = require('body-parser')
app.use(bodyParser.json());

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'erreur connexion :'));
db.once('open', function() {
console.log('Connecté')
});







let biblio = [
    { numero: 1,
        titre : "le rouge et le noir",
        pages : [ "La petite ville de Verrières peut passer pour l’une des plus jolies",
                  "Ses maisons blanches s’étendent sur la pente d’une colline"]
      },
 {    numero : 2,
      titre : "Tu ma trouver",
      pages : [ "Comment Candide fut élevé dans un château, et comment il fut chassé d’icelui.",
                "Ce que devint Candide parmi les Bulgares"]
     },
{    numero : 3,
     titre : "on me supprime",
     pages : [ "Comment Candide fut élevé dans un château, et comment il fut chassé d’icelui.",
               "Ce que devint Candide parmi les Bulgares"]
         },
{    numero : 4,
     titre : "Livre a modifier",
     pages : [ "Comment Candide fut élevé dans un château, et comment il fut chassé d’icelui.",
                "Ce que devint Candide parmi les Bulgares"]
     },
];

app.use((req, res, next) => {
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Authorization"
     );
     res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, OPTIONS"
     );
     next();
});
app.use('/',router);

app.listen(5000)
