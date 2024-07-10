import { atom, selector } from "recoil";

interface IGenerateImageState {
  loadingState: boolean,
}

const generateImageState = atom<IGenerateImageState>({
  key: 'generateImageState',
  default: {
    loadingState: false,
  }
});

export const getGenerateState = selector({
  key: 'getGenerateState',
  get: ({ get }) => { return get(generateImageState); }
})

export const setGenerateFetchState = selector({
  key: 'setGenerateFetchState',
  get: ({ get }) => { return get(generateImageState); },
  set: ({ set, get }, data:any) => {
    let tempData = {...get(generateImageState)};
    tempData.loadingState = data;
    set(generateImageState, tempData);
  }
})