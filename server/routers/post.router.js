var express = require('express');
var router = express.Router();

var Post = require('../models/post.model.js');

router.get('/posts', function(req, res){
  Post.find({}, function(err, posts){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      posts: posts
    });
  });
});

router.get('/posts/:id', function(req, res){
  Post.find({_id: req.params.id}, function(err, post){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      post: post
    });
  });
});

router.post('/posts', function(req, res){
  var post = new Post(req.body);
  post.postDate = new Date();
  post.summary = req.body.body.slice(0, 100) + '...';
  post.save(function(err){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(201).json({
      msg: 'Success!'
    });
  });
});

router.put('/posts/:id', function(req, res){
  req.body.summary = req.body.body.slice(0, 100) + '...';

  Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldPost){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      msg: 'Update successful!'
    });
  });
});

router.delete('/posts/:id', function(req, res){
  Post.findOneAndRemove({_id: req.params.id}, function(err, deletedPost){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      msg: 'Post deleted successfully'
    });
  });
});

module.exports = router;
