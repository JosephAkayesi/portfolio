if(process.env.NODE_ENV){
    module.exports = {
        mongoURI: process.env.MONGOURI
    }
}
else {
    module.exports = {
        // mongoURI:  'mongodb://localhost/portfolio',
        mongoURI:  'mongodb://joseph:joseph94@ds147946.mlab.com:47946/portfolio',
    }
}
