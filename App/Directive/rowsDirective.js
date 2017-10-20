app.directive('rows', function () {
    return {
        restrict: 'EA',
        templateUrl: './App/View/template/rows.html',
        link: function (scope, ele, attr) {
            var myScroll = new IScroll('.gun', {
                mouseWheel: true,
                scrollX: true
            })
        }
    }
});