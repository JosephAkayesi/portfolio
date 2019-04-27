const router = require('express')()

// @route GET api/headers/test
// @desc Tests headers route
// @access Public
router.get('/test', (req, res) => {
    res.json({msg: 'Header route workd'})
})

// @route GET api/headers/test
// @desc Tests headers route
// @access Public
router.get('/', (req, res) => {
    res.json({msg: 'Get portfolio header'})
})


module.exports = router