var express = require('express')
var router = express.Router()

router.get('/api/welcome', (req, res) => {
	res.json("Teacher's assistant!")
})

module.exports = router