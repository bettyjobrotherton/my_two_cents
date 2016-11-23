(function() {

  angular.module('two-cents')
         .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var posts = [];
    var baseURL = '/posts/';

    init();

    return {
      getAll: getAll,
      getOne: getOne,
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

    function getOne(id){}

    function create(newPost){
      $http.post(baseURL, newPost)
           .then(function(res){
             init();
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function update(id, newPostData){}

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
