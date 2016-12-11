
app.service('PostsService',function ($http) {
  var userUrl = 'http://localhost:3000/api/posts';
  this.getPosts= $http.get(userUrl);
});
