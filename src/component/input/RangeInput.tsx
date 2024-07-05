import { useRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../manager/generateImageParameterManager"

type propsTypes = {
  item: string,
  minNumber: number,
  maxNumber: number,
}

function RangeInput ({item, minNumber, maxNumber}: propsTypes) {
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);

  function onChange (e: any) {
    let changeValue = e.target.value;
    
    if (changeValue < minNumber) changeValue = minNumber;
    else if (changeValue > maxNumber) changeValue = maxNumber;

    setGenerateImageParameter({item: item, value: changeValue});
  }

  return (
    <>
      <input type="range" value={generateImageParameter[item]} onChange={onChange} min={minNumber} max={maxNumber}
             className="w-full h-auto" />
      <input type="number" value={generateImageParameter[item]} onChange={onChange} min={minNumber} max={maxNumber}
             className="w-full h-full text-center text-md font-bold outline-none" />
    </>
  )
}

export default RangeInput;