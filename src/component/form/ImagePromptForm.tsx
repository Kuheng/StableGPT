import { useTranslation } from "react-i18next";

import PromptInput from "../input/PromptInput";

function ImagePromptForm () {
  const { t } = useTranslation();

  return (
    <>
      <p className="w-full h-auto text-lg">{t("main:imagePrompt")}</p>
      <PromptInput item="imagePrompt" />
    </>
  );
};

export default ImagePromptForm;