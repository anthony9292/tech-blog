const router = require('express').Router(); 
const userRoutes = require('./user-r'); 
const postRoutes = require('./post-r'); 
const commentRoutes = require('./comment-r'); 

router.use('/users', userRoutes); 
router.use('/posts', postRoutes); 
router.use('/comments', commentRoutes); 


module.exports = router;
