hrApp.controller('MathController', ['$scope', function($scope){

    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        $scope.op1=$scope.numA+$scope.numB;
        $scope.op2=$scope.numA-$scope.numB;
        $scope.op3=$scope.numA*$scope.numB;
        $scope.op4=$scope.numA/$scope.numB;
//        TODO #13 refactor your calculations using MathService
    }

}]);
