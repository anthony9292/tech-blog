const { Sequelize, Model, Datatypes, TimeoutError } = require("sequelize"); 
const sequelize = require("../config/connection"); 

class Post extends Model{} 

Post.init({ 
    id: { 
        type: Datatypes.INTEGER,
        allowNull: false, 
        primaryKey: true, 
        autoIncrement: true,
    }, 

    title: { 
        type: Datatypes.String, 
        allowNull: false, 
    }, 
    body: { 
        type: Datatypes.String,
        allowNull: false, 
    }, 
    user_id: { 
        type: Datatypes.INTEGER, 
        references: { 
            model: 'user',
            key: 'id',
        }
    }, 
}, 

{ 
    sequelize, 
    timestamps: true, 
    freezeTableName: true, 
    underscored: true, 
    modelName: 'post', 
}
);


module.exports = Post;