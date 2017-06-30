hrApp.controller('ColorsController', ['$scope',function($scope){
    $scope.colors = [
        {
            "text" : "muted",
            "class": "text-muted",
            "type" : "strong"
    },
    {
        "text" : "primary",
        "class": "text-primary",
        "type" : "strong"
    },
    {
        "text" : "success",
        "class": "text-success",
        "type" : "strong"
    },
    {
        "text" : "info",
        "class": "text-info",
        "type" : "boring"
    },
    {
        "text" : "warning",
        "class": "text-warning",
        "type" : "boring"
    },
    {
        "text" : "danger",
        "class": "text-danger",
        "type" : "boring"
    }
    ];
    $scope.colorStyle="text-muted"
$scope.changeColor = function () {
    $scope.colorStyle=$scope.dropDown.class;
}



}]);