
var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');
var passport = require('passport');

/**
  This route is great to populate a profile or bio page, but at current
  implementation it would send all of the information so this is not good to
  be available to everyone. This should be protected or only if you remove
  the information that should remain private.
*/
// router.get('/users/profile/:userId', function(req, res){
//   User.find({ _id: req.params.userId }, function(err, user){
//     if(err){
//       return res.status(500).json({
//         err: err
//       });
//     }
//     return res.status(200).json({
//       user: user
//     });
//   });
// });

router.post('/users/signup', function(req, res){
  var user = new User(req.body);
  if(!req.body.password){
    return res.status(400).json({
      msg: 'Bad Request - Signups require passwords'
    });
  }
  //TODO:check to see if an email is on req.body if not, send 400 with message
  user.setPassword(req.body.password);
  user.save(function(err){
    if(err){
      return res.status(500).json({
        err: err
      });
    }
    return res.status(201).json({
      msg: 'Success!'
    });
  });
});

router.post('/users/login', function(req, res){
  passport.authenticate('local', function(err, user, data){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    if(!user){
      return res.status(401).json({
        msg: "The username or password you have provided is incorrect"
      });
    }
    if(!user.validPassword(req.body.password)){
      return res.status(401).json({
        msg: "The username or password you have provided is incorrect"
      });
    }
    return res.status(200).json({
      token: user.generateJwt()
    });
  })(req, res);
});
<<<<<<< HEAD

router.put('/users/profile/:userId', function(req, res){});
=======
/**
  This route would be needed to update features such as password, age,
  as well as profile pictures, bios, etc. However, those features are
  not implemented at current time.
*/
// router.put('/users/profile/:userId', function(req, res){});
>>>>>>> 91e83b585d9364b00810eec7e4750a4f9974ca46

module.exports = router;
