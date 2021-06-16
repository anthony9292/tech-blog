const router = require('express').Router(); 
const { Post, User, Comment } = require('../../models');
const sequelize = require("../../config/connection"); 
const { route } = require('.');

///creates new post 
router.post('/', (req, res) => { 
    Post.create({ 
        title: req.body.title,  
        body: req.body.body, 
        user_id: req.session.user_id, 
    })
    .then((newPost) => res.json)(newPost)
    .catch((err) => { res.status(500).json(err)})
}); 


//updates new posts from user 
router.put('/:id',  req, res => { 
    Post.update(req.body, { 
        where: { 
            id: req.params.id,
        }
    })
    then.((posts) => { 

        if(!req.params.id) { 
            res.status(404).json({ message: "Post matching that id not found!!"}); 
            return; 
        }
        res.json(posts)
    }) 
    .catch ((err) => res.status(400).json(err))
}); 

router.delete('/:id', (req, res) => {
    Post.destroy({ 
        where: { 
            id: req.params.id, 
        }, 
    })
    .then((posts) => { 
        if(!req.params.id) { 
            res.status(404).json({messge:"Post matching that id not found!!"}); 
            return;
        }
        res.json(posts)
    })
    .catch ((err) => res.status(500).json(err))
}); 

module.exports = router;