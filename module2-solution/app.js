(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController',ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.getItemsToBuy();

  list1.addItem = function (itemIndex) {
    try {
      ShoppingListCheckOffService.addPurchasedItem(list1.items[itemIndex].name, list1.items[itemIndex].quantity);
      ShoppingListCheckOffService.removeItemToBuy(itemIndex);
    } catch (error) {
      list1.errorMessage = error.message;
    }
  };

  list1.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.addItemToBuy(list1.items[itemIndex].name, list1.items[itemIndex].quantity);
    ShoppingListCheckOffService.removePurchasedItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getPurchasedItems();

  list2.addItem = function (itemIndex) {
    try {
      ShoppingListCheckOffService.addItemToBuy(list2.items[itemIndex].name, list2.items[itemIndex].quantity);
      ShoppingListCheckOffService.removePurchasedItem(itemIndex);
    } catch (error) {
      list2.errorMessage = error.message;
    }
  };

  list2.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.addPurchasedItem(list2.items[itemIndex].name, list2.items[itemIndex].quantity);
    ShoppingListCheckOffService.removeItemToBuy(itemIndex);
  };
}

function ShoppingListCheckOffService() {
  var service = this;
  var itemsPurchased = [];
  var itemsToBuy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Beer",
      quantity: "200"
    },
    {
      name: "Pizza",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Vanilla",
      quantity: "5"
    }
  ];

  service.addItemToBuy = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsToBuy.push(item);
};

  service.addPurchasedItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsPurchased.push(item);
  };

  service.removeItemToBuy = function (itemIndex) {
    itemsToBuy.splice(itemIndex, 1);
  };

  service.removePurchasedItem = function (itemIndex) {
    itemsPurchased.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getPurchasedItems = function () {
    return itemsPurchased;
  };
}

})();
