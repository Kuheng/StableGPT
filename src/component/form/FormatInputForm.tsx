import { useTranslation } from "react-i18next";

import DropdownSelectionInput from "../input/DropdownSelectionInput";

function FormatInputForm () {
  const { t } = useTranslation();
  
  return (
    <div className="text-start w-49% h-auto mx-auto">
      <p className="w-full h-auto text-lg">{t("main:format")}</p>
      <DropdownSelectionInput item="format">
        <option value="none">none</option>
        <option value="png">png</option>
        <option value="jpg">jpg</option>
      </DropdownSelectionInput>
    </div>
  );
}

export default FormatInputForm;