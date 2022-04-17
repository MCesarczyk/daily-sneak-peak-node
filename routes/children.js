const express = require('express');
const router = express.Router();

const childrenController = require('../controllers/children');

router.get('/', childrenController.getAllChildren);

router.post('/', childrenController.createChild);

router.get('/:id', childrenController.getOneChild);

router.put('/:id', childrenController.updateChild);

router.delete('/:id', childrenController.deleteChild);

module.exports = router;