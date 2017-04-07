(function() {
    'use strict';

    angular.module('airSchedules').config(appConfiguration);

    appConfiguration.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function appConfiguration($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        
        // $stateProvider.state('login', {
        //     url: '/login',
        //     templateUrl: 'app/login/login.html',
        //     controller: 'loginController',
        //     controllerAs: 'loginCtrl'
        // });
    }

})();