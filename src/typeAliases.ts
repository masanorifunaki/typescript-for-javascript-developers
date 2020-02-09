export {};

type Moziretsu = string;

const foo: Moziretsu = 'Hi!';

const example = {
  name: 'Ham',
  age: 42
};

type Profile = typeof example;
