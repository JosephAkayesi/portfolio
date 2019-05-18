const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema
const BioSchema = new Schema({
    introduction: { type: String, required: true },
    body: { type: String, required: true },
    conclusion: { type: String, required: true },
    social: {
        twitter: { type: String, required: true },
        facebook: { type: String, required: true },
        github: { type: String, required: true },
        medium: { type: String, required: true }
    }
})

module.exports = Bio = mongoose.model('bio', BioSchema, 'bio')