import { useRecoilState } from "recoil";

import { inputDataSelector } from "../../state";

type propsTypes = {
  item: string,
  minNumber: number,
  maxNumber: number,
}

function RangeInput ({item, minNumber, maxNumber}: propsTypes) {
  const [inputData, setInputData] = useRecoilState(inputDataSelector);
  const onChange_Range = (value: number) => {
    let changeValue = value;
    
    if (changeValue < minNumber) changeValue = minNumber;
    else if (changeValue > maxNumber) changeValue = maxNumber;

    setInputData({item: item, value: changeValue});
  }

  return (
    <>
      <input type="range" value={inputData[item]} onChange={e=>{onChange_Range(parseInt(e.target.value))}} min={minNumber} max={maxNumber}
             className="w-full h-auto" />
      <input type="number" value={inputData[item]} onChange={e=>{onChange_Range(parseInt(e.target.value))}} min={minNumber} max={maxNumber}
             className="w-full h-full text-center text-md font-bold outline-none" />
    </>
  )
}

export default RangeInput;