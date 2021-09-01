const { Router } = require('express');
const router = Router();
const passport=require('passport')

const {registerUser,confirmEmail,loginUser,googleCallback} = require('../controllers/userController');


router.post('/register',registerUser);
router.get('/confirmEmail/:secret',confirmEmail);
router.post('/login',loginUser);
router.get('/oauth/google',  passport.authenticate('google', { scope: ['profile','email'] }));
router.get('/oauth/google/callback', passport.authenticate('google'),googleCallback);

module.exports = router;