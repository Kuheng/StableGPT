import { useTranslation } from "react-i18next";

import DropdownSelectionInput from "../input/DropdownSelectionInput";

function ResolutionRatioInputForm () {
  const { t } = useTranslation();
  const resolutionRatioList = [
    <option value="none">none</option>,
    <option value="1:1">1:1</option>,
    <option value="4:3">4:3</option>,
    <option value="16:9">16:9</option>,
    <option value="21:9">21:9</option>,
    <option value="3:4">3:4</option>,
    <option value="9:16">9:16</option>,
    <option value="9:21">9:21</option>
  ];
  
  return (
    <div className="text-start w-full h-auto mx-auto">
      <p className="w-full h-auto text-lg dark:text-darkMode-POINT">{t("generatedImage:resolutionRatio")}</p>
      <DropdownSelectionInput parameterKey="resolutionRatio">
        {resolutionRatioList}
      </DropdownSelectionInput>
    </div>
  );
}

export default ResolutionRatioInputForm;