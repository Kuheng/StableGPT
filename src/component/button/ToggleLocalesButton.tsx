import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { setLanguagePopupViewState } from "../../states/popupViewState";

import languageButton from "./../../assets/image/languageIcon.png"

function ToggleLocalesButton () {
  const { t, i18n } = useTranslation();
  const [languagePopupView, setLanguagePopupView] = useRecoilState(setLanguagePopupViewState);

  function onClickChangeLocalesButton () { setLanguagePopupView(true); }

  const onClickToggleLocales = useCallback((e:any) => {
    if (i18n.language !== e.target.value) i18n.changeLanguage(e.target.value);
  },[i18n]);

  return (
    <>
      <img src={languageButton} className="w-40px h-40px rounded-50% cursor-pointer dark:bg-darkMode-POINT" onClick={onClickChangeLocalesButton} alt="" />
      {languagePopupView?
      <div className="absolute w-100px h-auto top-50px right-5px p-10px border-1 border-gray-3 rounded-5px bg-white z-40 dark:bg-darkMode dark:border-darkMode-POINT">
        <button className="text-left w-full pl-1 py-1 text-lg bg-white text-black cursor-pointer
                         hover:bg-gray-2 hover:text-white dark:text-darkMode-POINT dark:bg-darkMode dark:hover:bg-darkMode-POINT"
                value={'ko-KR'} onClick={onClickToggleLocales}>{t("language:languageKorean")}</button>
        <button className="text-left w-full pl-1 py-1 text-lg bg-white text-black cursor-pointer
                         hover:bg-gray-2 hover:text-white dark:text-darkMode-POINT dark:bg-darkMode dark:hover:bg-darkMode-POINT"
                value={'en-US'} onClick={onClickToggleLocales}>{t("language:languageEnglish")}</button>
      </div>:''}
    </>
  );
}

export default ToggleLocalesButton;