(function() {
    'use strict';

    angular.module('airSchedules').config(appConfiguration);

    appConfiguration.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];
        
        
    function appConfiguration($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        
        $stateProvider.state('login', {
            url: '/',
            templateUrl: 'app/login/login.html',
            controller: 'loginController',
            controllerAs: 'loginCtrl'
        });
    };

})();