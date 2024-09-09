import { useTranslation } from "react-i18next";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { stableDiffusionParameterSelector } from "../../states/stableDiffusionParameterState";
import { addPromptHistory } from "../../states/promptHistoryState";
import { setGenerateLoadingState } from "../../states/generateLoadingState";
import { generatedImageSelector } from "../../states/generatedImageState";

import stableDiffusionApiHandler from "../../handler/api/stableDiffusionApiHandler";
import generateImageHandler from "../../handler/generateImageHandler";

function GenerateSubmitButton () {
  const { t } = useTranslation();
  const stableDiffusionParameter = useRecoilValue(stableDiffusionParameterSelector);
  const addPromptHistoryList = useSetRecoilState(addPromptHistory);
  const setLoadingState = useSetRecoilState(setGenerateLoadingState);
  const setGeneratedImage = useSetRecoilState(generatedImageSelector);

  function onClickSubmitGenerate () {
    stableDiffusionApiHandler.setImageNum(stableDiffusionParameter.quantity);
    console.log(stableDiffusionApiHandler.postTextToImage(stableDiffusionParameter.imagePrompt));
    addPromptHistoryList(stableDiffusionParameter.imagePrompt);
    setLoadingState(true);

    //Todo : switch stableDiffusion and dallE
    generateImageHandler.stableDiffusion
      .generate(stableDiffusionParameter.imagePrompt)
      .then(data=>{
        //TODO : Start Loading

        const imgDataArr:Array<any> = data.images || [];
        let base64EncodedImage = (imgDataArr.length===0)?"":"data:image/png;base64,"+imgDataArr[0];
        console.log("GenerateSubmitButton::onClickSubmitGenerate - base64", base64EncodedImage);
        setGeneratedImage(base64EncodedImage);
      }).catch(error => {
        console.error("GenerateSubmitButton::onClickSubmitGenerate - error", error);
      }).then(()=>{
        //TODO : End Loading
        setLoadingState(false);
      });
  }

  return (
    <>{stableDiffusionParameter.imagePrompt.length !== 0?
        <button onClick={onClickSubmitGenerate} className="w-150px h-auto border-2 border-blue-1 rounded-15px bg-blue-1 text-white text-xl cursor-pointer select-none
          active:border-blue-2 active:bg-blue-2">
          {t("main:generateButton")}</button>
        :<button className="w-150px h-auto border-2 border-gray-5 rounded-15px bg-gray-6 text-gray-3 text-xl cursor-not-allowed select-none">
          {t("main:generateButton")}</button>}</>
  );
}

export default GenerateSubmitButton;