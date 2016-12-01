var User = require('./server/models/user.model.js');

//mock up a request object with a body

var req = {};
req.body = {
  email: 'e@b.com',
  age: 33,
  password: 'password'
};

var user = new User(req.body);
console.log(user);
user.setPassword(req.body.password);
console.log(user);
var passwordIsValid = user.validPassword('password');
console.log(passwordIsValid);
console.log('JWT', user.generateJwt());
