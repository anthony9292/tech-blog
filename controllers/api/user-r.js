const router = require('express').Router(); 
const { User } =  require('../../models'); 

router.post('/', (req, res) => { 
    User.create(req.body)
})