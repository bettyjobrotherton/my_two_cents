(function() {

  angular.module('two-cents')
         .controller('main-controller', MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService){
    $scope.posts = PostService.getAll();
    $scope.create = create;

    $scope.$watch(function(){
      return PostService.getAll();
    }, function(){
      $scope.posts = PostService.getAll();
    });

    function create(newPost){
      PostService.create(newPost);
      $scope.newPost = {}; 
    }

  }

}());
