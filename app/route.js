/**
 * Created by qiuxiaoguang on 17/3/4.
 */
;(function (angular) {
    angular.module("app")
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider
                .when("/list/:category/:page?", {
                    templateUrl: '/app/movie-list/movie-list.html',
                    controller: 'ListController',
                    controllerAs: 'vm'
                })
                .when("/detail/:id",{
                    templateUrl: "/app/movie-detail/movie-detail.html",
                    controller: "DetailController",
                    controllerAs: "vm"
                })
                .otherwise({
                    redirectTo: "/list/in_theaters"
                })
        }]);
})(window.angular);