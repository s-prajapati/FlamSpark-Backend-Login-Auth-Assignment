const { Router } = require('express');
const router = Router();
const logger = require('../../../logger');
const passport=require('passport')

router.use('/user', require('./user'));
router.use('/flamspark1',passport.authenticate('jwt',{session:false}),require('./serviceA'));
router.use('/flamspark2',passport.authenticate('jwt',{session:false}),require('./serviceB'));
module.exports = router