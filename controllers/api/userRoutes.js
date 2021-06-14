const router = require('express').Router();
const { User } = require('../../models/');


router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const registerData = await User.create(req.body);
    req.session.user_id = registerData.id;
    req.session.logged_in = true; 
    res.status(200).json(registerData);
  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: {email: req.body.email } });

      if (!userData) {
          res.status(400).json({ message: 'Account name/email is invalid. Please check information and try again.' });
          return;
      };
      
      const validPassword = userData.checkPassword(req.body.password);
      
      if (!validPassword) {
        res.status(400).json({ message: 'Account name/email is invalid. Please check information and try again.' });
          return;
      };
      
      req.session.user_id = userData.id;
      req.session.logged_in = true; 
      res.json({ user: userData, message: 'Successfully logged in!!' });
 

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', async (req, res) => {
    try {
        if (req.session.logged_in) {
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