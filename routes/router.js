var express = require('express')
var router = express.Router();
var controller = require('../controller/controller');

var Livre = require('../models/model')



router.get('/', function (req, res) {
res.send('API de gestion des livres')}); // OK

router.get('/livres/:numLivres',controller.findOne)//ok

router.get('/livres', controller.liste);// ok

router.delete('/livres/:numLivres',controller.deletOne); //ok

router.put('/livres/:numLivres',controller.UpdateOne);

router.post('livres',controller.AddLivre)

module.exports = router