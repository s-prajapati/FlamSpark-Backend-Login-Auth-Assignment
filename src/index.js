const express = require('express');
const app = express();
const logger = require('./logger');
const db = require('./config/mongoose')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res) => {
    logger.info('Welcome');
    logger.error('error occured');
    logger.debug('debugging')
    res.send("hello")
})

app.use('/api', require('./api'));

app.listen(process.env.PORT, (err) => {
    if (err) {
        logger.error(err);
    }
    logger.info('Server started');
});
