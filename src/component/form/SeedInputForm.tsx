import { useTranslation } from "react-i18next";

import RangeInput from "../input/RangeInput";

function SeedInputForm () {
  const { t } = useTranslation();

  return (
    <div className="w-full h-18 text-start">
      <p className="w-full h-auto text-lg">{t("main:seedLabel")}</p>
      <RangeInput item="seed" minNumber={-1} maxNumber={4294967294} />
    </div>
  );
}

export default SeedInputForm;