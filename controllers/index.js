const router =  require('express').Router(); 
const userRR = require('./api/user-r'); 
const postRR = require('./api/post-r');
const commentRR = require('./api/comment-r');
const { use } = require('./api/user-r');


router.use('/users', userRR); 
router.use('/posts', postRR); 
router.use('/comments', commentRR)

module.exports = router;