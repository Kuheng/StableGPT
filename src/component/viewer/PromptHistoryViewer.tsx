import { useRecoilState } from "recoil";

import { clearPromptHistory } from "../../states/promptHistoryState";

import PromptHistoryButton from "../button/PromptHistoryButton";

import deleteAllIcon from "./../../assets/image/deleteAllIcon.png"

function PromptHistoryViewer () {
  const [promptHistoryList, clearPromptHistoryList] = useRecoilState(clearPromptHistory);

  function onClickClearHistory () { clearPromptHistoryList(''); }
  
  return (
    <div className="absolute w-300 h-auto max-h-640px bottom-18px -left-72 pt-11 border-1 border-gray-1 bg-white overflow-x-hidden overflow-y-scroll">
      <img src={deleteAllIcon} className="absolute w-8 h-8 top-1 right-1 bg-gray-1 cursor-pointer" onClick={onClickClearHistory} alt="" />
      {promptHistoryList !== null &&
      promptHistoryList.map((promptHistory:string)=>{ return (<PromptHistoryButton>{promptHistory}</PromptHistoryButton>); })}
    </div>
  );
}

export default PromptHistoryViewer;