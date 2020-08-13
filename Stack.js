class Stack{
    constructor(){
        this.elements = []
    }
    push(element){
        this.elements.push(element)
    }
    pop(){
        this.elements.pop()
    }
    length(){
        return this.elements.length
    }
    isEmpty(){
        return this.elements.length===0?true:false
    }
}

// Uncomment the following code to see the results

 let newStack = new Stack()
newStack.push("YO")
console.log(newStack.elements);
console.log(newStack.length())
newStack.pop()
console.log(newStack.elements); 
console.log(newStack.isEmpty())