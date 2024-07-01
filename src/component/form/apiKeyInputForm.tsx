import { useTranslation } from "react-i18next";

import ApiKeyInput from "../input/ApiKeyInput";

function ApiKeyInputForm () {
  const { t } = useTranslation();
  
  return (
    <div className="flex items-center w-560 h-12">
      <p className="text-center w-24 h-auto text-xl">{t("main:apiKey")}</p>
      <ApiKeyInput />
    </div>
  );
}

export default ApiKeyInputForm;