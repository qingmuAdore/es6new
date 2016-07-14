/**
 * 类的使用
 * 
 * 继承
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log('name:' + this.name);
    }
}

class Programmer extends Animal {
    constructor(name) {
        super(name);
    }

    program() {
        console.log('I am coding');
    }
}


//测试我们的类
var animal = new Animal('dummy'),
    wayou = new Programmer('wayou');
animal.sayName();//输出 ‘My name is dummy’
wayou.sayName();//输出 ‘My name is wayou’
wayou.program();//输出 ‘I am coding’