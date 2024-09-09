import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";

import { stableDiffusionParameterSelector } from "../../states/stableDiffusionParameterState";
import { generatedImageSelector } from "../../states/generatedImageState";

import logo from "../../logo.svg"

function GeneratedImageSaveButton () {
  const stableDiffusionParameter = useRecoilValue(stableDiffusionParameterSelector);
  const generatedImage = useRecoilValue(generatedImageSelector).base64;

  const { t } = useTranslation();

  return (
    <>{generatedImage !== logo?<button className="w-full h-10 mb-2 border-1 rounded-5px border-blue-1 bg-blue-1 text-white
      active:border-blue-2  active:bg-blue-2 text-lg font-semibold cursor-pointer">
        <a href={generatedImage} download={t("main:saveImageName")+stableDiffusionParameter.format}>{t("main:saveImage")}</a></button>
    :<button className="w-full h-10 mb-2 border-1 border-gray-5 rounded-5px bg-gray-6 text-gray-3 text-lg font-semibold cursor-not-allowed">
    {t("main:saveImage")}</button>}</>
  );
}

export default GeneratedImageSaveButton;