import { useRecoilState } from "recoil";

import { setChatGPTPromptMessageSelector } from "../../states/postChatGPTParameterState";

function OpenApiPromptForm () {
  const [getChatGPTPromptMessage, setChatGPTPromptMessage] = useRecoilState(setChatGPTPromptMessageSelector);

  function onChangeGPTPrompt (e:any) { setChatGPTPromptMessage(e.target.value); }

  return (
    <input className="absolute w-calc(-100px) h-55px top-5px left-10px pl-5px text-lg outline-none dark:bg-darkMode-POINT dark:text-white"
           value={getChatGPTPromptMessage} onChange={onChangeGPTPrompt} />
  );
}

export default OpenApiPromptForm;