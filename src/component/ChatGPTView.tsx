import { useTranslation } from "react-i18next";
import { useRecoilValue, useRecoilState } from "recoil";

import { toggleChatGPTOptionViewState } from "../states/viewOptionState";
import { getChatGPTAPIKeyLengthSelector } from "../states/postChatGPTParameterState";

import ModuleFrameViewer from "./viewer/ModuleFrameVewer";

import ApiKeyInputForm from "./form/ApiKeyInputForm";
import ViewerOptionButton from "./button/ViewOptionButton";

import ChatGPTChatingLogViewer from "./viewer/ChatGPTChatingLogViewer";
import ChatGPTPromptViewer from "./viewer/ChatGPTPromptViewer";
import ChatGPTApiKeyNullAlertViewer from "./viewer/ChatGPTApiKeyNullAlertViewer";

function ChatGPTView () {
  const [bIsChatGptOptionView, setToggleChatGptOptionView] = useRecoilState(toggleChatGPTOptionViewState);
  const chatGptApiKeyLength = useRecoilValue(getChatGPTAPIKeyLengthSelector);

  const { t } = useTranslation();

  function onClickChatGPTOption () { setToggleChatGptOptionView(true); }

  return (
    <div className="relative w-50% h-calc(-20) px-15px bg-white">
      <ModuleFrameViewer frameTitle={t("chatGpt:chatGPT")} justify={"center"} height={"1210px"}>
        <ViewerOptionButton optionTitle={t("chatGpt:chatGPTOPtionTitle")} viewState={bIsChatGptOptionView} onClick={onClickChatGPTOption}>
          <ApiKeyInputForm />
        </ViewerOptionButton>
        <div className="relative w-full h-calc(-40px) top-40px">
          <ChatGPTChatingLogViewer />
          <ChatGPTPromptViewer />
        </div>
      </ModuleFrameViewer>
      {chatGptApiKeyLength === 0?<ChatGPTApiKeyNullAlertViewer />:''}
    </div>
  );
}

export default ChatGPTView;