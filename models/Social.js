const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema
const SocialSchema = new Schema({
    twitter: { type: String, required: true },
    facebook: { type: String, required: true },
    github: { type: String, required: true },
    medium: { type: String, required: true },
})

module.exports = Social = mongoose.model('social', SocialSchema, 'social')