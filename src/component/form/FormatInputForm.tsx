import { useTranslation } from "react-i18next";

import DropdownSelectionInput from "../input/DropdownSelectionInput";

function FormatInputForm () {
  const { t } = useTranslation();
  const formatList = ["none", "png", "jpg"];
  
  return (
    <div className="text-start w-49% h-auto mx-auto">
      <p className="w-full h-auto text-lg">{t("main:format")}</p>
      <DropdownSelectionInput item="format">
        {formatList.map(format=>{ return <option value={format}>{format}</option> })}
      </DropdownSelectionInput>
    </div>
  );
}

export default FormatInputForm;