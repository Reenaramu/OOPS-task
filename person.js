class Person {
   constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
   }
   getFullName() {
     return `${this.firstName} ${this.lastName}`;
   }
   getAge() {
     return this.age;
   }
   updateAge(newAge) {
      this.age = newAge;
   }
   greet() {
     const salutation = this.gender = 'male' ? 'Mr.' : 'Ms.';
     return `Hello, ${salutation} ${this.lastName}!`;
   }
}
const person1 = new Person("chaitrra", "Sairam", 32, "female");
console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.greet());

person1.updateAge(34);
console.log(person1.getAge());
