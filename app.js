angular.module('userApp', [
    'ngAnimate',
    'app.routes',
    'authService',
    'mainCtrl',
    'userCtrl',
    'userService'
])

//application configuration to integrate token into requests
.config(function($httpProvider) {
    
    //atach our auth interceptor to the http requests
    $httpProvider.inteceptors.push('AuthInterceptor');
});