import { ReactNode } from "react";

import { useRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../states/generateImageParameterState";

type propsType = {
  children: ReactNode,
  parameterKey: string,
}

function DropdownSelectionInput ({children, parameterKey}: propsType) {
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);

  function onChangeSelect (e:any) { setGenerateImageParameter({key: parameterKey, value: e.target.value}); }

  return (
    <select className="w-full h-9 border-b-2 border-gray-2 text-lg outline-none" value={generateImageParameter[parameterKey]} onChange={onChangeSelect}>
      {children}
    </select>);
};

export default DropdownSelectionInput;