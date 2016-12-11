var app = angular.module('pb',['ngRoute'])
'use strict'

app.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    templateUrl : 'views/Home.html',
    controller : 'MainCtrl'
  })
    .otherwise({
      redirectTo : '/'
    });
}]);

