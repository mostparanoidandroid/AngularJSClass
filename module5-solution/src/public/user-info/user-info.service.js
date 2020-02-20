(function () {
"use strict";

angular.module('public')
       .service('UserInfoService', UserInfoService);


UserInfoService.$inject = [];
function UserInfoService() {
    var service = this;
    var currentUser;

    service.saveUserInfo = function (user){
        currentUser = user;
    };

    service.getUserInfo = function() {
        return currentUser;
    };
}



})();
    