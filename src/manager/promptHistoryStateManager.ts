import { atom, selector } from "recoil";

export const promptHistoryState = atom({
  key: 'promptHistoryState',
  default: (localStorage.length !== 0)?JSON.parse(localStorage.PROMPT_HISTORY):[],
})

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