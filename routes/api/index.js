const router = require('express').Router(); 
const userRoutes = require('./user-r'); 
const postRoutes = require('./post-r'); 
const commentRoutes = require('./comment-r'); 
const { Router } = require('express');


router.use('/user', userRoutes); 
router.use('/post', postRoutes); 
router.use('/comment', commentRoutes); 


module.exports = router;
