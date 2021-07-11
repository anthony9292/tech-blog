///Dependencies
require('dotenv').config()
const path = require('path');
const express = require('express'); 
const session = require('express-session'); 
const routes = require('./controllers'); 
const exphbs = require('express-handlebars'); 
const helpers = require('./utils/helpers')
const hbs = exphbs.create({ helpers });


const sequelize = require('./config/connection'); 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

 //express app
 
 const PORT = process.env.PORT || 3000;

 const app = express(); 

 app.set("port", PORT)
//sessions with cookies 
//const sess = {
 // secret: process.env.SECRET,
  //calls for session to use cookies 
 // cookie: {},
 // resave: false,
// saveUninitialized: false,
// store: new SequelizeStore({
 //  db: sequelize
 //   })
//  };

 
  app.use(session(sess));
  

//sets handlebars as default template 
app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars'); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname +'/public')));

//routes
app.use(routes); 

sequelize.sync({ force: false }).then(() => { 
 app.listen(PORT, () => console.log('now listening on PORT 3444'))
})

 






 


