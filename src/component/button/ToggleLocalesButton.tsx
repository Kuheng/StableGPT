import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const languageList = ['ko-KR', 'en-US'];

function ToggleLocalesButton () {
  const { t, i18n } = useTranslation();

  const onClick = useCallback(() => {
    const languageIndex = languageList.findIndex(language=>language === i18n.language)+1;

    if (languageIndex === languageList.length) i18n.changeLanguage(languageList[0]);
    else i18n.changeLanguage(languageList[languageIndex]);
  },[i18n]);

  return (
    <div className="group toggle-language">
      <p className="w-auto h-auto text-xl cursor-pointer select-none" onClick={onClick}>{t("main:languageChangeLabel")}</p>
    </div>
  );
}

export default ToggleLocalesButton;