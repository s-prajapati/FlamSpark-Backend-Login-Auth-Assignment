const { Router } = require('express');
const router = Router();
const {registerUser,confirmEmail} = require('../controllers/userController');


router.post('/register',registerUser);
router.get('/confirmEmail/:secret',confirmEmail);

module.exports = router;