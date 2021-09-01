const { Router } = require('express');
const router = Router();


router.get('/', (req, res)=>{
    res.status(200).json({
        message: 'succesfuly authenticated and sent the data',
        data:'Here is Your Potter Spell : Expecto Patronum',
        success: true
    });
});

module.exports = router;