const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const Person = require('./models/person');

passport.use(new LocalStrategy( async (USERNAME , password , done) => {

    // authentication logic here
  
    try{
      // console.log('Received credentials', USERNAME , password);
      const user = await Person.findOne({username : USERNAME});
      if(!user){
        return done(null ,false , {message : 'Incorrect username'});  
        }
    // const isPasswordMatch = user.password == password ? true : false; // previously stored like this

    const isPasswordMatch = await user.comparePassword(password);
    if(isPasswordMatch){
      return done(null , user);
    }else{
      return done(null , false , {message : 'Incorrected password'});
    }
    }
    catch(err){
    return done(err);
    }
  } ))
  
  module.exports = passport; // Export configured passport