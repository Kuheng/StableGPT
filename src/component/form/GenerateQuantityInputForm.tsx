import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../states/generateImageParameterState";

function GenerateQuantityInputForm () {
  const { t } = useTranslation();
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);

  function onChangeQuantityInput (e:any) {
    let changeValue = e.target.value;
    if (changeValue < 0 || changeValue === null) changeValue = 0;

    setGenerateImageParameter({item: "quantity", value: changeValue})
  }

  return (
    <div className="text-start w-full h-auto">
      <p className="w-full h-auto text-lg">{t("main:quantity")}</p>
      <input type="number" value={generateImageParameter.quantity} onChange={onChangeQuantityInput}
             className="w-full h-9 pl-1 border-b-2 border-gray-2 text-md outline-none" min={0} placeholder={t("main:quantityPlaceholder")} />
    </div>
  );
}

export default GenerateQuantityInputForm;