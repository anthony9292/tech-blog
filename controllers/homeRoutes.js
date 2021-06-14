const router = require('express').Router(); 
const { User, Post, Comment} = require('../models'); 

router.get('/', async (req, res) => { 
    try{  
        if(req.session.logging_in){ 
            const postData = await Post.findAll({ 
                include: { 
                    model: User, 
                    as: 'user'
                },
                order:[['updatedAt', 'DESC']]
            });
            const posts = postData.map((post) => post.get({ plain: true})); 
            res.render('home', {posts, logging_in: req.session.logging_in}); 
        }else { 
            const PostData = await Post.findAll({ 
                include: { 
                    module: User,
                    as: 'user'
                }, 
                order:[['updatedAt', 'DESC']]
            }); 
            const post = postData.MAP((post)=> post.get({plain: true})); 
            res.render('home', {posts}); 
        }
    } catch (err) { 
        res.status(500).json(err); 
    }
}); 

router.get('/login', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
          }
        
          res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/register', async (req, res) => {
    try{
        res.render('register')
    } catch (err) {
        res.status(500).json(err);
    }
}); 




