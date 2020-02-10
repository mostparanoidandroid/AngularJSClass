(function () {
    'use strict';

angular.module('MenuApp')
       .controller('ItemsController', ItemsController);


ItemsController.$inject = ['items', '$stateParams'];
function ItemsController(items, $stateParams){
    var itemsCtrl = this;
    itemsCtrl.items = items.data.menu_items;
    itemsCtrl.categoryTitle = $stateParams.categoryTitle;

};

})();