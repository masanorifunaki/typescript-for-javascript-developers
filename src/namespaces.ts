export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {
      }
    }
  }
}

const me = new Japanese.Tokyo.Person('Taro');
console.log(me.name);
