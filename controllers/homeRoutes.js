const router = require('express').Router();
const { User, Product, Messages } = require('../models');
const dotenv = require('dotenv').config()

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            include: {
                model: User,
                as: 'user'
            },
            order:[['updatedAt',  'DESC']]
        });
        const products = productData.map((product) => product.get({ plain: true }));
        const name = products[0].user.name
        res.render('homepage', { products, name, logged_in:req.session.logged_in });
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