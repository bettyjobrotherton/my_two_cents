(function() {

  angular.module('two-cents')
         .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var posts = [];
    var selectedPost;
    var baseURL = '/posts/';

    init();

    return {
      getAll: getAll,
      getOne: getOne,
      getSelectedPost: getSelectedPost,
      create: create,
      update: update,
      delete: deleteOne
    };

    function init(){
      $http.get(baseURL)
           .then(function(res){
             posts = res.data.posts;
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function getAll(){
      return posts;
    }

    function getOne(id){
      $http.get(baseURL + id)
           .then(function(res){
            selectedPost = res.data.post[0];//[0] says that we only want the first post in the set; if this returns empty, there will be an error
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function getSelectedPost(){
      return selectedPost;
    }

    function create(newPost){
      $http.post(baseURL, newPost)
           .then(function(res){
             init();
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function update(id, newPostData){
      newPostData.summary = newPostData.body.slice(0, 100) + '...';

      $http.put(baseURL + id, newPostData)
           .then(function(res){
             init();
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function deleteOne(id){
      $http.delete(baseURL + id)
           .then(function(res){
             init();
           })
           .catch(function(err){
             console.log(err);
           });
    }
  }

}());
