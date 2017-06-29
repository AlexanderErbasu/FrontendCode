/**
 * Created by Alexandru.Erbasu on 6/28/2017.
 */
angular.module('hrApp').controller('DescriptionController',['$scope',function($scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.truth=true;
    $scope.toggleDescriptionShow = function () {
        if($scope.truth)
            $scope.truth=false;
        else
            $scope.truth=true;

    };

    $scope.descriptionShow = function() {
        if($scope.truth)
            return true;
        else
            return false;
    };



}]);