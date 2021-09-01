const { Router } = require('express');
const router = Router();
const logger = require('../../../logger')
router.use('/user', require('./user'));

module.exports = router