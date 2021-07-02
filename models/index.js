const User = require("./user-m"); 
const Comment = require("./comment-m"); 
const Post = require("./post-m"); 


User.hasMany(Post, { 
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
});
User.hasMany(Comment, { 
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
}); 

Post.belongsTo(User, { 
    foreignKey: 'post_id', 
    onDelete: 'CASCADE'
}); 

Comment.belongsTo(User, { 
    foreignKey: 'post_id', 
    onDelete: 'CASCADE'
}); 

Post.hasMany(Comment, { 
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
}); 

Comment.belongsTo(Post, { 
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
}); 


module.exports = {User, Comment, Post}; 
