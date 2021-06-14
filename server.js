const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exhbs = require('express-handlebars');
const path = require('path');
require('dotenv').config()
const sequelize = require('./config/connection');
const hbs = exhbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;

 const sess = {
 secret: process.env.SECRET,
 cookie: {},
 resave: false,
saveUninitialized: false,
store: new SequelizeStore({
  db: sequelize
 })
 };

app.use(session(sess)); 

app.engin('handlebars', hbs.engine); 
app.set('view engine','handle')