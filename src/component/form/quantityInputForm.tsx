import { useTranslation } from "react-i18next";

import QuantityInput from "../input/QuantityInput";

function QuantityInputForm () {
  const { t } = useTranslation();

  return (
    <div className="text-start w-full h-auto">
      <p className="w-full h-auto text-lg">{t("main:quantity")}</p>
      <QuantityInput />
    </div>
  );
}

export default QuantityInputForm;