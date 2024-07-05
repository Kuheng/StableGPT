import { ReactNode } from "react";

import { useRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../manager/generateImageParameterManager";

type propsTypes = {
  children: ReactNode,
  item: string,
}

function DropdownSelectionInput ({children, item}: propsTypes) {
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);

  function onChange (e:any) { setGenerateImageParameter({item: item, value: e.target.value}); }

  return (
    <select className="w-full h-9 border-b-2 border-gray-2 text-lg outline-none" value={generateImageParameter[item]} onChange={onChange}>
      {children}
    </select>);
};

export default DropdownSelectionInput;