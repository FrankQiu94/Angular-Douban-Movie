/**
 * Created by qiuxiaoguang on 17/3/5.
 */
;(function (angular) {
    angular.module("app")
        .controller("DetailController",[
            "$scope",
            "$routeParams",
            "HttpService",
            function ($scope,$routeParams,HttpService) {
                var vm = this;
                var id = $routeParams.id;
                vm.loading = true;
                HttpService.jsonp({
                    url: "http://api.douban.com/v2/movie/subject/" + id,
                    success: function (data) {
                        vm.movie = data;
                        vm.lading = false;

                        $scope.$apply();
                    }
                });
        }])
})(window.angular);