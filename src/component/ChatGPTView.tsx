import { useTranslation } from "react-i18next";
import { useRecoilValue, useRecoilState } from "recoil";

import { toggleChatGPTOptionViewState } from "../states/viewOptionState";
import { getChatGPTAPIKeyLengthSelector } from "../states/postChatGPTParameterState";

import ModuleFrameViewer from "./viewer/ModuleFrameVewer";

import ApiKeyInputForm from "./form/ApiKeyInputForm";
import ChatGPTChatingLogViewer from "./viewer/ChatGPTChatingLogViewer";
import ChatGPTPromptViewer from "./viewer/ChatGPTPromptViewer";
import ChatGPTApiKeyNullAlertViewer from "./viewer/ChatGPTApiKeyNullAlertViewer";

function ChatGPTView () {
  const [toggleChatGPTOptionView, setToggleChatGPTOptionView] = useRecoilState(toggleChatGPTOptionViewState);
  const getChatGPTAPIKeyLength = useRecoilValue(getChatGPTAPIKeyLengthSelector);

  const { t } = useTranslation();

  function onClickChatGPTOption () { setToggleChatGPTOptionView(true); }

  return (
    <div className="relative w-50% h-calc(-20) px-15px bg-white">
      <ModuleFrameViewer frameTitle={t("main:chatGPT")} optionTitle={t("main:chatGPTOPtionTitle")} viewState={toggleChatGPTOptionView} onClick={onClickChatGPTOption}
        justify={"center"} height={"1210px"}>
        {[<ApiKeyInputForm />,
        <div className="relative w-full h-calc(-40px) top-40px">
          <ChatGPTChatingLogViewer />
          <ChatGPTPromptViewer />
        </div>]}
      </ModuleFrameViewer>
      {getChatGPTAPIKeyLength === 0?<ChatGPTApiKeyNullAlertViewer />:''}
    </div>
  );
}

export default ChatGPTView;