(function () {

    var sRequest = angular.module('request', []);

    sRequest.factory('postReq', [function () {
        return function (url, dataSend, myCallback) {
            jQuery.post(url, dataSend, function (data) {
                myCallback(data);
            })
            .fail(function (data) {
                myCallback(data);
            });
        }
    }]);

    sRequest.factory('getReq', [function () {
        return function (url, dataSend, callback) {
            jQuery.post(url, dataSend, function (data) {
                myCallback(data);
            })
            .fail(function (data) {
                myCallback(data);
            });
        }
    }])

}());