//  Bytedance Tracking   字节跳动(bytedance)追踪
    (function (r, d, s, l) {
        var meteor = r.meteor = r.meteor || []; //r代表window meteor   meteor==>window.meteor 或者 []空数组

        meteor.methods = ["track", "off", "on"]; //meteor的方法有 track off on 

        meteor.factory = function (method) {
            return function () {
                var args = Array.prototype.slice.call(arguments); //给 Array 对象添加新的方法并修改其this指向对象
                //Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组

                args.unshift(method); //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。 在args数组开头添加"track", "off", "on";
                meteor.push(args); //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。  在meteor方法的末尾上添加数组
                return meteor  //meteor =  在meteor末尾添加args,(args数组)的开头添加["track", "off", "on"];
            }
        };
        for (var i = 0; i < meteor.methods.length; i++) {
            var key = meteor.methods[i]; //key ==> "track", "off", "on"  Random
            meteor[key] = meteor.factory(key)
        }
        meteor.load = function () {
            var js,
                fjs = d.getElementsByTagName(s)[0];  // document.getElementsByTagName("script")[0];

            js = d.createElement(s);  // "script" ,document.createElement("script");

            js.src = "https://analytics.snssdk.com/meteor.js/v1/" + l + "/sdk"; // l = 1648623955154956

            fjs.parentNode.insertBefore(js, fjs)  //向列表中插入一个项目：

            // document.getElementById("myList").insertBefore(newItem,existingItem);newItem新的 existing 存在的
        };
        meteor.load();

        if (meteor.invoked) { return } //被调用

        meteor.invoked = true;

        meteor.track("pageview")  //track追踪 ==> pageview

    })(window, document, "script", "1648623955154956");//自调用函数形参为 r d s l

//  End Bytedance Tracking 字节跳动(bytedance)追踪结束