(function () {
    'use strict';

    angular.module('airSchedules.login').controller('loginController', loginController);

    loginController.$inject = [
        '$scope',
        '$state'
    ];

    function loginController($scope, $state) {


        $scope.login = function() {
            $state.go('container');
        }
        // $scope.messages = chatmessages;

        // $scope.addMessage = function () {
        //     $scope.messages.$add({
        //         content: 'First!!!!111'
        //     });
        // }


        // $scope.messages.$loaded(function () {
        //     if ($scope.messages.length === 0) {
        //         $scope.messages.$add({
        //             content: 'Hello Firebase!'
        //         });
        //     }

        //     console.log($scope.messages);
        // })

        // let ref = firebase.database().ref();

        $scope.username = 'Papsot';
        $scope.password = '12345';

        $scope.user = {
            username: $scope.username,
            password: $scope.password
        };
    }
})();