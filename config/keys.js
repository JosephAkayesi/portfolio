if(process.env.NODE_ENV){
    module.exports = {
        mongoURI: process.env.MONGOURI,
        prerenderToken: process.env.PRERENDERTOKEN
    }
}
else {
    module.exports = {
        mongoURI:  'mongodb://localhost/portfolio',
        prerenderToken: process.env.PRERENDERTOKEN
    }
}
