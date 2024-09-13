import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { setChatGPTAPIKeySelector } from "../../states/postChatGPTParameterState";

function ApiKeyInputForm () {
  const { t } = useTranslation();
  const [chatGptApiKey, setChatGptApiKey] = useRecoilState(setChatGPTAPIKeySelector);

  function onChangeApiKeyInput (e:any) { setChatGptApiKey(e.target.value); }
  
  return (
    <div className="px-10px pb-10px items-center w-full h-auto">
      <p className="w-full h-auto text-lg">{t("chatGpt:apiKey")}</p>
      <input type="text" value={chatGptApiKey} onChange={onChangeApiKeyInput}
             className="w-full h-11 pl-1 border-b-2 border-b-black text-lg outline-none" placeholder={"* " + t("chatGpt:apiKeyInputPlaceholder")} />
    </div>
  );
}

export default ApiKeyInputForm;