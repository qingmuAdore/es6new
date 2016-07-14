/**
 * 解构
 * 
 * 若一个函数要返回多个值，常规的做法是返回一个对象，
 * 将每个值做为这个对象的属性返回。但在ES6中，利用解构这一特性，
 * 可以直接返回一个数组，然后数组中的值会自动被解析到对应接收该值的变量中
 */

var getVal = function () {
    return [1, 3];
}

var [l, r] = getVal();
var [name, age, work] = ['pauly', 13, 'softengineer'];


console.log('left:' + l + ' right:' + r);
console.log('My name is ' + name + ' [age:' + age + ' work:' + work + ']');