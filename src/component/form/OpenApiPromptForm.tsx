import { useRecoilState } from "recoil";

import { setChatGPTPromptMessageSelector } from "../../states/postChatGPTParameterState";

function OpenApiPromptForm () {
  const [getChatGPTPromptMessage, setChatGPTPromptMessage] = useRecoilState(setChatGPTPromptMessageSelector);

  function onChangeGPTPrompt (e:any) { setChatGPTPromptMessage(e.target.value); }

  return (
    <input className="absolute w-calc(-100px) h-55px top-5px left-15px text-lg outline-none"
           value={getChatGPTPromptMessage} onChange={onChangeGPTPrompt} />
  );
}

export default OpenApiPromptForm;