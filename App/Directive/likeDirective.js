app.directive('like', function () {
    return {
        restrict: 'EA',
        templateUrl: './App/View/template/like.html'
        //link: function (scope, ele, attr) {
        //    $('.more').on('click', function(){
        //        var str = $(this).parent().next().html();
        //        $(this).parent().next().append(str)
        //    })
        //}
    }
});