(function () {
    'use strict';

angular.module('data')
       .service('MenuDataService',MenuDataService)
       .constant('APIBasePath','https://davids-restaurant.herokuapp.com');

MenuDataService.$inject = ['$http', 'APIBasePath'];
function MenuDataService($http, APIBasePath) {
    var service = this;

    service.getAllCategories = function() {
        var response = $http({
            method: 'GET',
            url: (APIBasePath + '/categories.json')
        });
        
        return response;
    };

    service.getItemsForCategory = function(short_name) {
        var response = $http({
            method: 'GET',
            url: (APIBasePath + '/menu_items.json'),
            params: { category: short_name }
        });
        
        return response;
    }
}


})();