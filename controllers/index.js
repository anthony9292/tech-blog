const router = require('express').Router();
const userR = require('./api/userR');
const postR = require('./api/postR');
const commentR = 


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;