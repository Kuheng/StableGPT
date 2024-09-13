import { ReactNode } from "react";

import { useRecoilState } from "recoil";

import { stableDiffusionParameterSelector } from "../../states/stableDiffusionParameterState";

type propsType = {
  children: ReactNode,
  parameterKey: string,
}

function DropdownSelectionInput ({children, parameterKey}: propsType) {
  const [stableDiffusionParameter, setStableDiffusionParameter] = useRecoilState(stableDiffusionParameterSelector);

  function onChangeSelect (e:any) { setStableDiffusionParameter({key: parameterKey, value: e.target.value}); }

  return (
    <select className="w-full h-9 mb-2 border-b-2 border-gray-2 text-lg outline-none dark:bg-darkMode-POINT dark:text-white"
            value={stableDiffusionParameter[parameterKey]} onChange={onChangeSelect}>
      {children}
    </select>);
};

export default DropdownSelectionInput;