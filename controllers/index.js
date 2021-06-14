const router = require('express').Router();
const userR = require('./api/userR');
const postR = require('./api/postR');
const commentR = require('./api/commentR');


router.use('/users', userR);
router.use('/posts', postR);
router.use('/comments', commentR ); 


module.exports = router;