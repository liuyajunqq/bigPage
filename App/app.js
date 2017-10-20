var app = angular.module('myApp',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('servers',{
            url: '/servers',
            templateUrl: './App/View/template/demo1.html'
        })
        .state('mony',{
            url: '/mony',
            templateUrl: './App/View/template/demo2.html'
        });
    $urlRouterProvider.otherwise('/servers')
});