(function () {

    angular.module('public')
           .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['userInfo'];
    function MyInfoController(userInfo){
       var myInfoCtrl = this;
       myInfoCtrl.UserInfo = userInfo;
    }
    
    })();