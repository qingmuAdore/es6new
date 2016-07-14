/**
 * 参数默认值，不定参数，拓展参数
 */

/**
 * default param 
 * 
 * 缺省函数
 */
function sayHello(name) {
    name = name || 'pauly';
    console.log('Hello ' + name);
}

function sayDefault(name = 'pauly') {
    console.log('Hello ' + name);
}

/**
 * 缺省参数,靠右
 */
function helloDefault(name, age = 28) {
    console.log('Hello ' + name + ' [age:' + age + ']');
}

sayHello();
sayDefault();
helloDefault('pauly');

/**
 * 不定参数 indeterminate
 * 
 * 不定参数是在函数中使用命名参数同时接收不定数量的未命名参数。
 * 这只是一种语法糖，在以前的JavaScript代码中我们可以通过
 * arguments变量来达到这一目的。不定参数的格式是三个句点后跟代表所有不定参数的变量名
 */
function add(...x) {
    return x.reduce((m, n) => m + n);
}

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));

/**
 * 拓展参数 expose
 * 
 * 拓展参数则是另一种形式的语法糖，它允许传递数组或者类数组
 * 直接做为函数的参数而不用通过apply。
 */

var people = ['Wayou','John','Sherlock'];
function see(p1,p2,p3){
    console.log(`See ${p1},${p2}.${p3}`);
}

see(...people);
see.apply(this,people);
