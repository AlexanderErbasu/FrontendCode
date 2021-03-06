hrApp.controller('EmployeeListController', ['$scope', '$http', '$location','commonResourcesFactory',
    function ($scope, $http, $location, $commonResourcesFactory) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.employees = []; // Employee list


        //TODO #HR3 Load employee list from server using commonResourcesFactory
        //$commonResourcesFactory.findAllEmployeesUrl instead of the URL --> factory
        $http.get($commonResourcesFactory.findAllEmployeesUrl)
            .success(function (data, status, headers,config) {
                 $scope.employees = data;


        })
            .error(function (data, status,header, config) {
                alert("Error." + status);
        });


        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeesview/' + employeeId);
        };


    }]);