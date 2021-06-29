const router = require('express').Router(); 
const apiRoutes = require('./api'); 
const homeroutes = require('./homeR'); 
const dashboardRoutes = require('./dashboard');
const { route } = require('./api');

router.use('/',homeroutes);
route.use('/dashboard', dashboardRoutes); 
route.use('/api', apiRoutes); 


module.exports = router
