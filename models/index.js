const User = require("./user-model"); 
const Comment = require("./comment-model"); 
const Post = require("./post-model"); 


User.hasMany(Post, { 
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
});
User.hasMany(Comment, { 
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
}); 

Post.belongsTo(User, { 
    foreignKey: 'user_id', 
}); 

Comment.belongsTo(User, { 
    foreignKey: 'user_id', 
}); 

Post.hasMany(Comment, { 
    foreignKey: 'post_id', 
}); 

Comment.belongsTo(Post, { 
    foreignKey: 'post_id', 
}); 


module.exports = { User, Comment, Post }; 
