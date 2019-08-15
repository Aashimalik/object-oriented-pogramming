const _item = new WeakMap();

class Stack {
    
    constructor() {
        _item.set(this, []);
    }

    peek() {
        const items = _item.get(this);
        if (items.length === 0)
            throw new Error('Stack is Empty');
        return items[items.length - 1];
    }

    pop() {
        const items = _item.get(this);
        if (items.length === 0)
            throw new Error('Stack is Empty');
        return items.pop();
    }

    push(obj) {
        return _item.get(this).push(obj);
    }

    get count() {
        return _item.get(this).length;
    }

}