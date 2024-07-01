import { useTranslation } from "react-i18next";

import PromptInput from "../input/PromptInput";

function NegativePromptForm () {
  const { t } = useTranslation();

  return (
    <>
      <p className="w-full h-auto text-lg">{t("main:negativePrompt")}</p>
      <PromptInput item="negativePrompt" />
    </>
  );
}

export default NegativePromptForm;