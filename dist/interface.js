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
