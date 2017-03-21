/**
 * Created by qiuxiaoguang on 17/3/4.
 */
;(function (angular) {
    angular.module("app")
        .service("HttpService", [function () {
            this.jsonp = function (opts) {
                var script = document.createElement("script");
                var callback = "IT" + Math.random().toString().substr(2);
                window[callback] = function (data) {
                    opts.success(data);
                    document.body.removeChild(script);
                    delete window[callback];
                };
                var queryStr = [];
                var queryObj = opts.data;
                for (var queryKey in queryObj) {
                    queryStr.push(queryKey + "=" + queryObj[queryKey]);
                }
                ;
                queryStr = queryStr.join("&");
                script.src = opts.url + "?callback=" + callback + "&" + queryStr;
                document.body.appendChild(script);
            }
        }])
})(window.angular);