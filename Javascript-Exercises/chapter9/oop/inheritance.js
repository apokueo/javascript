function Employee() {
  this.name = name;
}

Employee.prototype.getName = function {
  return this.name;
}

var emp1 = new Employee("Khumut");

console.log(emp1.getName());

function Manager(name, dept) {
  this.name = name;
  this.dept = dept;
}

Manager.prototype.getDept = function () {
  this.dept;
}

var mgr = new Manager("Auset", "Sekhmet");

console.log(mgr.getDept())
console.log(mgr.getName())
