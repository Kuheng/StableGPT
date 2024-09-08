import logo from '../logo.svg';
import {atom, selector} from "recoil";

interface IGeneratedImage {
    base64: string,
    imageHistory: string[],
};

const generatedImageAtom = atom<IGeneratedImage>({
    key: "generatedImage",
    default: {
        base64: logo,
        imageHistory: [],
    }
});

export const getGenerateImage = selector({
    key: "getGenerateImage",
    get: ({ get }) => { return get(generatedImageAtom); }
})

export const generatedImageSelector = selector({
    key: "genereatedImageChanged",
    get: ({ get }) => { return get(generatedImageAtom); },
    set: ({ set, get }, data:any) => {
        let tempData : any = {...get(generatedImageAtom)};
        tempData.base64 = data;

        if (tempData.imageHistory.length !== 0) tempData.imageHistory = [...tempData.imageHistory, data];
        else tempData.imageHistory = [data];

        set(generatedImageAtom, tempData);
    },
})

export const changeGenerateImageViewer = selector({
    key: "changeGenerateImageViewer",
    get: ({ get }) => { return get(generatedImageAtom); },
    set: ({ set, get }, data:any) => {
        let tempData = {...get(generatedImageAtom)};

        tempData.base64 = data;

        set(generatedImageAtom, tempData);
    }
})

export const removeGenerateImageHistory = selector({
    key: 'removeGenerateImageHistory',
    get: ({ get }) => { return get(generatedImageAtom); },
    set: ({ set, get }, data:any) => {
        let tempData:any = {...get(generatedImageAtom)};
        let imageHistory:string[] = [...tempData.imageHistory];
        imageHistory.splice(data, 1);

        tempData.imageHistory = imageHistory;

        set(generatedImageAtom, tempData);
    }
})

export const removeAllGenerateImageHistory = selector({
    key: 'removeAllGenerateImageHistory',
    get: ({ get }) => { return get(generatedImageAtom); },
    set: ({ set, get }, data?:any) => {
        let tempData:any = {...get(generatedImageAtom)};
        tempData.imageHistory = []
        set(generatedImageAtom, tempData);
    }
})