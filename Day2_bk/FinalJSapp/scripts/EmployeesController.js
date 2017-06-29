/**
 * Created by Alexandru.Erbasu on 6/28/2017.
 */

angular.module('hrApp').controller('EmployeesController',['$scope',function($scope){

$scope.employeeList = [
    {
        "firstName": 'John',
        "lastName": 'King',
        "phone": '0123456789',
        "salary": 4500,
        "url" : '#'
    },
    {
        "firstName": 'Steven',
        "lastName": 'Gerard',
        "phone": '0123456789',
        "salary": 4500,
        "url" : '#'

    },
    {
        "firstName": 'Diana',
        "lastName": 'Ross',
        "phone": '0123456789',
        "salary": 4500,
        "url" : '#'

    },
    {
        "firstName": 'Mike',
        "lastName": 'Bob',
        "phone": '0123456789',
        "salary": 4500,
        "url" : '#'

    },
    {
        "firstName": 'Emily',
        "lastName": 'Hudson',
        "phone": '0123456789',
        "salary": 4500,
        "url" : '#'
    }
]

}]);