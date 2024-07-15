import { useRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../states/generateImageParameterState"

type propsType = {
  parameterKey: string,
  minNumber: number,
  maxNumber: number,
}

function RangeInput ({parameterKey, minNumber, maxNumber}: propsType) {
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);

  function onChangeRangeInput (e: any) {
    let changeValue = e.target.value;
    
    if (changeValue < minNumber) changeValue = minNumber;
    else if (changeValue > maxNumber) changeValue = maxNumber;

    setGenerateImageParameter({key: parameterKey, value: changeValue});
  }

  return (
    <>
      <input type="range" value={generateImageParameter[parameterKey]} onChange={onChangeRangeInput} min={minNumber} max={maxNumber}
             className="w-full h-auto" />
      <input type="number" value={generateImageParameter[parameterKey]} onChange={onChangeRangeInput} min={minNumber} max={maxNumber}
             className="w-full h-full text-center text-md font-bold outline-none" />
    </>
  )
}

export default RangeInput;