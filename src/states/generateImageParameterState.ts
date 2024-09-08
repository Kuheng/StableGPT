import { atom, selector } from "recoil";

interface IGenerateImageParameter {
  [index:string]:string|number|any,
  imagePrompt: string,
  negativePrompt: string,
  seed: number,
  format: string,
  resolutionRatio: string,
  quantity: number,
};

const generateImageParameter = atom<IGenerateImageParameter>({
  key: 'generateImageParameter',
  default: {
    imagePrompt: "",
    negativePrompt: "",
    seed: -1,
    format: "png",
    resolutionRatio: "1:1",
    quantity: 1,
  }
});

export const generateImageParameterSelector = selector({
  key: 'generateImageParameterChange',
  get: ({ get }) => { return get(generateImageParameter); },
  set: ({ set, get }, data:any) => {
    let tempData = {...get(generateImageParameter)};
    tempData[data.key] = data.value;

    set(generateImageParameter, tempData);
  },
});