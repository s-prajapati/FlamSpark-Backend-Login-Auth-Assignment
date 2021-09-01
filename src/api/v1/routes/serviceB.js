const { Router } = require('express');
const router = Router();


router.get('/',(req,res)=>{
    res.send('This is a protected service .Here is Your all environment variables saved - Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah');
})

module.exports = router;