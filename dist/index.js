"use strict";
// tsc index.js
// --outDir
// tsc --outDir ./dist ./src/index.ts
// target
// tsc --outDir ./dist --target ES6 ./src/index.ts
// watch
// tsc --outDir ./dist --target ES6 --watch ./src/index.ts
// -p 设置配置文件
function greeter(person) {
    return 'hello, ' + person;
}
var a = null;
var b = 'hello';
console.log(b.anne);
var c;
c = 9;
c = 'a';
// symbol
var sym1 = Symbol('key1');
;
var tom = {
    name: 'Tom',
    age: 3
};
var str = 'a';
// never类型
function fn() {
    throw new Error('error');
}
