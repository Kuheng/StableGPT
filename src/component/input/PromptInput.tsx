import { useRecoilState, useSetRecoilState } from "recoil";

import { inputDataSelector, colorPickerState } from "../../state";

import logo from "./../../logo.svg"

type propsTypes = {
    item: string,
} 

function PromptInput ({item}: propsTypes) {
  const [inputData, setInputData] = useRecoilState(inputDataSelector);
  const colorPickerStateSet = useSetRecoilState(colorPickerState);

  return (
    <>
      <img src={logo} className="absoulte w-10 h-10 -mt-8 ml-80 cursor-pointer" onClick={()=>colorPickerStateSet(item)} alt="" />
      <textarea value={inputData[item]} onChange={e=>setInputData({item: item, value: e.target.value})}
                className="w-calc(-20) h-70px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" />
    </>
  );
}

export default PromptInput;