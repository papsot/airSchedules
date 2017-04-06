(function() {
    'use strict';

    angular.module('airSchedules.login').controller('loginController', loginController);

    loginController.$inject = [
        '$scope'
    ];

    function loginController($scope) {
        $scope.username = 'Papsot';
        $scope.password = '12345';
    }
})();