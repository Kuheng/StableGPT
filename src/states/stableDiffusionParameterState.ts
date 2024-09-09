import { atom, selector } from "recoil";

interface IStableDiffusionParameter {
  [index:string]:string|number|any,
  imagePrompt: string,
  negativePrompt: string,
  seed: number,
  format: string,
  resolutionRatio: string,
  quantity: number,
};

const stableDiffusionParameter = atom<IStableDiffusionParameter>({
  key: 'stableDiffusionParameter',
  default: {
    imagePrompt: "",
    negativePrompt: "",
    seed: -1,
    format: "png",
    resolutionRatio: "1:1",
    quantity: 1,
  }
});

export const stableDiffusionParameterSelector = selector({
  key: 'stableDiffusionParameterSelector',
  get: ({ get }) => { return get(stableDiffusionParameter); },
  set: ({ set, get }, data:any) => {
    let tempData = {...get(stableDiffusionParameter)};
    tempData[data.key] = data.value;

    set(stableDiffusionParameter, tempData);
  },
});