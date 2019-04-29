const router = require('express')()

// Load schema
const Social = require('../../models/Social')

// @route GET api/social
// @desc Test social route
// @access Public
router.get('/test', (req, res) => {
    res.json({ msg: 'Social route works' })
})

// @route GET api/social
// @desc Get social
// @access Public
router.get('/', (req, res) => {
    // res.json({msg: 'Index works'})
    Social.find({})
        .then(social => res.json(social))
        .catch(err => console.log(err))
})

module.exports = router