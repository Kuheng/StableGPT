import { useRecoilValue, useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";

import { getPromptHistory } from "../../states/promptHistoryState";
import { setPromptHistoryPopupViewState } from "../../states/popupViewState";

import PromptHistoryViewer from "../viewer/PromptHistoryViewer";

function PromptHistoryViewButton () {
  const promptHistoryLength = useRecoilValue(getPromptHistory).length;
  const [promptHistoryPopupView, setPromptHistoryPopupView] = useRecoilState(setPromptHistoryPopupViewState);
  const { t } = useTranslation();

  function onClickPromptPopupView () { setPromptHistoryPopupView(!promptHistoryPopupView); }

  return (<>
    {promptHistoryLength === 0?
    <button className="w-full h-auto mb-2 py-2 border-1 border-gray-7 rounded-5px bg-gray-1 text-gray-7 cursor-not-allowed dark:bg-darkMode-POINT dark:text-gray-3">
      {t("prompt:promptHistory")}</button>
    :<button className="w-full h-auto mb-2 py-2 rounded-5px bg-gray-4 text-white active:bg-gray-7" onClick={onClickPromptPopupView}>
      {t("prompt:promptHistory")}</button>}
    {promptHistoryPopupView && promptHistoryLength !== 0?<PromptHistoryViewer />:''}
  </>);
}

export default PromptHistoryViewButton;