import { ReactNode } from "react";

import { useRecoilState } from "recoil";

import { inputDataSelector } from "../../state";

type propsTypes = {
  children: ReactNode,
  item: string,
}

function DropdownSelectionInput ({children, item}: propsTypes) {
  const [inputData, setInputData] = useRecoilState(inputDataSelector);

  return (
    <select className="w-full h-9 border-b-2 border-gray-2 text-lg outline-none" value={inputData[item]} onChange={e=>setInputData({item: item, value: e.target.value})}>
      {children}
    </select>);
};

export default DropdownSelectionInput;