import { useRecoilValue, useRecoilState } from "recoil"
import { useTranslation } from 'react-i18next';

import { generatedImageSelector } from "../../states/generatedImageState";
import { toggleGenerateImageOptionViewState } from "../../states/viewOptionState";

import FormatInputForm from "../form/FormatInputForm";
import ResolutionRatioInputForm from "../form/ResolutionRatioInputForm";

import ViewerOptionButton from './../button/ViewOptionButton';
import GeneratedImageSaveButton from "../button/GeneratedImageSaveButton";

import ModuleFrameViewer from "./ModuleFrameVewer";

function GenerateImageViewer () {
  const generatedImage = useRecoilValue(generatedImageSelector);
  const [bIsGenerateImageOptionView, setToggleGenerateImageOptionView] = useRecoilState(toggleGenerateImageOptionViewState);

  const { t } = useTranslation();

  function onClickGenerateImageOption () { setToggleGenerateImageOptionView(true); }
  
  return (
    <ModuleFrameViewer frameTitle={t("generatedImage:generatedImage")} justify="center" height={"600px"} padding={"20px"}>
      <ViewerOptionButton optionTitle={t("generatedImage:generatedImageOptionTitle")} viewState={bIsGenerateImageOptionView} onClick={onClickGenerateImageOption}>
        <FormatInputForm />
        <ResolutionRatioInputForm />
        <GeneratedImageSaveButton />
      </ViewerOptionButton>
      <img src={generatedImage.base64} className="w-auto h-auto" alt="" />
    </ModuleFrameViewer>
  );
}

export default GenerateImageViewer;