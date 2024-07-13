import { useRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../states/generateImageParameterState";
import { colorPickerState } from "../../states/colorPickerState";

import ColorPickerViewer from './../viewer/ColorPickerViewer';

import colorPickerIcon from "./../../assets/image/colorPickerIcon.png";

type propsType = {
    item: string,
} 

function PromptInput ({item}: propsType) {
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);
  const [colorPickerView, setColorPickerState] = useRecoilState(colorPickerState);

  function onClickColorPickerOpen () { setColorPickerState(item); }
  function onChangePromptInput (e:any) { setGenerateImageParameter({item: item, value: e.target.value}); }

  return (
    <>
      {colorPickerView === item?<ColorPickerViewer />:""}
      <img src={colorPickerIcon} className="absoulte w-8 h-8 -mt-8 ml-96 cursor-pointer" onClick={onClickColorPickerOpen} alt="" />
      <textarea value={generateImageParameter[item]} onChange={onChangePromptInput}
                className="w-calc(-20) h-70px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" />
    </>
  );
}

export default PromptInput;