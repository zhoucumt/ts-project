"use strict";
var getUserName = function (user) {
    console.log(user.name);
    user.say(user.name);
};
var user = {
    name: 'Tom',
    isMale: false,
    say: function (words) {
        return 'hello world';
    }
};
getUserName(user);

// 类型断言
// 添加字符串索引签名
// 将字面量赋值给另外一个变量
