import {atom, selector} from "recoil";

const isDarkMode = atom({
    key: "darkModeState",
    default: false
});

export const darkModeSelector = selector({
    key: "darkModeSelector",
    get: ({ get }) => { return get(isDarkMode); },
    set: ({ set, get }, data:any) => {
        if (get(isDarkMode)) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');

        set(isDarkMode, !get(isDarkMode));
    },
})