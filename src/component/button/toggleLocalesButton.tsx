import { useCallback } from "react";
import { useTranslation } from "react-i18next";

function ToggleLocalesButton () {
  const { t, i18n } = useTranslation();

  const onClick = useCallback(() => {
    (i18n.language === 'ko-KR')? i18n.changeLanguage('en-US'):i18n.changeLanguage('ko-KR');
  },[i18n]
  );

  return (
    <div className="group toggle-language">
      <p className="w-auto h-auto text-xl cursor-pointer select-none" onClick={()=>onClick()}>{t("main:languageChangeLabel")}</p>
    </div>
  );
}

export default ToggleLocalesButton;