import { useRecoilState } from "recoil";

import { stableDiffusionParameterSelector } from "../../states/stableDiffusionParameterState";
import { colorPickerState } from "../../states/colorPickerState";

import ColorPickerViewer from './../viewer/ColorPickerViewer';

import colorPickerIcon from "./../../assets/image/colorPickerIcon.png";

type propsType = {
  parameterKey: string,
} 

function PromptInput ({parameterKey}: propsType) {
  const [stableDiffusionParameter, setStableDiffusionParameter] = useRecoilState(stableDiffusionParameterSelector);
  const [colorPickerView, setColorPickerState] = useRecoilState(colorPickerState);

  function onClickColorPickerOpen () { setColorPickerState(parameterKey); }
  function onChangePromptInput (e:any) { setStableDiffusionParameter({key: parameterKey, value: e.target.value}); }

  return (
    <>
      {colorPickerView === parameterKey?<ColorPickerViewer />:""}
      <img src={colorPickerIcon} className="absoulte w-8 h-8 -mt-8 ml-96 cursor-pointer" onClick={onClickColorPickerOpen} alt="" />
      <textarea value={stableDiffusionParameter[parameterKey]} onChange={onChangePromptInput}
                className="w-calc(-20) h-70px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" />
    </>
  );
}

export default PromptInput;