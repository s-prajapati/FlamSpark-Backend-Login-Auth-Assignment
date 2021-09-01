const { Router } = require('express');
const router = Router();
const passport=require('passport')

const {registerUser,confirmEmail,loginUser,googleCallback,forgotPassword,resetPassword} = require('../controllers/userController');


router.post('/register',registerUser);
router.get('/confirmEmail/:secret',confirmEmail);
router.post('/login',loginUser);
router.get('/oauth/google',  passport.authenticate('google', { scope: ['profile','email'] }));
router.get('/oauth/google/callback', passport.authenticate('google'),googleCallback);
router.post('/forgotPassword',forgotPassword);
router.post('/resetPassword/:id',resetPassword);

module.exports = router;