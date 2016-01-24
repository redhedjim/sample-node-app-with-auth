//angular.module('stuffService', [])
//
//.factory('Stuff', function($http) {
//    
//    //create the object
//    var factory = {};
//    
//    //a function to get all the stuff
//    myFactory.all = function() {
//        return $http.get('/api/stuff');
//    };
//    
//    return myFactory;
//});
//
//// inject the stuff service into our main Angular module
//angular.module('myApp', ['stuffService'])
//
////create a controller and inject the Stuff factory
//.controller('userController', function(Stuff) {
//    
//    var vm = this;
//    
//    //get all the stuff
//    Stuff.all()
//    
//        .success(function(data) {
//        
//        //bind the data to a controller variable
//        //this comes from the stuffService
//        vm.stuff = data;
//        
//    });
//});

angular.module('userService', [])

.factory('User', function($http) {
    
    //create a new object
    var userFactory = {};
    
    //get a single user
    userFactory.get = function(id) {
    return $http.get('/api/users/' + id);
};
    
    //get all users
    userFactory.all = function() {
        return $http.get('/api/users/');
    };
    
    //create a user
    userFactory.create = function(userData) {
        return $http.post('/api/users/', userData);
    };
    //update a user
    userFactory.update = function(id, userData) {
        return $http.put('/api/users/' + id, userData);
    };
    //delete a user
    userFactory.delete = function(id) {
        return $http.delete('/api/users/' + id);
    };
    //return our entire userFactory object
    return userFactory;
});

   