let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create block chain schema

let BlockChainSchema = new Schema({
    index: {
        required: true,
        type: Schema.Types.Number
    },
    timestamp: {
        required: true,
        type: Schema.Types.Date,
        default: Date.now()
    },
    transcation: {
        required: true,
        type: Schema.Types.Array
    },
    prevHash: {
        required: false,
        type: Schema.Types.String
    },
    hash: {
        required: true,
        type: Schema.Types.String
    }
});

module.exports = mongoose.model("Blockchain", BlockChainSchema);