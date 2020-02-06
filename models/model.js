var mongoose = require('mongoose')
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var livreSchema = new Schema({
    numero : { type : Number, required : true },
    titre :{ type: String, required:true },
    pages :{type: [String],required:true}   
});


    var Livre = mongoose.model("Livre", livreSchema);

    module.exports = Livre;


   