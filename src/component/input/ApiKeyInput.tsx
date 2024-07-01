import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { inputDataSelector } from "../../state";

function ApiKeyInput () {
  const { t } = useTranslation();
  const [inputData, setInputData] = useRecoilState(inputDataSelector);

  return (
    <input type="text" value={inputData.apiKey} onChange={e=>{setInputData({item: "apiKey", value: e.target.value})}}
           className="w-440 h-11 pl-1 border-b-2 border-b-black text-lg outline-none" placeholder={"* " + t("main:apiKeyInputPlaceholder")} />
  );
}

export default ApiKeyInput;