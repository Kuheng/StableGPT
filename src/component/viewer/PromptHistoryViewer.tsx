import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";

import { clearPromptHistory } from "../../states/promptHistoryState";

import PromptHistoryButton from "../button/PromptHistoryButton";

import deleteAllIcon from "./../../assets/image/deleteAllIcon.png"

function PromptHistoryViewer () {
  const [promptHistoryList, clearPromptHistoryList] = useRecoilState(clearPromptHistory);

  const { t } = useTranslation();

  function onClickClearHistory () { clearPromptHistoryList(''); }
  
  return (
    <div className="absolute w-300 h-auto max-h-640px p-5px -left-60 -bottom-50px border-1 border-gray-1 rounded-5px bg-white overflow-x-hidden overflow-y-scroll">
      <p className="h-40px mb-20px pt-5px pl-10px border-1 border-t-0 border-l-0 border-r-0 border-b-black text-lg font-light">{t("prompt:promptHistory")}</p>
      <img src={deleteAllIcon} className="absolute w-8 h-8 top-1 right-1 bg-white cursor-pointer" onClick={onClickClearHistory} alt="" />
      {promptHistoryList !== null &&
      promptHistoryList.map((promptHistory:string)=>{ return (<PromptHistoryButton>{promptHistory}</PromptHistoryButton>); })}
    </div>
  );
}

export default PromptHistoryViewer;