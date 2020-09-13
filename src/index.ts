// tsc index.js
// --outDir
// tsc --outDir ./dist ./src/index.ts

// target
// tsc --outDir ./dist --target ES6 ./src/index.ts

// watch
// tsc --outDir ./dist --target ES6 --watch ./src/index.ts

// -p 设置配置文件
function greeter(person: string) {
    return 'hello, ' + person;
}
const a: any = null;
let b: any = 'hello';
console.log(b.anne);

let c: string | number;
c = 9;
c = 'a';

// symbol
const sym1 = Symbol('key1');

// 使用 BigInt 的时候，必须添加 ESNext 的编译辅助库

interface Person {
    name: string,
    age: number
};

let tom: Person = {
    name: 'Tom',
    age: 3
}
let str: string = 'a'


// never类型
function fn(): never {
    throw new Error('error');
}