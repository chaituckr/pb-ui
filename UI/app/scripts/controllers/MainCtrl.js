
app.controller('MainCtrl',function($scope,$location,PostsService,$http){
    $scope.title = "";

    var responsePromise,successHandler, errorHandler;
    responsePromise = PostsService.getPosts;
    successHandler = function (data) {
      $scope.posts = data;
    };
    errorHandler = function (err) {
      console.log(err);
    };
    responsePromise.then(successHandler,errorHandler);
    console.log($scope.posts);
    /*$scope.posts.forEach(function (post) {
        $scope.title = post.title;
    })*/
});
