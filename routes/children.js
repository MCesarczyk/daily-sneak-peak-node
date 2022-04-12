const express = require('express');
const router = express.Router();

const childController = require('../controllers/children');

router.get('/', childController.getAllChildren);

router.post('/', childController.createChild);

router.get('/:id', childController.getOneChild);

router.put('/:id', childController.updateChild);

router.delete('/:id', childController.deleteChild);

module.exports = router;