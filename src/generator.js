/**
 * 每次调用 next 方法，都会得到当前 yield 的值。函数执行完之后，
 * 再调用 next value undefined done true。
 */

function* list() {
    for(var i = 0; i < arguments.length; i++) {
        yield arguments[i];
    }
    return "done.";
}

var o = list(1, 2, 3);
console.log(o.next()); // Object {value: 1, done: false}
console.log(o.next()); // Object {value: 2, done: false}
console.log(o.next());//  Object {value: 3, done: false}
console.log(o.next()); // Object {value: "done.", done: true}
console.log(o.next());//  Object  { value: undefined, done: true }

