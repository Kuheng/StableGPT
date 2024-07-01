import { useTranslation } from "react-i18next";

import DropdownSelectionInput from "../input/DropdownSelectionInput";

function AspectInputForm () {
  const { t } = useTranslation();
  const aspectList = ["none", "1:1", "4:3", "16:9", "21:9", "3:4", "9:16", "9:21"];
  
  return (
    <div className="text-start w-49% h-auto mx-auto">
      <p className="w-full h-auto text-lg">{t("main:aspect")}</p>
      <DropdownSelectionInput item="aspect">
        {aspectList.map(aspect=>{ return <option value={aspect}>{aspect}</option> })}
      </DropdownSelectionInput>
    </div>
  );
}

export default AspectInputForm;