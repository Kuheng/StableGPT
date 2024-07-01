import { atom, selector } from "recoil";

export interface IInputDataTypes {
  [index:string]:string|number|any,
  apiKey: string,
  imagePrompt: string,
  negativePrompt: string,
  seed: number,
  format: string,
  aspect: string,
  quantity: number,
};

export const inputDataState = atom<IInputDataTypes>({
  key: 'inputData',
  default: {
    apiKey: "",
    imagePrompt: "",
    negativePrompt: "",
    seed: -1,
    format: "png",
    aspect: "1:1",
    quantity: 1,
  }
});

export const colorPickerState = atom({
  key: 'colorPickerState',
  default: "",
});

export const inputDataSelector = selector({
  key: 'inputDataChange',
  get: ({ get }) => { return get(inputDataState); },
  set: ({ set, get }, data:any) => {
    let tempData = {...get(inputDataState)};
    tempData[data.item] = data.value;

    set(inputDataState, tempData);
  },
});