import { ReactNode } from "react";

import { useRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../states/generateImageParameterState";

type propsType = {
  children: ReactNode,
  item: string,
}

function DropdownSelectionInput ({children, item}: propsType) {
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);

  function onChangeSelect (e:any) { setGenerateImageParameter({item: item, value: e.target.value}); }

  return (
    <select className="w-full h-9 border-b-2 border-gray-2 text-lg outline-none" value={generateImageParameter[item]} onChange={onChangeSelect}>
      {children}
    </select>);
};

export default DropdownSelectionInput;