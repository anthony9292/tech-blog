const router = require('express').Router(); 
const { Post } = require('../../models'); 

///creates new post 
router.post('/', async (req, res) => { 
    try {
        if(req.session.logged_in) { 
            const postData = await Post.create({ 
                title: req.body.title, 
                text: req.body.text,
                user_id: req.session.user_id
            })
            res.status(200).json(postData)
        } 
        else { 
            res.redirect('/login');
        }
    }
    catch (err) { 
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        if( req.session.logged_in) { 
            const postData = await Post.destroy({
                where:  { 
                    id: req.params.id
                }
            })
           res.status(200).json(postData);
        } 
        else { 
            res.redirect('/login'); 
        }
    } 
    catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req,res) => { 
    try { 
        if(req.session.logged_in) { 
            const postData = await Post.update({
                title: req.body.title,
                text: req.body.text
            }, 
            { 
                where: { 
                    id: req.params.id
                },
            })
            res.status(200).json(postData); 
        }
         else { 
            res.redirect('/login');
        }

    }
    catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;