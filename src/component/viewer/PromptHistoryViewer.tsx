import { useRecoilState } from "recoil";

import { clearPromptHistory } from "../../states/promptHistoryState";

import PromptHistoryButton from "../button/PromptHistoryButton";

import deleteAllIcon from "./../../assets/image/deleteAllIcon.png"

function PromptHistoryViewer () {
  const [promptHistoryList, clearPromptHistoryList] = useRecoilState(clearPromptHistory);

  function onClickClearHistory () { clearPromptHistoryList(''); }
  
  return (
    <>
      <img src={deleteAllIcon} className="w-8 h-8 ml-auto mb-2 mr-2 bg-gray-1 cursor-pointer" onClick={onClickClearHistory} alt="" />
      {promptHistoryList !== null &&
      promptHistoryList.map((promptHistory:string)=>{ return (<PromptHistoryButton>{promptHistory}</PromptHistoryButton>); })}
    </>
  );
}

export default PromptHistoryViewer;