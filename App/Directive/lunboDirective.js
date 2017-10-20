app.directive('lunbo', function () {
    return {
        restrict: 'EA',
        templateUrl: './App/View/template/lunbo.html',
        link: function (scope, ele, attr) {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 1000,
                loop: true,//无缝轮播
                effect:"slide",
                observer: true,
                pagination:".swiper-pagination",//分页器
                paginationType:"bullets",//分页器类型
                paginationClickable:true,//点击分页器
                autoplayDisableOnInteraction:false,//点击分页器之后继续进行轮播
                keyboardControl:true,//键盘
                mousewheelControl:true//滚轮
            })
        }
    }
});