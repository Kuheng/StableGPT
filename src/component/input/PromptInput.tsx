import { useRecoilState, useSetRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../manager/generateImageParameterManager";
import { colorPickerState } from "../../manager/colorPickerStateManager";

import logo from "./../../logo.svg"

type propsTypes = {
    item: string,
} 

function PromptInput ({item}: propsTypes) {
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);
  const colorPickerStateSet = useSetRecoilState(colorPickerState);

  function onClick () { colorPickerStateSet(item); }
  function onChange (e:any) { setGenerateImageParameter({item: item, value: e.target.value}); }

  return (
    <>
      <img src={logo} className="absoulte w-10 h-10 -mt-8 ml-80 cursor-pointer" onClick={onClick} alt="" />
      <textarea value={generateImageParameter[item]} onChange={onChange}
                className="w-calc(-20) h-70px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" />
    </>
  );
}

export default PromptInput;