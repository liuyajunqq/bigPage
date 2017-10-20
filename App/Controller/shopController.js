app.controller('shopController', ['$scope', 'ajaxServer', '$interval', function ($scope, ajaxServer, $interval) {
    ajaxServer.ajax('get', 'http://localhost:8090/servers').then(function (data) {
        $scope.user1 = data
    });
    ajaxServer.ajax('get', 'http://localhost:8090/mony').then(function (data) {
        $scope.user2 = data;
        $scope.fn = function () {
            var obj = {
                "imgs": "./Scripts/images/four_08.png",
                "name": "初相遇系列一",
                "con": "哈哈哈哈哈哈",
                "price": "123元",
                "remove": "111111111111万"
            };
            var obj1 = {
                "imgs": "./Scripts/images/four_15.png",
                "name": "初相遇系列二",
                "con": "吼吼吼吼吼吼",
                "price": "321元",
                "remove": "222222222222万"
            };
            $scope.user1.push(obj);
            $scope.user1.push(obj1);
        };
        $scope.fn = function (y, m, r) {
            var now = +new Date(),
                stop = +new Date(y, m - 1, r),
                timer = stop - now;
            var days = Math.floor(timer / 1000 / 60 / 60 / 24);
            var hours = Math.floor(timer / 1000 / 60 / 60 % 24);
            var minutes = Math.floor(timer / 1000 / 60 % 60);
            var seconds = Math.floor(timer / 1000 % 60);
            $scope.hours = zero(hours);
            $scope.getMinutes = zero(minutes);
            $scope.seconds = zero(seconds);
        };
        // 加零操作
        function zero(time) {
            return time < 10 ? "0" + time : time
        }

        var timer = $interval(function () {
            $scope.fn(2017, 10, 22)
        }, 1000)
    })
}]);