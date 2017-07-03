hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactoryBackup',
    function ($scope, $http, $routeParams, $location, commonResourcesFactoryBackup) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        /*
        $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            });
            */
        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });
        $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.departaments = data;
            });
        $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                managersIdObj={};
                for (var i=0;i<data.length;i++){
                    if(data[i].managerId != null){
                        managersIdObj[data[i].managerId] =true;
                    }
                }
                for(var i=0;i<data.length;i++)
                    if(managersIdObj[data[i].if==true]){
                        $scope.managers.push(data[i]);
                    }
            });
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);