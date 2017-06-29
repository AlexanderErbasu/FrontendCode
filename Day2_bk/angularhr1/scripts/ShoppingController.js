/**
 * Created by Alexandru.Erbasu on 6/28/2017.
 */

angular.module('hrApp').controller('ShoppingControllers',['$scope',function($scope){

    $scope.pictures = [
        {
            "name" : "/images/pc-master-race.jpg",
            "url" : '#'
        },
        {
            "name" : "/images/ocuk-pc-page-pcmonitorperipherals.png",
            "url" : '#'

        },
        {
            "name" : '/images/maxresdefault.jpg',
            "url" : '#'

        },
        {
            "name" : "/images/PC-Specialist-Chassis.png",
            "url" : '#'

        }
    ]

}]);