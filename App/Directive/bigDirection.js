app.directive('big', function () {
    return {
        restrict: 'EA',
        templateUrl: './App/View/template/big.html',
        link: function (scope, ele, attr) {
            $('.hh').on('click', 'b', function () {
                $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active')
            });
            $('ul li').on('click', function(){
                $(this).addClass('on').siblings().removeClass('on')
            })
        }
    }
})