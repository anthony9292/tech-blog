const router = require('express').Router(); 
const { default: ModelManager } = require('sequelize/types/lib/model-manager');
const { Comment, User } = require('../../models'); 
const withAuth = require("../../utils.auth"); 

router.post('/', async (req, res) => {  
    console.log(req.body.post_id); 
    Comment.create({ 
        ...req.body,
        user_id: req.session.user_id,
    })
    .then((newComment) => res.json(newComment))
    .catch ((err) => res.status(400).json(err))
}); 

module.exports = router; 
   