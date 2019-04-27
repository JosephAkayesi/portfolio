const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema
const BioSchema = new Schema({
    introduction: { type: String, required: true },
    body: { type: String, required: true },
    conclusion: { type: String, required: true }
})

module.exports = Bio = mongoose.model('bio', BioSchema, 'bio')