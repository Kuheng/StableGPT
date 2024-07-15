import logo from '../logo.svg';
import {atom, selector} from "recoil";

interface IGeneratedImage {
    base64: string,
};

const generatedImageAtom = atom<IGeneratedImage>({
    key: "generatedImage",
    default: {
        base64: logo,
    }
});

export const generatedImageSelector = selector({
    key: "gnereatedImageChanged",
    get: ({ get }) => { return get(generatedImageAtom); },
    set: ({ set, get }, data:any) =>{
        let tempData : any = {...get(generatedImageAtom)};
        tempData[data.item] = data.value;
    
        set(generatedImageAtom, tempData);
    },
})