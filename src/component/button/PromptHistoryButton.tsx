import { ReactNode } from "react";
import { useSetRecoilState } from "recoil";

import { stableDiffusionParameterSelector } from "../../states/stableDiffusionParameterState";
import { removePromptHistory } from "../../states/promptHistoryState";

import closeIcon from "./../../assets/image/crossIcon.png"

type propsType = {
  children: ReactNode,
}

function PromptHistoryButton ({children}: propsType) {
  const setStableDiffusionParameter = useSetRecoilState(stableDiffusionParameterSelector);
  const removePromptHistoryList = useSetRecoilState(removePromptHistory);

  function onClickHistory () { setStableDiffusionParameter({key: "imagePrompt", value: children}); }
  function onClickRemove () { removePromptHistoryList(children); }

  return (
    <div className="relative w-10/12 h-8 mb-7 ml-4 border-b-2 border-b-gray-2">
      <p className="w-auto h-auto text-md cursor-pointer select-none" onClick={onClickHistory}>{children}</p>
      <img src={closeIcon} className="absolute w-8 h-8 top-0 -right-8 cursor-pointer select-none" onClick={onClickRemove} alt="" />
    </div>
  );
}

export default PromptHistoryButton;