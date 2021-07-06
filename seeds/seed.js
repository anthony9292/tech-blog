const sequalize = require('../config/connection'); 
const { User, Post, Comment } = require('../models'); 

const userData = require('./userData.json'); 
const postData = require('./postData.json'); 
const commentData = require('./commentData.json'); 

const seedDatabase = async () => { 
    await sequalize.sync({ force: true }); 

    await User.bulkCreate(userData);

    await Post.bulkCreate(postData); 

    await Comment.bulkCreate(commentData); 

process.exit(0);
     
};
seedDatabase();


