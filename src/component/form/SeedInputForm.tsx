import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";

import { generateImageParameterSelector } from "../../states/generateImageParameterState"

function SeedInputForm () {
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);

  const { t } = useTranslation();

  function onChangeSeedInput (e: any) {
    let changeValue = e.target.value;
    
    if (changeValue < -1) changeValue = -1;
    else if (changeValue > 4294967294) changeValue = 4294967294;

    setGenerateImageParameter({key: "seed", value: changeValue});
  }

  return (
    <div className="w-full h-18 text-start mb-2">
      <p className="w-full h-auto text-lg">{t("main:seedLabel")}</p>
      <input type="number" value={generateImageParameter["seed"]} onChange={onChangeSeedInput} min={-1} max={4294967294}
             className="w-full h-full border-b-1 border-black text-center text-md font-bold outline-none" />
    </div>
  );
}

export default SeedInputForm;