// code praxis for chapter 8 Arrays and Array Processing 

class Person {
	constructor(name) {
		this.name = name; 
		this.id = Person.nextId++; 
	}
}

Person.nextId = 0; 
const jamie = new Person("Jamie"),
	juliet = new Person("Juliet"),
	peter = new Person("Peter"),
	jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay]; 

arr.find(p => p.id === juliet.id); 

arr.find(p => === this.id, juliet); 
