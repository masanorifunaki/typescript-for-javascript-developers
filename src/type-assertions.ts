export {};

let name: any = 'Ham';

let length = name.length as number;
length = (<string>name).length;
