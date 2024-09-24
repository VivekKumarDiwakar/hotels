const express = require('express');
const router = express.Router();
const MenuItems = require('./../models/MenuItems');



// For MenuItems

  // POST route to add a person 
  router.post('/', async (req , res) =>{
    
    try{
      const data =  req.body; // Assuming the request body contains the person data

      // Create a new Person document using the Mongoose model
      const newMenuItems = new MenuItems(data);
  
      // Save the new Person to the database
      const response = await newMenuItems.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal Server Error'});
    }
  })
  
  router.get('/' , async (req , res) =>{
    try{
      const data = await MenuItems.find();
      console.log('data fetched');
      res.status(200).send(data);
    }
    catch(err){
     console.log(err);
     res.status(500).json({error : 'Internal Server Error'});
    }
   })
   module.exports = router;


   //  // POST route to add a person 
//  app.post('/person', async (req , res) =>{
    
//     try{
//       const data =  req.body; // Assuming the request body contains the person data

//       // Create a new Person document using the Mongoose model
//       const newPerson = new Person(data);
  
//       // Save the new Person to the database
//       const response = await newPerson.save();
//       console.log('data saved');
//       res.status(200).json(response);
//     }
//     catch(err){
//     console.log(err);
//     res.status(500).json({error : 'Internal Server Error'});
//     }
//   })
  
// //   //Get Method

// //   app.get('/person' , async (req , res) =>{
// //    try{
// //      const data = await Person.find();
// //      console.log('data fetched');
// //      res.status(200).send(data);
// //    }
// //    catch(err){
// //     console.log(err);
// //     res.status(500).json({error : 'Internal Server Error'});
// //    }
// //   })

