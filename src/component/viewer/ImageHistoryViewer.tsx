import { useRecoilValue, useRecoilState } from "recoil"
import { useTranslation } from 'react-i18next';

import { getGenerateImage } from "../../states/generatedImageState";
import { toggleGenerateImageHistoryOptionViewState } from "../../states/viewOptionState";

import ModuleFrameViewer from "./ModuleFrameVewer";

import ImageHistoryButton from "../button/ImageHistoryButton";
import ImageHistoryRemoveAllButton from "../button/ImageHistoryRemoveAllButton";

function ImageHistoryViewer () {
  const getGenerateImageHistory = useRecoilValue(getGenerateImage).imageHistory;
  const [toggleGenerateImageHistoryView, setToggleGenerateImageHistoryView] = useRecoilState(toggleGenerateImageHistoryOptionViewState);

  const { t } = useTranslation();

  function onClickGenerateImageHistoryOption () { setToggleGenerateImageHistoryView(true); }

  return (
    <ModuleFrameViewer frameTitle={t("main:generatedImageHistory")} optionTitle={t("main:generatedImageHistoryOptionTitle")}
      viewState={toggleGenerateImageHistoryView} onClick={onClickGenerateImageHistoryOption}
      height={"300px"} padding={"30px"}>
      {[<ImageHistoryRemoveAllButton />,
        <div className="flex w-full h-auto overflow-x-scroll overflow-y-hidden">
          {getGenerateImageHistory.map((generateImageHistory, index)=>{
            return <ImageHistoryButton index={index}>{generateImageHistory}</ImageHistoryButton>
        })}</div>]}
    </ModuleFrameViewer>
  );
}

export default ImageHistoryViewer;