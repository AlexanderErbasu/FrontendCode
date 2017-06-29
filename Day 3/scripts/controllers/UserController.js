/**
 * Created by Alexandru.Erbasu on 6/29/2017.
 */

hrApp.controller('UserController', ['$scope', function($scope){

    $scope.user={};
    $scope.userList={};
    $scope.back = function() {

        $location.url('/employeeslist/');
    }
    $scope.reset = function () {
        $location.url('/user/');
    }
    $scope.save = function () {
        $scope.userList.push(angular.copy($scope.user));
    }
    $scope.show_hide = function () {
        $scope
    }

}]);

