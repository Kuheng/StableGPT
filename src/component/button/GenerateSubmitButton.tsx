import { useTranslation } from "react-i18next";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../states/generateImageParameterState";
import { addPromptHistory } from "../../states/promptHistoryState";
import { generatedImageSelector } from "../../states/GeneratedImageState";

import stableDiffusionApiHandler from "../../handler/api/stableDiffusionApiHandler";
import generateImageHandler from "../../handler/generateImageHandler";

function GenerateSubmitButton () {
  const { t } = useTranslation();
  const generateImageParameter = useRecoilValue(generateImageParameterSelector);
  const addPromptHistoryList = useSetRecoilState(addPromptHistory);
  const setGeneratedImage = useSetRecoilState(generatedImageSelector);

  function onClickSubmitGenerate () {
    stableDiffusionApiHandler.setImageNum(generateImageParameter.quantity);
    console.log(stableDiffusionApiHandler.postTextToImage(generateImageParameter.imagePrompt));
    addPromptHistoryList(generateImageParameter.imagePrompt);

    //Todo : switch stableDiffusion and dallE
    generateImageHandler.stableDiffusion
      .generate(generateImageParameter.imagePrompt)
      .then(data=>{
        //TODO : Start Loading

        const imgDataArr:Array<any> = data.images || [];
        let base64EncodedImage = (imgDataArr.length==0)?"":"data:image/png;base64,"+imgDataArr[0];
        console.log("GenerateSubmitButton::onClickSubmitGenerate - base64", base64EncodedImage);
        setGeneratedImage({item: "base64", value: base64EncodedImage});
      }).catch(error => {
        console.error("GenerateSubmitButton::onClickSubmitGenerate - error", error);
      }).then(()=>{
        //TODO : End Loading
      });
  }

  return (
    <button onClick={onClickSubmitGenerate}
            className="w-300 h-auto border-2 border-gray-1 rounded-sm bg-primary-1 text-xl cursor-pointer select-none">{t("main:generateButton")}</button>
  );
}

export default GenerateSubmitButton;