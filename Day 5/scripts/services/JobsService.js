hrApp.service('JobsService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findAllJobs: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "jobId": 1
                        };
                    });
            }
        }
    }]
);