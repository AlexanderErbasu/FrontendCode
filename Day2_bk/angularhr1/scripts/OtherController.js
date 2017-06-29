/**
 * Created by Alexandru.Erbasu on 6/28/2017.
 */
angular.module('hrApp').controller('OtherController',['$scope',function($scope) {
    $scope.setTitle = function() {
        $scope.title = "New Title";
    };

}]);