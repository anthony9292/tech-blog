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
        if(!userData) {
            res.status(400).json({ message:'The account name you entered is invalid,Please check your information and try again.'})
            return; 
        }
        //check if right password 
        const validPassword = user.checkPassword(req.body.password); 

        if(!validPassword) { 
            res.status(400).json({message:'The account password you entered is invalid, Please check your information and try again.'});
            return; 
        };
            req.session.user_id = userData.id;
            req.session.logged_in = true; 
            res.json({ user: user, message:'Successfully Logged in!'});
        

    }catch (err) { res.status(400).json(err)
}

});


//log out user 
router.post('/logout', async (req, res) => { 

try { 
    if (req.secure.logged_in) { 
        req.session.destroy(() => { 
            res.status(204).end(); 
        }); 
     } else { 
            res.status(404).end(); 
        } 
    } catch (err) { 
        res.status(400).json(err);
    }
}); 

module.exports = router; 
