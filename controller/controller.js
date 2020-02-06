var Livre = require('../models/model');

    exports.liste = (req, res) => {
        Livre.find({}, {_id: 0, titre: 1})
            .then((livres) => {
                res.send(livres)
            })
            .catch((err) => console.error(err.message))
    },

    exports.findOne =(req, res) => {
        Livre.findOne({ numero: req.params.numLivres }, { _id: 0, titre: 1 })
            .then((livre) => {
                if (livre == null) {
                    res.send('Livre non trouvé');
                } else { 
                    res.send(livre);
                }
            })
            .catch((err) => console.error(err.message))
    },

    exports.deletOne=(req, res) => {
        Livre.deleteOne({ numero: req.params.numLivres })
            .then((livre) =>
                res.send(livre))
            .catch((err) => console.error(err.message))
    },

    exports.UpdateOne = (req, res) => {
        Livre.findOne({ numero: req.params.numLivres}, {_id: 1}).then((livre) => {
            let _id = livre._id
            let newLivre = new Livre({
                _id: _id,
                numero: req.body.numero,
                titre: req.body.titre,
                pages: req.body.pages
            })

            Livre.updateOne({ _id: _id }, newLivre )
            .then((status) =>
                res.send(status))
            .catch((err) => console.error(err.message))
        })
        .catch((err) => console.error(err.message))
    },
    exports.AddLivre=(req, res) => {
            let nouvLivre= new Livre({
                id : req.body.id,
                numero : req.body.numero,
                titre:req.body.titre,
                pages: req.body.pages
            })
            nouvLivre.save()
    .then((livre) => 
    res.send(livre))
    .catch((err) => err.message)
    }
    
    // interface du module
