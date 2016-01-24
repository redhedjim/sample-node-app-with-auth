angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    
    $routeProvider
    
        //home page route
        .when('/', {
        templateUrl: './home.html'
    })
    
    //login page
    .when('/login', {
        templateUrl: './login.html',
        controller: 'mainController',
        controllerAs: 'login'
    });
    
    //get rid of the hash in the URL
    $locationProvider.html5Mode(true);
    
});