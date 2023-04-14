class Person {
  name: string = ''
  constructor(name: string) {
    this.name = name
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}`)
  }
}

class Employee extends Person {
  salary: number = 0
  constructor(name: string, salary: number) {
    super(name)
    this.salary = salary
  }
  sayHi() {
    super.sayHi()
    console.log(`Salary: ${this.salary}`)
  }
}

const person = new Employee('Ken', 20000)
person.sayHi()
