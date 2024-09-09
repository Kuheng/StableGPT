import { useRecoilState } from "recoil"
import { useTranslation } from 'react-i18next';

import { togglePromptOptionViewState } from "../../states/viewOptionState";

import ModuleFrameViewer from "./ModuleFrameVewer";
import SeedInputForm from "../form/SeedInputForm";
import ViewerOptionButton from "../button/ViewOptionButton";
import PromptHistoryViewButton from "../button/PromptHistoryViewButton";
import PromptViewer from "./PromptViewer";
import GenerateSubmitButton from "../button/GenerateSubmitButton";

function PromptModuleViewer () {
  const [bIsPromptOptionView, setTogglePromptOptionView] = useRecoilState(togglePromptOptionViewState);

  const { t } = useTranslation();

  function onClickPromptOption () { setTogglePromptOptionView(true); }

  return (
    <ModuleFrameViewer frameTitle={t("main:imageGeneratePrompt")} height={"auto"} paddingLeft={"15px"} paddingRight={"55px"} paddingTop={"30px"} paddingBottom={"30px"}>
      <ViewerOptionButton optionTitle={t("main:promptOptionTitle")} viewState={bIsPromptOptionView} onClick={onClickPromptOption}>
        <SeedInputForm />
        <PromptHistoryViewButton />
      </ViewerOptionButton>
      <PromptViewer />
      <GenerateSubmitButton />
    </ModuleFrameViewer>
  );
}

export default PromptModuleViewer;