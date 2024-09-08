import { useRecoilState } from "recoil"
import { useTranslation } from 'react-i18next';

import { togglePromptOptionViewState } from "../../states/viewOptionState";

import ModuleFrameViewer from "./ModuleFrameVewer";
import SeedInputForm from "../form/SeedInputForm";
import PromptHistoryViewButton from "../button/PromptHistoryViewButton";
import PromptViewer from "./PromptViewer";
import GenerateSubmitButton from "../button/GenerateSubmitButton";

function PromptModuleViewer () {
  const [togglePromptOptionView, setTogglePromptOptionView] = useRecoilState(togglePromptOptionViewState);

  const { t } = useTranslation();

  function onClickPormptOption () { setTogglePromptOptionView(true); }

  return (
    <ModuleFrameViewer frameTitle={t("main:imageGeneratePrompt")} optionTitle={t("main:promptOptionTitle")} viewState={togglePromptOptionView} onClick={onClickPormptOption}
    height={"auto"} paddingLeft={"15px"} paddingRight={"55px"} paddingTop={"30px"} paddingBottom={"30px"}>
      {[<><SeedInputForm />
      <PromptHistoryViewButton /></>
      ,<><PromptViewer />
      <GenerateSubmitButton /></>]}
    </ModuleFrameViewer>
  );
}

export default PromptModuleViewer;