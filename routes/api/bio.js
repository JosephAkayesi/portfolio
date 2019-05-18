const router = require('express')()

// Load schema
const Bio = require('../../models/Bio')

// @route GET api/bio
// @desc Test bio route
// @access Public
router.get('/test', (req, res) => {
    res.json({ msg: 'Bio route works' })
})

// @route GET api/bio
// @desc Get bio
// @access Public
router.get('/', (req, res) => {
    Bio.find({})
        .then(bio => res.json(bio))
        .catch(err => console.log(err))
})

module.exports = router