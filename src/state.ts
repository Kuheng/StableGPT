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

export const promptHistoryState = atom({
  key: 'promptHistoryState',
  default: (localStorage.length !== 0)?JSON.parse(localStorage.PROMPT_HISTORY):[],
})

export const inputDataSelector = selector({
  key: 'inputDataChange',
  get: ({ get }) => { return get(inputDataState); },
  set: ({ set, get }, data:any) => {
    let tempData = {...get(inputDataState)};
    tempData[data.item] = data.value;

    set(inputDataState, tempData);
  },
});

export const addPromptHistory = selector({
  key: 'addPromptHistory',
  get: ({ get }) => { return get(promptHistoryState); },
  set: ({ set, get }, data:any) => {
    let changeHistory;

    if (get(promptHistoryState).length !== 0) changeHistory = [...get(promptHistoryState), data];
    else changeHistory = [data];

    localStorage.setItem("PROMPT_HISTORY", JSON.stringify(changeHistory));
    set(promptHistoryState, changeHistory);
  },
})

export const removePromptHistory = selector({
  key: 'removePromptHistory',
  get: ({ get }) => { return get(promptHistoryState); },
  set: ({ set, get }, data:any) => {
    let changeHistory = get(promptHistoryState).filter((promptHistory:string)=>promptHistory !== data);

    localStorage.setItem("PROMPT_HISTORY", JSON.stringify(changeHistory));
    set(promptHistoryState, changeHistory);
  },
})

export const clearPromptHistory = selector({
  key: 'clearPromptHistory',
  get: ({ get }) => { return get(promptHistoryState); },
  set: ({ set }) => {
    localStorage.setItem("PROMPT_HISTORY", JSON.stringify([]));
    set(promptHistoryState, []);
  },
})