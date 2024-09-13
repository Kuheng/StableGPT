import { useSetRecoilState, useRecoilState } from "recoil"
import { useTranslation } from 'react-i18next';

import { togglePromptOptionViewState } from "../../states/viewOptionState";
import { setPromptHistoryPopupViewState } from "../../states/popupViewState";

import ModuleFrameViewer from "./ModuleFrameVewer";
import SeedInputForm from "../form/SeedInputForm";
import ViewerOptionButton from "../button/ViewOptionButton";
import PromptHistoryViewButton from "../button/PromptHistoryViewButton";
import PromptViewer from "./PromptViewer";
import GenerateSubmitButton from "../button/GenerateSubmitButton";

function PromptModuleViewer () {
  const [bIsPromptOptionView, setTogglePromptOptionView] = useRecoilState(togglePromptOptionViewState);
  const setPromptHistoryPopupView = useSetRecoilState(setPromptHistoryPopupViewState);

  const { t } = useTranslation();

  function onClickPromptOption () {
    setTogglePromptOptionView(true);
    setPromptHistoryPopupView(false);
  }

  return (
    <ModuleFrameViewer frameTitle={t("prompt:imageGeneratePrompt")} height={"auto"} paddingLeft={"15px"} paddingRight={"55px"} paddingTop={"30px"} paddingBottom={"30px"}>
      <ViewerOptionButton optionTitle={t("prompt:promptOptionTitle")} viewState={bIsPromptOptionView} onClick={onClickPromptOption}>
        <SeedInputForm />
        <PromptHistoryViewButton />
      </ViewerOptionButton>
      <PromptViewer />
      <GenerateSubmitButton />
    </ModuleFrameViewer>
  );
}

export default PromptModuleViewer;