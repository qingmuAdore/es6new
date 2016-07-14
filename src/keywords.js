/**
 * 关键字  let/const
 */

/**
 * let
 * 可以把let看成var，只是它定义的变量被限定在了特定范围内才能使用，而离开这个范围则无效
 */
for(var i = 0;i<2;i++){
    console.log(i);
}
console.log(i); //2
for(let j = 0;j<2;j++){
    console.log(j);
}
//console.log(j); //undefined,严格模式下会报错


/**
 * const
 * 用来定义常量，即无法被更改值的变量
 */
const m = 10;
console.log(m);
// m = 13; //报错
