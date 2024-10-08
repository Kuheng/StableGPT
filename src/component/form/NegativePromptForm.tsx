import { useTranslation } from "react-i18next";

import PromptInput from "../input/PromptInput";

function NegativePromptForm () {
  const { t } = useTranslation();

  return (
    <>
      <p className="w-full h-auto text-lg dark:text-darkMode-POINT">{t("prompt:negativePrompt")}</p>
      <PromptInput parameterKey="negativePrompt" />
    </>
  );
}

export default NegativePromptForm;