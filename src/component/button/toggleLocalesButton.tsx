import { useTranslation } from "react-i18next";

function ToggleLocalesButton (onClick: Function) {
  const { t } = useTranslation();

  return (
    <p className="w-auto h-auto text-xl cursor-pointer select-none" onClick={()=>onClick()}>{t("main:languageChangeLabel")}</p>
  );
}

export default ToggleLocalesButton;