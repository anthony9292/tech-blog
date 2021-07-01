const router = require('express').Router(); 
const { User } =  require('../../models'); 

router.post('/register', async (req, res) => { 
   try { 
       const registerData = await User.create(req.body);
            req.session.user_id = registerData.id;
            req.session.logged_in = true;
              res.status(200).json(registerData);
        } catch (err) { 
            res.status(400).json(err); 
        }
        })

///log in user 
router.post('/login', async (req, res) => { 
    try {  
        const userData = await User.findOne ({ where: {email: req.body.email} })
        if(!user) {  or
            res.status(400).json({ message:'The account name you entered is invalid,Please check your information and try again.'})
            return; 
        }
        //check if right password 
        const validPassword = user.checkPassword(req.body.password); 

        if(!validPassword) { 
            res.status(400).json({message:'The account password you entered is invalid, Please check your information and try again.'});
            return; 
        }

        req.session.save(() => { 
            req.session.user_id = user.id; 
            req.session.logged_in = true; 

            res.json({ user: user, message:'Successfully Logged in!'});

        })
})
.catch ((err) => res.status(400).json(err))
});

//log out user 
router.post('/logout', (req, res) => { 
    if (req.secure.logged_in) { 
        req.session.destroy(() => { 
            res.status(204).end(); 
        }); 
     } else { 
            res.status(404).end(); 
        }
}); 

//update user 
router.put('/:id', (req, res) => { 
    User.update(req.body, { 
        where: { 
            id: req.params.id
        }
    })
.then((user) => { 
    if(!user[0]) { 
        res.status(404).json({message: 'Id not found!!'});
        return; 
    }
    
    res.json(user); 
}) 
.catch((err) => { res.status(500).json(err)}); 

}); 


///delete user 
router.delete('/:id', (req, res) => { 
    User.destroy({where: {id: req.params.id}})
    .then((user) => { 
        if (!user) { 
        res.status(404).json({ message: 'User id Not found'}); 
        return; 
    }
    res.json(user); 
})

.catch(err => { res.status(500).json(err)}); 
}); 

module.exports = router; 
