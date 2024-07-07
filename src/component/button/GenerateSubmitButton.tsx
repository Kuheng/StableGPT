import { useTranslation } from "react-i18next";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../manager/generateImageParameterManager";
import { addPromptHistory } from "../../manager/promptHistoryStateManager";

import stableDiffusionApiHandler from "../../handler/api/stableDiffusionApiHandler";

function GenerateSubmitButton () {
  const { t } = useTranslation();
  const generateImageParameter = useRecoilValue(generateImageParameterSelector);
  const addPromptHistoryList = useSetRecoilState(addPromptHistory);

  function onClick () {
    console.log(generateImageParameter);
    stableDiffusionApiHandler.setImageNum(generateImageParameter.quantity);
    addPromptHistoryList(generateImageParameter.imagePrompt);
  }

  return (
    <button onClick={onClick}
            className="w-300 h-auto border-2 border-gray-1 rounded-sm bg-primary-1 text-xl cursor-pointer select-none">{t("main:generateButton")}</button>
  );
}

export default GenerateSubmitButton;