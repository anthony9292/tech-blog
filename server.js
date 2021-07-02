///Dependencies
require('dotenv').config()
const path = require('path');
const express = require('express');
const session = require('express-session'); 
const routes = require('./router');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers')
//inputs custome helpers method
const hbs = exphbs.create({ helpers });

const sequelize = require("./config/connection"); 
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//express app
const app = express(); 
const PORT = process.env.PORT || 3001;

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

app.use(session(sess)); 
//sets handlebars as default template 
const hbs = exphbs.create({helpers});
app.engine('handlebars', hbs.engine); 
app.set('view engine','handlebars'); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(routes); 

sequelize.sync({ force: false }).then(() => { 
 app.listen(PORT, () => console.log('App is listening on port'));
});
