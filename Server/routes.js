var express = require('express')
var router = express.Router()

router.get('/api/title', (req, res) => {
	res.json("Teacher's assistant")
})

module.exports = router