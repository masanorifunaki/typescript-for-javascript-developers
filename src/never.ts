export {};

function error(msg: string): never {
  throw new Error(msg);
}

try {
  error('test');
} catch (e) {
  console.log({ e });
}
