const { Router } = require('express');
const router = Router();


router.get('/',(req,res)=>{
    res.send('Here is Your Potter Spell : Expecto Patronum');
})

module.exports = router;