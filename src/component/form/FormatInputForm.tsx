import { useTranslation } from "react-i18next";

import DropdownSelectionInput from "../input/DropdownSelectionInput";

function FormatInputForm () {
  const { t } = useTranslation();
  
  return (
    <div className="text-start w-full h-auto mx-auto">
      <p className="w-full h-auto text-lg dark:text-darkMode-POINT">{t("generatedImage:format")}</p>
      <DropdownSelectionInput parameterKey="format">
        <option value="none">none</option>
        <option value="png">png</option>
        <option value="jpg">jpg</option>
      </DropdownSelectionInput>
    </div>
  );
}

export default FormatInputForm;