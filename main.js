var fs = require('fs');
var os = require('os');

console.log(os);

console.log(os.userInfo());
console.log(os.userInfo().username);

fs.appendFile('greeting.txt' , 'Hi ' + 'Hello Vivek' + '!\n' , () => console.log('success'));