hrApp.service('DepartamentsService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findAllDep: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {

                            "departmentId": 90
                        };
                    });
            }
        }
    }]
);