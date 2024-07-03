import { useTranslation } from "react-i18next";
import { useRecoilState, useSetRecoilState } from "recoil";

import { inputDataSelector, addPromptHistory } from "../../state";

import stableDiffusionApiHandler from "../../handler/api/stableDiffusionApiHandler";

function GenerateSubmitButton () {
  const { t } = useTranslation();
  const [inputData] = useRecoilState(inputDataSelector);
  const addPromptHistoryList = useSetRecoilState(addPromptHistory);

  const onClick_Submit = () => {
    console.log(inputData);
    stableDiffusionApiHandler.setImageNum(inputData.quantity);
    //const data = stableDiffusionApiHandler.postTextToImage(inputData.imagePrompt);
    addPromptHistoryList(inputData.imagePrompt);
  }

  return (
    <button onClick={()=>onClick_Submit()}
            className="w-300 h-auto border-2 border-gray-1 rounded-sm bg-primary-1 text-xl cursor-pointer select-none">{t("main:generateButton")}</button>
  );
}

export default GenerateSubmitButton;