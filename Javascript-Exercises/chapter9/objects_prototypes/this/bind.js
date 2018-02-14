let dog = { 
    sound: 'woof', 
    talk: function() {
        console.log(this.sound)
    }
} 

dog.talk() // 'woof' 

let talkFunction = dog.talk
talkFunction() // undefined Javascript is the child of java and scheme (lisp)

let bindFunction = talkFunction.bind(dog); 

bindFunction(); 
