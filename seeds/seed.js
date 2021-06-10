const sequelize = require('../config/connection');
const { User, Product, Messages } = require('../models');
const userData = require('./seedUser.json');
const postData = require('./seedPost.json');
const messageData = require('./seedMessage.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
   await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    await Comment.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
      });
    
    await Messages.bulkCreate(messageData, {
      individualHooks: true,
      returning: true,
    });
    
    process.exit(0);
  };
seedDatabase();