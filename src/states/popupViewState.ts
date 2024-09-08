import { atom, selector } from "recoil";

const removeImageHistoryConfirmPopupViewState = atom({
  key: 'removeImageHistoryConfirmPopupViewState',
  default: false
});

const promptHistoryPopupViewState = atom({
  key: 'promptHistoryPopupViewState',
  default: false
});

export const setRemoveImageHistoryConfirmPopupViewState = selector({
  key: 'setRemoveImageHistoryConfirmPopupViewState',
  get: ({ get }) => { return get(removeImageHistoryConfirmPopupViewState); },
  set: ({ set }, data:any) => { set(removeImageHistoryConfirmPopupViewState, data); }
});

export const setPromptHistoryPopupViewState = selector({
  key: 'setPromptHistoryPopupViewStat',
  get: ({ get }) => { return get(promptHistoryPopupViewState); },
  set: ({ set, get }) => { set(promptHistoryPopupViewState, !get(promptHistoryPopupViewState)); }
});