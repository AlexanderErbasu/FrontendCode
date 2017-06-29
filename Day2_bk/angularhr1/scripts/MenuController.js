/**
 * Created by Alexandru.Erbasu on 6/28/2017.
 */

angular.module('hrApp').controller('MenuController', ['$scope', function($scope) {
    $scope.demoActionList = [
        {
            label: "Math",
            url: "demomath.html"
        }
    ];

}]);
