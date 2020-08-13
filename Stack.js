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
        this.elements.length
    }
    isEmpty(){
        this.elements.isEmpty
    }
}

// Uncomment the following code to see the results
/*
 let newStack = new Stack()
newStack.push("YO")
console.log(newStack.content);
newStack.length()
newStack.pop()
console.log(newStack.content); 
*/