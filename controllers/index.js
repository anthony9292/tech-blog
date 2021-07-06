const router =  require('express').Router(); 

const apiRR = require('./api');
const homeRR = require('./home-r');

router.use('/', homeRR);
router.use('/api', apiRR); 


module.exports = router;