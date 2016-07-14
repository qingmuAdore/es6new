
/**
 * 字面对象
 * 
 * 可以在对象字面量里面定义原型定义方法可以
 * 不用function关键字直接调用父类方法
 */
var human = {
    breathe() {
        console.log('breathing ...');
    }
}

var worker = {
    __proto__: human,//设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        console.log('working...');
    }
}

human.breathe();
worker.breathe();

