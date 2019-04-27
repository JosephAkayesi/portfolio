const router = require('express')()

// Load schema
const Bio = require('../../models/Bio')

router.get('/test', (req, res) => {
    res.json({ msg: 'Bio route works' })
})

// @route GET api/bio
// @desc Test biog route
// @access Public
router.get('/', (req, res) => {
    // res.json({msg: 'Index works'})
    Bio.find({})
        .then(bio => res.json(bio))
        .catch(err => console.log(err))
})

module.exports = router