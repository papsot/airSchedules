'use strict';

(function () {
    'use strict';

    angular.module('airSchedules.container', []).config(containerConfiguration);

    containerConfiguration.$inject = ['$stateProvider'];

    function containerConfiguration($stateProvider) {
        $stateProvider.state('container', {
            url: '/container',
            templateUrl: 'app/container/container.html',
            controller: 'containerController'
        });
    }
})();
(function () {
    'use strict';

    angular.module('airSchedules.login', ['firebase']).config(function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'loginController',
            controllerAs: 'loginCtrl'
        });
    });
})();
(function () {

    // Initialize Firebase
    // var config = {
    // 	apiKey: "AIzaSyAt0QgLu3SdSpAmbuw2RGhxN-_NZ4jxhW4",
    // 	authDomain: "airschedules.firebaseapp.com",
    // 	databaseURL: "https://airschedules.firebaseio.com",
    // 	projectId: "airschedules",
    // 	storageBucket: "airschedules.appspot.com",
    // 	messagingSenderId: "1033945425237"
    // };
    // firebase.initializeApp(config);


    // Ionic Starter App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    angular.module('airSchedules', ['ionic', 'ui.router', 'airSchedules.login', 'airSchedules.container']);

    angular.module('airSchedules').run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

    angular.element(document).ready(function () {
        if (window.cordova) {
            document.addEventListener('deviceready', function () {
                console.log('running on a device');
                angular.bootstrap(document.body, ['airSchedules']);
            }, false);
        } else {
            console.log('running on browser');
            angular.bootstrap(document.body, ['airSchedules']);
        }
    });
})();

(function () {
    'use strict';

    angular.module('airSchedules').config(appConfiguration);

    appConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

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
(function () {
    'use strict';

    angular.module('airSchedules.container').controller('containerController', containerController);

    containerController.$inject = ['$scope', '$stateParams', '$state'];

    function containerController($scope, $stateParams, $state) {
        console.log($stateParams);
        console.log('hello container');
        console.log($state.current);
    }
})();
(function () {
    'use strict';

    angular.module('airSchedules.login').controller('loginController', loginController);

    loginController.$inject = ['$scope', '$state'];

    function loginController($scope, $state) {

        $scope.login = function () {
            $state.go('container');
        };
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