const express = require('express');
const router = express.Router();

const avatarController = require('../controllers/images');

router.post('/upload', avatarController.uploadAvatar);

router.get('/getUrl/avatars/:fileId', avatarController.getAvatarUrl);

module.exports = router;