hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory','JobsService','DepartamentsService','ManagersService',
    function($scope, $http, $location, CommonResourcesFactory, JobsService, DepartamentsService,ManagersService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1


        JobsService.findAllJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            });
        DepartamentsService.findAllDep()
            .then(function (res) {
                $scope.departaments = res.data;
            });
        ManagersService.findAllManag()
            .then(function (res) {
                $scope.managers = ManagersService.filterManagers(res.data);
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            });

        $scope.create = function () {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: $scope.employee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);