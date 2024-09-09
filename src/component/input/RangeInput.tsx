import { useRecoilState } from "recoil";

import { stableDiffusionParameterSelector } from "../../states/stableDiffusionParameterState"

type propsType = {
  parameterKey: string,
  minNumber: number,
  maxNumber: number,
}

function RangeInput ({parameterKey, minNumber, maxNumber}: propsType) {
  const [stableDiffusionParameter, setStableDiffusionParameter] = useRecoilState(stableDiffusionParameterSelector);

  function onChangeRangeInput (e: any) {
    let changeValue = e.target.value;
    
    if (changeValue < minNumber) changeValue = minNumber;
    else if (changeValue > maxNumber) changeValue = maxNumber;

    setStableDiffusionParameter({key: parameterKey, value: changeValue});
  }

  return (
    <>
      <input type="range" value={stableDiffusionParameter[parameterKey]} onChange={onChangeRangeInput} min={minNumber} max={maxNumber}
             className="w-full h-auto" />
      <input type="number" value={stableDiffusionParameter[parameterKey]} onChange={onChangeRangeInput} min={minNumber} max={maxNumber}
             className="w-full h-full text-center text-md font-bold outline-none" />
    </>
  )
}

export default RangeInput;