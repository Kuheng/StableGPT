import { atom, selector } from "recoil";

const languagePopupViewState = atom({
  key: 'toggleLanguagePopupViewState',
  default: false
});

const removeImageHistoryConfirmPopupViewState = atom({
  key: 'removeImageHistoryConfirmPopupViewState',
  default: false
});

const promptHistoryPopupViewState = atom({
  key: 'promptHistoryPopupViewState',
  default: false
});

export const setLanguagePopupViewState = selector({
  key: 'setLanguagePopupViewState',
  get: ({ get }) => { return get(languagePopupViewState); },
  set: ({ set, get }) => { set(languagePopupViewState, !get(languagePopupViewState)); }
});

export const setRemoveImageHistoryConfirmPopupViewState = selector({
  key: 'setRemoveImageHistoryConfirmPopupViewState',
  get: ({ get }) => { return get(removeImageHistoryConfirmPopupViewState); },
  set: ({ set }, data:any) => { set(removeImageHistoryConfirmPopupViewState, data); }
});

export const setPromptHistoryPopupViewState = selector({
  key: 'setPromptHistoryPopupViewStat',
  get: ({ get }) => { return get(promptHistoryPopupViewState); },
  set: ({ set }, data:any) => { set(promptHistoryPopupViewState, data); }
});