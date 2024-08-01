const express = require('express');

const router = express.Router();

const { browse } = require('../../../controllers/programController');

router.get('/', browse);

module.exports = router;