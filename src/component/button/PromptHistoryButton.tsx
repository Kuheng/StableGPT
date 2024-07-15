import { ReactNode } from "react";
import { useSetRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../states/generateImageParameterState";
import { removePromptHistory } from "../../states/promptHistoryState";

import closeIcon from "./../../assets/image/crossIcon.png"

type propsType = {
  children: ReactNode,
}

function PromptHistoryButton ({children}: propsType) {
  const setGenerateImageParameter = useSetRecoilState(generateImageParameterSelector);
  const removePromptHistoryList = useSetRecoilState(removePromptHistory);

  function onClickHistory () { setGenerateImageParameter({key: "imagePrompt", value: children}); }
  function onClickRemove () { removePromptHistoryList(children); }

  return (
    <div className="w-10/12 h-8 mb-7 ml-4 border-b-2 border-b-gray-2">
      <p className="w-auto h-auto text-md bg-gray-1 cursor-pointer select-none" onClick={onClickHistory}>{children}</p>
      <img src={closeIcon} className="relative w-8 h-8 -top-7 left-56 cursor-pointer select-none" onClick={onClickRemove} alt="" />
    </div>
  );
}

export default PromptHistoryButton;