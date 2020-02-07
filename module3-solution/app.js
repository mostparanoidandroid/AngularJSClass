(function () {
'use strict';

angular.module('MenuFilteringApp',[])
.controller('MenuFilterController',MenuFilterController)
.service('MenuFilterService', MenuFilterService)
.constant('APIBasePath','https://davids-restaurant.herokuapp.com')
.directive('foundItems', FoundItems);

function FoundItems() {
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
            items: '<foundItemsList',
            onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'foundItemsCtrl',
        bindToController: true
    };

    return ddo;
}

function FoundItemsDirectiveController() {
    var foundItemsCtrl = this;
    // for (var i = 0; i < foundItemsCtrl.foundItemsList.length; i++) {
    //     var menuItem = foundItemsCtrl.foundItemsList[i];
    //         console.log(menuItem);
    // }
}

MenuFilterController.$inject = ['MenuFilterService'];
function MenuFilterController(MenuFilterService){
    var menuFilterCtrl = this;

    menuFilterCtrl.FilterItems = function(){
        var promise = MenuFilterService.getMenuItems();

        promise.then(function (response) {
            menuFilterCtrl.menuItems = response.data.menu_items;
            menuFilterCtrl.foundItemsList = [];
            
            for (var i = 0; i < menuFilterCtrl.menuItems.length; i++) {
                var menuItem = menuFilterCtrl.menuItems[i];

                if (menuItem.description.toLowerCase().indexOf(menuFilterCtrl.searchTerm) !== -1) {
                    menuFilterCtrl.foundItemsList.push(menuItem);
                }
            }

            console.log("foundItemsList");
            console.log(menuFilterCtrl.foundItemsList);
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    menuFilterCtrl.removeItem = function (index){
        menuFilterCtrl.foundItemsList.splice(index, 1);
    };
}

MenuFilterService.$inject = ['$http', 'APIBasePath'];
function MenuFilterService($http, APIBasePath){
    var service = this;

    service.getMenuItems = function() {
        var response = $http({
            method: 'GET',
            url: (APIBasePath + '/menu_items.json')
        });

        return response;
    };

}

})();
