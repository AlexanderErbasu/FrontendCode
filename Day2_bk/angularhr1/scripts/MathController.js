/**
 * Created by Alexandru.Erbasu on 6/28/2017.
 */

angular.module('hrApp').controller('MathController', ['$scope', function($scope) {

    $scope.result=0;
    $scope.add = function() {
        $scope.result = $scope.numA + $scope.numB;
    };
    $scope.substract = function() {
        $scope.result = $scope.numA - $scope.numB;
    };
    $scope.multiply = function() {
        $scope.result = $scope.numA * $scope.numB;
    };
    $scope.divide = function() {
        $scope.result = $scope.numA / $scope.numB;
    };


}]);