const router = require('express').Router();
const { eq } = require('sequelize/types/lib/operators');
const { User, Post, Comment} = require('../models');
const { afterSync } = require('../models/user-m');


router.get('/', async (req, res) => {
    try {
          if ( req.session.logged_in)  {
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

        } 
    }catch (err) { 
            res.status.apply(500).json(err); 
        }

    });

//login 
router.get('/login', (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.render('login');
          } else if (req.session.logged_in) { 
              res.render('homepage', {logged_in:req.session.logged_in})
          }
    } 
    catch (err) {
        res.status(500).json(err);
    }
});

//register 
router.get('/register', async (req, res) => {
    try{
        res.render('register')
    } 
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post', async (req, res) => {
    try{
        if(req.session.logged_in) {
            res.render('post',  { logged_in: req.session.logged_in })
       
    } else { 
        res.render('login'); 
    } 
}
catch (err) { 
    res.status(500).json(err);
}

}); 

router.get('/post/:id', async (req, res) => {
    try {
        if (req.session.logged_in)  {
        const postData = await Post.findOne({ 
           where: { 
               id: req.params.id
            },
            include: { 
                model: Comment, 
                oder:[['updateAt', 'DESC']], 
                include:
                { 
                    model: User,
                    as: 'user',
                },
                
            },
    }) 
    const posts = postData.get({ plain: true });  
    res.render('comment', {posts, logged_in: req.session.logged_in})
} else {
    res.render('login');
}
    } catch (err) { 
        res.status(500).json(err);
    }

}); 

router.get('/profile', async (req, res) => { 
    try { 
        if(req.session.logged_in) { 
            const postData = await Post.findAll({ 
                where: { 
                    user_id: req.session.user_id
                },
                include: { 
                    model: Comment, 
                    order:  [['updatedAt', 'DESC']],
                    include: { 
                        model: User,
                            as: 'user'
                    }
                },
            })
            const posts = postData.map((post) => post.get({ plain: true })); 
            res.render('profile', { posts, logged_in: req.session.logged_in}); 
        } else { 
          res.render('login'); 
        }
    } 
    catch (err) { 
        res.status(500).json(err)
    }
});

router.get('update/:id', async (req, res) => { 
    try{ 
        if(req.session.logged_in) { 
            const postData = await Post.findByPk(req.params.id)
            const posts = postData.get({ plain: true }); 
            res.render('update', { posts, logged_in: req.sessions.logged_in})
        } 
        else {
            res.render('login'); 
        }
    } 
    catch(err) { 
        res.status(500).json(err);
    }
})

module.exports = router;
