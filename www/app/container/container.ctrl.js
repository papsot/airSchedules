(function () {
    'use strict';

    angular.module('airSchedules.container').controller('containerController', containerController);

    containerController.$inject = [
        '$scope',
        '$stateParams',
        '$state'
    ];

    function containerController($scope, $stateParams, $state) {
        console.log($stateParams);
        console.log('hello container');
        console.log($state.current);
    }
})();