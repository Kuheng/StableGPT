import { useRecoilValue, useRecoilState } from "recoil"
import { useTranslation } from 'react-i18next';

import { generatedImageSelector } from "../../states/generatedImageState";
import { toggleGenerateImageOptionViewState } from "../../states/viewOptionState";

import FormatInputForm from "../form/FormatInputForm";
import ResolutionRatioInputForm from "../form/ResolutionRatioInputForm";
import GeneratedImageSaveButton from "../button/GeneratedImageSaveButton";

import ModuleFrameViewer from "./ModuleFrameVewer";

function GenerateImageViewer () {
  const generatedImage = useRecoilValue(generatedImageSelector);
  const [toggleGenerateImageView, setToggleGenerateImageView] = useRecoilState(toggleGenerateImageOptionViewState);

  const { t } = useTranslation();

  function onClickGenerateImageOption () { setToggleGenerateImageView(true); }
  
  return (
    <ModuleFrameViewer frameTitle={t("main:generatedImage")} optionTitle={t("main:generatedImageOptionTitle")}
      viewState={toggleGenerateImageView} onClick={onClickGenerateImageOption}
      justify="center" height={"600px"} padding={"20px"}>
      {[<>
        <FormatInputForm />
        <ResolutionRatioInputForm />
        <GeneratedImageSaveButton />
      </>,
      <img src={generatedImage.base64} className="w-auto h-auto" alt="" />]}
    </ModuleFrameViewer>
  );
}

export default GenerateImageViewer;