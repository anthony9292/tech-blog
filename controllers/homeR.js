const router = require('express').Router();
const { User, Post, Comment} = require('../models');


router.get('/', async (req, res) => {
    try {
          if ( req.session.logged_in) 
           const postData = await Post.findAll({
               include: { 
                   model: User,
                   as: 'user'
               }, 
               order: [['updatedAt', 'DESC']]
           }); 
           const posts = postData.map((post) => post.get({ plain: true })); 
           res.render('homepage', { posts, logged_in: req.session.logged_in }); 
        } 
        else { 
            const postData = await Post.findAll({ 
                include: { 
                    model: 'User',
                    as: 'user'
                },
                order: [[ 'updateAt', 'DESC']]
            }); 
            const post = postData.map((post) => post.get ({ plain: true}))
            res.render('homepage', {posts}); 

        } catch (err) { 
            res.status.apply(500).json(err); 
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

router.get('/messages', async (req, res) => {
    try {
        const messageData = await Messages.findAll({
            where: {user_id: req.session.user_id}, 
            order:[['updatedAt',  'DESC']]
        });

        const userData = await User.findOne({ where: {id: req.session.user_id } });
        console.log("userData", userData.name);

        const messages = messageData.map((messages) => messages.get({ plain: true }));
        messages.map(item => {
            try {
                item.messages = cryptr.decrypt(item.messages);   
                item.username = userData.name;                
                return item;
            } catch(ex) {
                console.error(ex);
            }
        });
        
        res.render('messages', { messages, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/pantry', async (req, res) => {

    try {
        const pantryData = await Product.findAll({
            where: {user_id: req.session.user_id},
            order:[['updatedAt',  'DESC']]
        });
        
        const pantry = pantryData.map((pantry) => pantry.get({ plain: true }));
        console.log(pantry)
        res.render('pantry', { pantry, logged_in: req.session.logged_in });
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
})


router.get('/create', async (req, res) => {
    try{
        res.render('create', {logged_in: req.session.logged_in})
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/messageform', async (req, res) => {
    try{
        res.render('messageform', {logged_in: req.session.logged_in})
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;