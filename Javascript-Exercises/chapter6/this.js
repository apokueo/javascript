// inside a function body, a special read-only value called 'this' is available

const p = {
  name: 'hood',
  speak() {return  `My name is ${this.name}!`; }
}

p.speak();
