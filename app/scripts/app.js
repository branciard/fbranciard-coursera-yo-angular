'use strict';

/**
 * @ngdoc overview
 * @name fbranciardCourseraYoAngularApp
 * @description
 * # fbranciardCourseraYoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('fbranciardCourseraYoAngularApp', ['ui.router','ngResource','ngDialog','lbServices'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/main.html'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
            .state('app.shops', {
                url:'shops',
                views: {
                    'content@': {
                        templateUrl : 'views/shops.html',
                        controller  : 'ShopsController'                  
                    }
                }
            })
            .state('app.users', {
                url:'users',
                views: {
                    'content@': {
                        templateUrl : 'views/users.html',
                        controller  : 'UsersController'                  
                    }
                }
            })
            
            ;
    
        $urlRouterProvider.otherwise('/');
    })
;

