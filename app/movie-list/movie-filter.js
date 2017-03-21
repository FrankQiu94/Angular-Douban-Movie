/**
 * Created by qiuxiaoguang on 17/3/4.
 */
;(function (angular) {
    angular.module("app")
        .filter("getNames", [function () {
            return function (input, join) {
                var names = [];
                input.forEach(function (man) {
                    names.push(man.name);
                });
                return names.join(join || "、");
            }
        }]);
})(window.angular);