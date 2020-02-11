export {};

let foo: any;
let bar: string = 'TS';

console.log(typeof foo);
foo = bar;
console.log(typeof foo);

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {
  }
}

let me: Animal;
me = new Person(43, 'name');


