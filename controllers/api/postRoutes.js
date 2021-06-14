const router = require('express').Router;
const { Post } = require ('../../models');

router.post('/', async (req, res) => { 
try { 
    if(req.session.logged_in)  { 
        const postData = await Post.create({ 
            title: req.body.title, 
            text: req.body.text, 
            user_id: req.session.user_id
        })
    }
}
})