import { atom, selector } from "recoil";

interface IPostChatGPTParameterState {
  [index:string]:string|number|any,
  apiKey: string,
  promptMessage: string,
};

const postChatGPTParameterState = atom<IPostChatGPTParameterState>({
  key: 'postChatGPTParameterState',
  default: {
    apiKey: "",
    promptMessage: "",
  }
});

export const getChatGPTParameterSelector = selector({
  key: 'getChatGPTParameterSelector',
  get: ({ get }) => { return get(postChatGPTParameterState); }
});

export const getChatGPTAPIKeySelector = selector({
  key: 'getChatGPTAPIKeySelector',
  get: ({ get }) => { return get(postChatGPTParameterState).apikey; }
})

export const getChatGPTAPIKeyLengthSelector = selector({
  key: 'getChatGPTAPIKeyLengthSelector',
  get: ({ get }) => { return get(postChatGPTParameterState).apiKey.length; }
});

export const getChatGPTPromptMessageSelector = selector({
  key: 'getChatGPTPromptMessageSelector',
  get: ({ get }) => { return get(postChatGPTParameterState).promptMessage; }
})

export const setChatGPTParameterSelector = selector({
  key: 'setChatGPTParameterSelector',
  get: ({ get }) => { return get(postChatGPTParameterState); },
  set: ({ set, get }, data:any) => {
    let tempData = {...get(postChatGPTParameterState)};
    tempData[data.key] = data.value;
  
    set(postChatGPTParameterState, tempData);
  }
});
  
export const setChatGPTAPIKeySelector = selector({
  key: 'setChatGPTAPIKeySelector',
  get: ({ get }) => { return get(postChatGPTParameterState).apiKey },
  set: ({ set, get }, data:any) => {
    let tempData = {...get(postChatGPTParameterState)};
    tempData.apiKey = data;
  
    set(postChatGPTParameterState, tempData);
  }
});

export const setChatGPTPromptMessageSelector = selector({
  key: 'setChatGPTPromptMessageSelector',
  get: ({ get }) => { return get(postChatGPTParameterState).promptMessage; },
  set: ({ set, get }, data:any) => {
    let tempData = {...get(postChatGPTParameterState)};
    tempData.promptMessage = data;

    set(postChatGPTParameterState, tempData);
  }
})