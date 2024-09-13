import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useTranslation } from "react-i18next";

import { setChatGPTAPIKeySelector } from "../../states/postChatGPTParameterState";

function ChatGPTApiKeyNullAlertViewer () {
  const [apiKeyInput, setApiKeyInput] = useState('');
  const setChatGPTAPIKey = useSetRecoilState(setChatGPTAPIKeySelector);

  const { t } = useTranslation();

  function onChangeApiKey (e:any) { setApiKeyInput(e.target.value); }
  function onClickChatGPTAPI () { window.open("https://platform.openai.com/api-keys", "_blank", "noopener, noreferrer"); }
  function onClickSaveAPIKey () { setChatGPTAPIKey(apiKeyInput); }

  return (
    <div className="absolute w-full h-full -top-10px -left-5px">
      <div className="absolute w-full h-full bg-black opacity-30 z-30" />
      <div className="relative w-800px h-200 top-500px mx-auto pt-30px px-30px bg-white z-30">
        <p className="font-bold text-xl">{t("chatGpt:chatGPTInputAlertPopup")}</p>
        <p><span className="border-b-1 border-blue text-blue font-semibold text-lg cursor-pointer" onClick={onClickChatGPTAPI}>{t("chatGpt:chatGPTGetLink")}</span></p>
        <input className="w-500px h-10 mt-10 border-b-2 border-gray-4 text-lg outline-none" value={apiKeyInput} onChange={onChangeApiKey} />
        {apiKeyInput.length === 0?
          <button className="absolute w-200 h-10 right-10px bottom-25px ml-auto border-1 border-gray-7 bg-gray-6 rounded-10px text-gray-9 font-semibold cursor-not-allowed">
            {t("chatGpt:chatGPTSave")}</button>
          :<button className="absolute w-200 h-10 right-10px bottom-25px ml-auto border-1 border-blue-1 bg-blue-1 rounded-10px text-white font-semibold cursor-pointer
                            active:border-blue-2 active:bg-blue-2"
            onClick={onClickSaveAPIKey}>{t("chatGpt:chatGPTSave")}</button>}
      </div>
    </div>
  );
}

export default ChatGPTApiKeyNullAlertViewer;