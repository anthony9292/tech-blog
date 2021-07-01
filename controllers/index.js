const router =  require('express').Router(); 

const { Model } = require('sequelize/types');
const apiRR =  require('./api'); 
const homeR = require('./homeR'); 

router.use('/', homeR);
router.use('/', apiRR); 


module.exports = router;