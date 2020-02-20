(function () {

angular.module('public')
       .controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserInfoService', 'MenuService'];
function SignUpController(UserInfoService, MenuService){
    var signUpCtrl = this;

    signUpCtrl.submit = function () {
        MenuService.getMenuItem(signUpCtrl.user.favoriteDish)
                   .then(function Success(response){
                            signUpCtrl.user.favoriteMenuItem = response;
                            UserInfoService.saveUserInfo(signUpCtrl.user);
                            signUpCtrl.completed = true;
                        }, function Failure(failResponse) {
                            signUpCtrl.invalidMenuItem = true;
                        });
    };
}

})();