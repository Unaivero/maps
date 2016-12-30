var app = angular.module('NearMeApp', ['leaflet-directive', 'ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'mapmain.html' 
    }) 
  .when('/about', { 
      controller: 'AboutController', 
      templateUrl: 'mapabout.html' 
    }) 
     .otherwise({ 
      redirectTo: '/' 
    }); 
});

