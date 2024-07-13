import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { generateImageParameterSelector } from "../../states/generateImageParameterState";

function ApiKeyInputForm () {
  const { t } = useTranslation();
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);

  function onChangeApiKeyInput (e:any) { setGenerateImageParameter({item: "apiKey", value: e.target.value}); }
  
  return (
    <div className="flex items-center w-560 h-12">
      <p className="text-center w-24 h-auto text-xl">{t("main:apiKey")}</p>
      <input type="text" value={generateImageParameter.apiKey} onChange={onChangeApiKeyInput}
             className="w-440 h-11 pl-1 border-b-2 border-b-black text-lg outline-none" placeholder={"* " + t("main:apiKeyInputPlaceholder")} />
    </div>
  );
}

export default ApiKeyInputForm;