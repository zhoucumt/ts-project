"use strict";
function greeter(person) {
    return 'hello, ' + person;
}
var a = null;
// symbol
var sym1 = Symbol('key1');
// 使用 BigInt 的时候，必须添加 ESNext 的编译辅助库
