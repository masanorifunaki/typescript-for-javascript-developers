export {};

const func = (): number => 43;
let numberAny: any = func();
let numberUnknown: unknown = func();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown);
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
