const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Route
const bio = require('./routes/api/bio')

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello. Joseph Akayesi\'s portfolio website')
})

// Use route
app.use('/api/bio', bio)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})