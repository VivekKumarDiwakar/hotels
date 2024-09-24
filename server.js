const express = require('express')
const app = express();
const db = require('./db');
const passport = require('./auth');
require('dotenv').config();


// const MenuItems = require('./models/MenuItems');

const bodyParser = require('body-parser');
app.use(bodyParser.json());// req.body
const PORT = process.env.PORT || PORT;


// Middleware Function
const logRequest = (req , res , next) => {
  console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`);
  next(); // Move to the next phase
}
app.use(logRequest);


app.use(passport.initialize());

const localAuthMiddleware =  passport.authenticate('local' ,{session : false}) 
app.get('/',function (req, res) {
  res.send('Welcome my first server is live')
})


 
// Import the router files
   const personRoutes = require('./routes/personRoutes');
   const MenuRoutes = require('./routes/MenuRoutes');
   //use the routers with authentication
   app.use('/person' , localAuthMiddleware, personRoutes);
   app.use('/MenuItems' , MenuRoutes);

    

   app.listen(3000 , ()=> {
    console.log('Listening on port 3000');
  })