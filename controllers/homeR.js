const router = require('express').Router();
const { Post, User, Comment } = require('../models'); 



//base homepage 
router.get('/', (req, res) => { 
    Post.findAll({ 
        include:[User],
    }).then((postData) =>{ 
        console.log(postData); 

      const posts = postData.map((post) => post.get({plain:true})); 

      res.render('homepage', {  
          post,
      })
    })
})