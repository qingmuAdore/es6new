class KV {
    constructor(key, value) {
        this.k = Symbol(key);
        this[this.k] = value;
    }
    getKey(){
        return this.k;
    }
    getValue() {
        return this[this.k];
    }
    
}

var kv = new KV('key','value');
console.log(kv.getKey());
console.log(kv.getValue());


