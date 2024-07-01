import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { inputDataSelector } from "../../state";

function QuantityInputForm () {
  const { t } = useTranslation();
  const [inputData, setInputData] = useRecoilState(inputDataSelector);

  const onChange_Quantity = (value: number) => {
    let changeValue = value;
    if (changeValue < 0 || changeValue === null) changeValue = 0;

    setInputData({item: "quantity", value: changeValue})
  };

  return (
    <input type="number" value={inputData.quantity} onChange={e=>onChange_Quantity(parseInt(e.target.value))}
           className="w-full h-9 pl-1 border-b-2 border-gray-2 text-md outline-none" min={0} placeholder={t("main:quantityPlaceholder")} />
  );
}

export default QuantityInputForm;