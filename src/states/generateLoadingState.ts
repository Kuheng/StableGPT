import { atom, selector } from "recoil";

const generateLoaidngState = atom({
  key: 'generateLoadingState',
  default: false,
});

export const getGenerateLoadingState = selector({
  key: 'getGenerateLoadingState',
  get: ({ get }) => { return get(generateLoaidngState); }
})

export const setGenerateLoadingState = selector({
  key: 'setGenerateLoadingState',
  get: ({ get }) => { return get(generateLoaidngState); },
  set: ({ set }, data:any) => { set(generateLoaidngState, data); }
})