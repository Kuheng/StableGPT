import { useRecoilState } from "recoil";

import { clearPromptHistory } from "../../state";

import PromptHistoryButton from "../button/PromptHistoryButton";

import logo from "./../../logo.svg"

function PromptHistoryViewer () {
  const [promptHistoryList, clearPromptHistoryList] = useRecoilState(clearPromptHistory);
  
  return (
    <>
      <img src={logo} className="w-10 h-10 ml-auto cursor-pointer" onClick={clearPromptHistoryList} alt="" />
      {promptHistoryList !== null &&
      promptHistoryList.map((promptHistory:string)=>{ return (<PromptHistoryButton>{promptHistory}</PromptHistoryButton>); })}
    </>
  );
}

export default PromptHistoryViewer;