/**
 * ES6中允许使用反引号 ` 来创建字符串，
 * 此种方法创建的字符串里面可以包含由美元符号加花括号包裹的变量${vraible}
 */

//产生一个随机数
var num=Math.random();
//将这个数字输出到console
console.log(`your num is ${num}`);