angular.module('mainCtrl', [])

.controller('mainController', function($rootScope, $location, Auth) {
    
    var vm = this;
    
    //get info if a person is logged in
    vm.loggedIn = Auth.isLoggedIn();
    
    //check to see if a user in logged in on each request
    $rootScope.$on('$routeChangeStart', function() {
        vm.loggedIn = Auth.isLoggedIn();
        
        //get user info on route change
        Auth.getUser()
        .success(function(data) {
            vm.user = data;
        });
    });
    
    //function to handle login form
    vm.doLogin = function() {      
        vm.processing = true;
        
        //clear the error
        vm.error = '';
        
        //call the Auth.login() function
        Auth.login(vm.loginData.username, vm.loginData.password)      
            .when(function(data) {
            vm.processing = false;
            
                $location.path('/users');
            
               
        });
     };
    
    //function to handle logging out
    vm.doLogout = function() {
        Auth.logout();
        //reset all user info
        vm.user = {};
        $location.path('/login');
    };
    
});