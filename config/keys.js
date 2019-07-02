if(process.env.NODE_ENV){
    module.exports = {
        mongoURI: process.env.MONGOURI
    }
}
else {
    module.exports = {
        mongoURI:  'mongodb://localhost/portfolio'
    }
}
