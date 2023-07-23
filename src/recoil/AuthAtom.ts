import { atom } from 'recoil';

export const userAtom = atom({
  key: 'user',
  default: [],
});

export const isLoggedInAtom = atom({
  key: 'isLoggedIn',
  default: false,
});
