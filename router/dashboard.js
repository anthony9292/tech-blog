const router = require('express').Router(); 
const{ Post, User, Comment } = require('../models'); 
const withAuth = require('../utils/auth');


//posts made by users are display'd
router.get('/', withAuth, (req, res) =>  { 
 Post.findAll({ 
     include: [User, 
      { 
          model: Comment, 
          include: [User], 
      }], 
    where: { 
        user_id: req.session.user_id, 
    }
 }) 
.then((postData) => { 
    const post = postData.map((post) => post.get ({ plain: true})); 
    res.render('dashboard', {post, loggedIn: true}); 
})
.catch ((err) => {res.status(500).json})
});

//create new post section 
router.get('/create', withAuth, (req, res) => { 
    Post.findAll({ 
        include: [User, 
        { 
            model: Comment, 
            include: [User], 
        }, 
    ], 
    }).then((postData) => { 
        const posts = postData.map((post) => post.get ({ plain: true })); 

        res.render('fresh-post', {posts, loggedIn: true}); 

}).catch((err) => {res.status(500).json(err)})
});



///editing post section 
router.get('posts-edit/:id', withAuth, (req, res ) => {
Post.findByPk(req.params.id, {})
.then((postData) => { 
    if(!postData) { 
        res.status(404).json({ message: 'Post has not been found!!'}); 
        return; 
    }
    const post = postData.get({ plain: true}); 

    res.render('postedit', {post, loggedIn: true}); 

}).catch ((err) => { res.status(500).json(err)})
}); 

module.exports = router; 