const { Router } = require('express');
const router = Router();
const {registerUser,confirmEmail,loginUser} = require('../controllers/userController');


router.post('/register',registerUser);
router.get('/confirmEmail/:secret',confirmEmail);
router.post('/login',loginUser);

module.exports = router;