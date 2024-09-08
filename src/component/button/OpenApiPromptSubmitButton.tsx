import { useRecoilValue, useRecoilState } from "recoil";

import { getChatGPTAPIKeySelector, setChatGPTPromptMessageSelector } from "../../states/postChatGPTParameterState";

import openAiApiHandler from "../../handler/api/openAiApiHandler";

import whiteArrow from "./../../assets/image/whiteArrow.png"

function OpenApiPromptSubmitButton () {
  const chatGPTApiKey = useRecoilValue(getChatGPTAPIKeySelector);
  const [getChatGPTPromptMessage, setChatGPTPromptMessage] = useRecoilState(setChatGPTPromptMessageSelector);

  function onClickSubmitGPTPrompt () {
    setChatGPTPromptMessage('');
    openAiApiHandler.setApiKey(chatGPTApiKey);
    console.log(openAiApiHandler.postTextChat(getChatGPTPromptMessage));
  }

  return (
    <button className="absolute flex w-50px h-50px top-8px right-8px justify-center bg-gray-8 rounded-50% active:bg-gray-7" onClick={onClickSubmitGPTPrompt}>
      <img src={whiteArrow} className="relative top-20%" alt="" />
    </button>
  );
}

export default OpenApiPromptSubmitButton;