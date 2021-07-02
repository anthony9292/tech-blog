const { Sequalize, Model, Datatypes, INTEGER } = require("sequelize"); 
const sequelize = require("../config/connection"); 

class Comment extends Model{} 


Comment.init({ 

    id: { 
        type: Datatypes.INTEGER,
        allowMNull:false, 
        primaryKey: true, 
        autoIncrement: true,
    },

    body: { 
        type: Datatypes.String, 
        allowMNull: false 
    }, 

    post_id: { 
        type: Datatypes.INTEGER, 
        references: { 
            model: 'post', 
            id: 'id', 
        }
    },

    user_id: { 
        type: Datatypes.INTEGER, 
        references: { 
            model: 'user', 
            id: 'id', 
        }
    },

    user_id: { 
        type: Datatypes.INTEGER, 
        references: { 
        model: 'user',
        id: 'id'
    }
}
}, 
  { 
      sequelize, 
      timestamps: true, 
      freezeTableName: true, 
      underscored: true, 
      modelName: 'comment',
  }

);


module.exports = Comment;