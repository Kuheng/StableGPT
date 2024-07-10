import { useTranslation } from "react-i18next";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../states/generateImageParameterState";
import { addPromptHistory } from "../../states/promptHistoryState";
import { setGenerateFetchState } from "../../states/generateImageState";

import stableDiffusionApiHandler from "../../handler/api/stableDiffusionApiHandler";

function GenerateSubmitButton () {
  const { t } = useTranslation();
  const generateImageParameter = useRecoilValue(generateImageParameterSelector);
  const addPromptHistoryList = useSetRecoilState(addPromptHistory);
  const setFetchState = useSetRecoilState(setGenerateFetchState);

  function onClickSubmitGenerate () {
    stableDiffusionApiHandler.setImageNum(generateImageParameter.quantity);
    console.log(stableDiffusionApiHandler.postTextToImage(generateImageParameter.imagePrompt));
    addPromptHistoryList(generateImageParameter.imagePrompt);
    setFetchState(true);
  }

  return (
    <button onClick={onClickSubmitGenerate}
            className="w-300 h-auto border-2 border-gray-1 rounded-sm bg-primary-1 text-xl cursor-pointer select-none">{t("main:generateButton")}</button>
  );
}

export default GenerateSubmitButton;