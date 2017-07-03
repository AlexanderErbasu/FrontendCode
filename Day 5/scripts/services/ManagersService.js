hrApp.service('ManagersService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findAllManag: function () {

                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        return data;

                    })
                    .error(function (err) {
                        return {

                            "managerId": null

                        };
                    });
            },
            filterManagers: function (data) {
                var checkIfManagExists = function (ID, list) {
                    var exist = false;
                    list.forEach(function (item) {
                        if (item.employeeId == ID)
                            exist = true;
                    });
                    return exist;
                };

                managersIdObj = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].managerId != null && checkIfManagExists(data[i].managerId.employeeId, managersIdObj) == false) {
                        managersIdObj.push(data[i].managerId);
                    }
                }

                return managersIdObj;
            }
        }

    }]
);