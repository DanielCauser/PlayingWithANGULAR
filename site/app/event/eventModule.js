//(function () {
    angular.module('eventModule', [])

        .controller('EventCtrl', ['$scope', function ($scope) {
            $scope.title = "Test for scope in a controller!"
        }])
//})