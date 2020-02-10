(function () {
    'use strict';

angular.module('MenuApp')
       .component('categories', {
           templateUrl: 'src/MenuApp/Templates/categories.template.html',
           bindings: {
               categories: '<'
           }
        });

})();