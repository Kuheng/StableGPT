import { ReactNode } from "react";
import { useSetRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../manager/generateImageParameterManager";
import { removePromptHistory } from "../../manager/promptHistoryStateManager";

import closeIcon from "./../../image/crossIcon.png";

type propsTypes = {
  children: ReactNode,
}

function PromptHistoryButton ({children}: propsTypes) {
  const setGenerateImageParameter = useSetRecoilState(generateImageParameterSelector);
  const removePromptHistoryList = useSetRecoilState(removePromptHistory);

  function onClick_History () { setGenerateImageParameter({item: "imagePrompt", value: children}); }
  function onClick_Remove () { removePromptHistoryList(children); }

  return (
    <div className="w-10/12 h-8 mb-7 ml-4 border-b-2 border-b-gray-2">
      <p className="w-auto h-auto text-md bg-gray-1 cursor-pointer select-none" onClick={onClick_History}>{children}</p>
      <img src={closeIcon} className="relative w-8 h-8 -top-7 left-56 cursor-pointer select-none" onClick={onClick_Remove} alt="" />
    </div>
  );
}

export default PromptHistoryButton;