/**
 * Created by qiuxiaoguang on 2017/3/3.
 */
;(function (angular) {
    angular.module("app", ["ngRoute"])
        .controller("SearchController", [
            "$scope",
            "$route",
            function ($scope, $route) {
                var vm = this;
                vm.searchTxt = "";
                vm.search = function (searchTxt) {
                    $route.updateParams({
                        category: "search",
                        page: 1,
                        q: searchTxt
                    });
                    vm.searchTxt = "";
                }
            }])
})(window.angular);