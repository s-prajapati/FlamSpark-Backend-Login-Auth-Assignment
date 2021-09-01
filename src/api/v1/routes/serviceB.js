const { Router } = require('express');
const router = Router();


router.get('/', (req, res)=>{
    res.status(200).json({
        message: 'succesfuly authenticated and sent the data',
        data:'This is a protected service .Here is Your all environment variables saved - Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
        success:false
    });
    
});

module.exports = router;