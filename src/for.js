/**
 * for of
 * 
 * for in 循环用于遍历数组，类数组或对象，ES6中新引入的for of循环功能相似，不同的是每次循环它提供的不是序号而是值
 */
var arr = ['a', 'b', 'c'];
for (var v of arr) {
    console.log(v); // a b c
}


/**
 * for in
 * 
 * 赋给index的值不是实际的数字，而是字符串“0”、“1”、“2”
 * 
 * for-in循环体除了遍历数组元素外，还会遍历自定义属性。举个例子，
 * 如果你的数组中有一个可枚举属性name，循环将额外执行一次，遍历到名为“name”的索引。就连数组原型链上的属性都能被访问到
 */
for (var i in arr) {
    // console.log(typeof v); //string 类型
    console.log(i); // 0 1 2
    // console.log(arr[v]);
}

arr.name = 'array';
for (var i in arr) {
    console.log(i); // 0,1,2,name
}

for (var v of arr) {
    console.log(v); // a b c
}

/**
 * for-in循环用来遍历对象属性
 * for-of循环用来遍历集合(Array,Map,Set) 
 */

//字符串视为一系列的Unicode字符来进行遍历
for (var chr of "hello") {
    console.log(chr);
}

//Set对象可以自动排除重复项
var set = new Set();
set.add('if').add('or').add('in').add('or');
for (var v of set) {
    console.log(v);
}

//Map 内含的数据由键值对组成，所以你需要使用解构（destructuring）来将键值对拆解为两个独立的变量
var m = new Map();
m.set("hello", 42);
m.set(set, 34); //对象也可作为key

for (var [k, v] of m) {
    console.log('key:' + k + ' value:' + v);
}