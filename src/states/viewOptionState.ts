import { atom, selector } from "recoil";

const generateImageOptionViewState = atom({
  key: 'generateImageOptionViewState',
  default: false
});

const generateImageHistoryOptionViewState = atom({
  key: 'generateImageHistoryOptionViewState',
  default: false
});

const promptOptionViewState = atom({
  key: 'promptOptionViewState',
  default: false
});

const chatGPTOptionViewState = atom({
  key: 'chatGPTOptionViewState',
  default: false
});

export const getGeneateImageOptionViewState = selector({
  key: 'getGenerateImageOptionViewState',
  get: ({ get }) => { return get(generateImageOptionViewState); }
});

export const getGeneateImageHistoryOptionViewState = selector({
  key: 'getGenerateImageHistoryOptionViewState',
  get: ({ get }) => { return get(generateImageHistoryOptionViewState); }
});

export const getpromptOptionViewState = selector({
  key: 'getPromptOptionViewState',
  get: ({ get }) => { return get(promptOptionViewState); }
});

export const getChatGPTOptionViewState = selector({
  key: 'getChatGPTOptionViewState',
  get: ({ get }) => { return get(chatGPTOptionViewState); }
});

export const toggleGenerateImageOptionViewState = selector({
  key: 'toggleGenerateImageOptionViewState',
  get: ({ get }) => { return get(generateImageOptionViewState); },
  set: ({ get, set }) => { set(generateImageOptionViewState, !get(generateImageOptionViewState)); }
});

export const toggleGenerateImageHistoryOptionViewState = selector({
  key: 'toggleGenerateImageHistoryOptionViewState',
  get: ({ get }) => { return get(generateImageHistoryOptionViewState); },
  set: ({ get, set }) => { set(generateImageHistoryOptionViewState, !get(generateImageHistoryOptionViewState)); }
});

export const togglePromptOptionViewState = selector({
  key: 'togglePromptOptionViewState',
  get: ({ get }) => { return get(promptOptionViewState); },
  set: ({ get, set }) => { set(promptOptionViewState, !get(promptOptionViewState)); }
});

export const toggleChatGPTOptionViewState = selector({
  key: 'toggleChatGPTOptionViewState',
  get: ({ get }) => { return get(chatGPTOptionViewState); },
  set: ({ get, set }) => { set(chatGPTOptionViewState, !get(chatGPTOptionViewState)); }
});