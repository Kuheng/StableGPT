import { ReactNode } from "react";
import { useSetRecoilState } from "recoil";

import { inputDataSelector, removePromptHistory } from "../../state";

import logo from "./../../logo.svg"

type propsTypes = {
  children: ReactNode,
}

function PromptHistoryButton ({children}: propsTypes) {
  const setInputData = useSetRecoilState(inputDataSelector);
  const removePromptHistoryList = useSetRecoilState(removePromptHistory);

  return (
    <div className="w-10/12 h-8 mb-7 ml-4 border-b-2 border-b-gray-2">
      <p className="w-auto h-auto text-md cursor-pointer select-none" onClick={()=>setInputData({item: "imagePrompt", value: children})}>{children}</p>
      <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-pointer select-none" onClick={()=>removePromptHistoryList(children)} alt="" />
    </div>
  );
}

export default PromptHistoryButton;