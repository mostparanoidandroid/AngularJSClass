(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/MenuApp/Templates/home.template.html'
      })
    
      // Categories page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/MenuApp/Templates/categories.template.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
    
      //Items page
      .state('items', {
        url: '/items/{categoryTitle}_{categoryShortName}',
        templateUrl: 'src/MenuApp/Templates/items.template.html',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
          items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
    
    }
    
    })();
    