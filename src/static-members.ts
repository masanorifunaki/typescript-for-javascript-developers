export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Taro';

  static work(): string {
    return `Hey ! My name is ${this.firstName}`;
  }
}

let me = new Me();
console.log(Me.work());
