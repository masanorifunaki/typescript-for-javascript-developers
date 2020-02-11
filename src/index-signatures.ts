export {};

interface Profile {
  [index: string]: string | number | boolean,

  name: string,
  underTwenty: boolean;
}

let profile: Profile = {
  name: 'Yamda',
  underTwenty: false,
};

profile.name = 'Ham';
profile.age = 43;
