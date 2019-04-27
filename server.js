const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Route
const headers = require('./routes/api/headers')

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
app.use('/api/headers', headers)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})