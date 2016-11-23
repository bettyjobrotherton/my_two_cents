(function() {

  angular.module('two-cents')
         .controller('main-controller', MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService){
    $scope.posts = PostService.getAll();
    $scope.create = create;
    $scope.delete = deleteOne;
    $scope.getOne = getOne;
    $scope.updatePost = updatePost;

    $scope.$watch(function(){
      return PostService.getAll();
    }, function(){
      $scope.posts = PostService.getAll();
    });

    function create(newPost){
      PostService.create(newPost);
      $scope.newPost = {};
    }

    function deleteOne(id){
      PostService.delete(id);
      $scope.deleteID = {};
    }

    function getOne(id){
      PostService.getOne(id);
      $scope.postID = '';
    }

    function updatePost(id, updatedPost){
      PostService.update(id, updatedPost);
      $scope.updateID = '';
      $scope.updatedPost = {};
    }

  }

}());
