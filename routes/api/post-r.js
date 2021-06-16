const router = require('express').Router(); 
const { Post, User, Comment } = require('../../models');
const sequelize = require("../../config/connection"); 

///creates new post 
router.post('/',(req, res) => { 
    Post.create({ 
        title: req.body.title,  
        body: req.body.body, 
        user_id: req.session.user_id, 
    })
    .then((newPost) => res.json)(newPost)
})