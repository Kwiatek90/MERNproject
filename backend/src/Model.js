var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newSchema = new Schema({

    tytul: {
        type: String,
        required: true
    },
    opis: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('bookshelf', newSchema);