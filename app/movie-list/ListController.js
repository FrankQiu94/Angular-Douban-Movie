/**
 * Created by qiuxiaoguang on 17/3/4.
 */
;(function (angular) {
    angular.module("app")
        .controller("ListController", [
            "$scope",
            "$route",
            "$routeParams",
            "HttpService",
            function ($scope, $route, $routeParams, HttpService) {
                var vm = this;
                vm.title = "Loading...";
                vm.movies = [];
                vm.loading = true;

                vm.page = parseInt($routeParams.page) || 1;
                //
                vm.total = 0;
                vm.totalPage = 0;
                var pageSize = 10;
                var category = $routeParams.category;

                vm.go = function (page) {
                    if(page <= 0) return;
                    if(page > vm.totalPage) return;
                    // window.location.href = "http://api.douban.com/v2/movie/" + category + "/" + page;
                    $route.updateParams({
                        page: page
                    });
                };

                HttpService.jsonp({
                    url: "http://api.douban.com/v2/movie/" + category,
                    data: {
                        start: (vm.page - 1)*pageSize,
                        count: pageSize,
                        q: $routeParams.q
                    },
                    success: function (data) {
                        vm.title = data.title;
                        vm.movies = data.subjects;
                        vm.loading = false;
                        vm.total = data.total;
                        vm.totalPage = Math.ceil(vm.total / pageSize);
                        console.log(data);
                        $scope.$apply();
                    }
                });
            }
        ])
})(window.angular);