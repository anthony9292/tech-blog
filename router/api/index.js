const router = require('express').Router(); 
const userRoutes = require('./user-r'); 
const postRoutes = require('./post-r'); 
const commentRoutes = require('./comment-r'); 

router.use('/user-r', userRoutes); 
router.use('/post-r', postRoutes); 
router.use('/comment-r', commentRoutes); 


module.exports = router;
