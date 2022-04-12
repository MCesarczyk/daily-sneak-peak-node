const express = require('express');
const router = express.Router();

const avatarController = require('../controllers/avatar');

router.post('/upload', avatarController.uploadAvatar);

router.get('/getUrl/:fileId', avatarController.getAvatarUrl);

module.exports = router;