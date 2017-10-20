app.controller('shopController', ['$scope', 'ajaxServer', function ($scope, ajaxServer) {
    ajaxServer.ajax('get', 'http://localhost:8090/servers').then(function (data) {
        $scope.user1 = data
    });
    ajaxServer.ajax('get', 'http://localhost:8090/mony').then(function (data) {
        $scope.user2 = data;
        $scope.fn = function(){
            var obj = {};
            obj.imgs = './Scripts/images/four_08.png';
            obj.name = '初相遇';
            obj.con = '哈哈哈哈哈哈';
            obj.price = '123元';
            obj.remove = '111111111111万';
            $scope.user1.push(obj);

        }
    })
}]);