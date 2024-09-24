const notes = require('./notes.js');
var _ = require('lodash');

// var age = notes.age
const arr = [3,4,2,4,"vivek", "vivek" , false ,true ,false ]  


// console.log(notes.add(6,8));

console.log(_.uniq(arr));
console.log(_.isString(true));