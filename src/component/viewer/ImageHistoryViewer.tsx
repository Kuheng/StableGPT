import { useRecoilValue, useRecoilState } from "recoil"
import { useTranslation } from 'react-i18next';

import { getGenerateImage } from "../../states/generatedImageState";
import { toggleGenerateImageHistoryOptionViewState } from "../../states/viewOptionState";

import ModuleFrameViewer from "./ModuleFrameVewer";

import ViewerOptionButton from "../button/ViewOptionButton";
import ImageHistoryButton from "../button/ImageHistoryButton";
import ImageHistoryRemoveAllButton from "../button/ImageHistoryRemoveAllButton";

function ImageHistoryViewer () {
  const generateImageHistory = useRecoilValue(getGenerateImage).imageHistory;
  const [bIsGenerateImageHistoryOptionView, setToggleGenerateImageHistoryOptionView] = useRecoilState(toggleGenerateImageHistoryOptionViewState);

  const { t } = useTranslation();

  function onClickGenerateImageHistoryOption () { setToggleGenerateImageHistoryOptionView(true); }

  return (
    <ModuleFrameViewer frameTitle={t("main:generatedImageHistory")} height={"300px"} padding={"30px"}>
      <ViewerOptionButton optionTitle={t("main:generatedImageHistoryOptionTitle")} viewState={bIsGenerateImageHistoryOptionView} onClick={onClickGenerateImageHistoryOption}>
        <ImageHistoryRemoveAllButton />
      </ViewerOptionButton>
      <div className="flex w-full h-auto overflow-x-scroll overflow-y-hidden">
        {generateImageHistory.map((generateImageHistory, index)=>{
          return <ImageHistoryButton index={index}>{generateImageHistory}</ImageHistoryButton>
        })}
      </div>
    </ModuleFrameViewer>
  );
}

export default ImageHistoryViewer;