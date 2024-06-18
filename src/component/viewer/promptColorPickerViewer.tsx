import { ColorPicker } from 'react-color-palette';
import "react-color-palette/css";

function promptColorPickerViewer (colorPickerState: any, color: any, setColor: any, t: any, onClick_togglePickerState: Function, onClick_submitColor: Function) {
  return (
    <>
      {colorPickerState !== ""?
      <div className="absolute w-auto -mt-48 ml-80 rounded-xl">
        <ColorPicker color={color} onChange={setColor} hideAlpha={true} hideInput={["rgb", "hsv"]} />
        <button className="absolute w-6 h-6 -mt-330px ml-200px bg-white border-2 border-black" onClick={()=>onClick_togglePickerState("")}>X</button>
        <button className="w-full border-2 border-gray-2 bg-gray-2 rounded-lg text-lg" onClick={()=>onClick_submitColor()}>{t("main:colorPickerApply")}</button>
      </div>:""}
    </>
  );
}

export default promptColorPickerViewer;