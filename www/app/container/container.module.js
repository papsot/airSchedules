(function() {
    'use strict';

    angular.module('airSchedules.container', [])
        .config(containerConfiguration);

    containerConfiguration.$inject = [
        '$stateProvider'
    ];

    function containerConfiguration($stateProvider) {
        $stateProvider.state('container',{
            url: '/container',
            templateUrl: 'app/container/container.html',
            controller: 'containerController'
        });
    }
})();