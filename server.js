///Dependencies
require('dotenv').config()
const path = require('path');
const express = require('express');
const sequelize = require("./config/connection"); 
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers')
//inputs custome helpers method
const hbs = exphbs.create({ 
  helpers 
});

const session = require('express-session'); 
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//sessions with cookies 
const sess = {
  secret: process.env.SECRET,
  //calls for session to use cookies 
  cookie: {},
  resave: false,
 saveUninitialized: false,
 //sequalize store set up
 store: new SequelizeStore({
   db: sequelize
  })
  };

  //express app
const app = express(); 
const PORT = process.env.PORT || 3001;

//sets handlebars as default template 
app.engine('handlebars', hbs.engine); 
app.set('view engine','handlebars'); 


app.use(session(sess)); 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); 
app.use(express.urlencoded({ 
  extended: true 
})); 

//routes
app.use(routes); 

sequelize.sync({ force: false }).then(() => { 
  app.listen(PORT, () => console.log('App is listening on port'));
 });
 






 


