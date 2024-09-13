import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";

import { removeAllGenerateImageHistory } from "../../states/generatedImageState";
import { setRemoveImageHistoryConfirmPopupViewState } from "../../states/popupViewState";

function ImageHistoryRemoveAllButton () {
  const [bIsConfirmPopupView, setConfirmPopupView] = useRecoilState(setRemoveImageHistoryConfirmPopupViewState);
  const [generatedImageHistory, removeAllImageHistory] = useRecoilState(removeAllGenerateImageHistory);

  const { t } = useTranslation();

  function onClickRemoveAllImageHistoryButton () { setConfirmPopupView(true); }
  function onClickConfirmRemoveImageHistoryButton () {
    setConfirmPopupView(false);
    removeAllImageHistory(true);
  }
  function onClickCancelRemoveImageHistoryButton () { setConfirmPopupView(false); }

  return (
    <div className="relative w-full h-auto pb-5px">
        {generatedImageHistory.imageHistory.length === 0?
        <button className="w-full h-auto border-1 border-gray-5 rounded-2px bg-gray-6 text-gray-3 text-lg cursor-not-allowed">
          {t("imageHistory:generatedImageHistoryRemoveAll")}</button>
        :<button className="w-full h-auto border-1 border-blue-1 rounded-2px bg-blue-1 text-white text-lg cursor-pointer active:border-blue-2 active:bg-blue-2"
          onClick={onClickRemoveAllImageHistoryButton}>
          {t("imageHistory:generatedImageHistoryRemoveAll")}</button>}
        {bIsConfirmPopupView?
        <div className="absolute w-300px h-auto -top-10 -left-24 p-5px pt-4 pb-3 text-center border-1 border-gray-3 rounded-5px bg-white">
          <p className="text-lg">{t("imageHistory:generatedImageHistoryRemoveAllAlert1")}</p>
          <p className="mb-5 text-lg">{t("imageHistory:generatedImageHistoryRemoveAllAlert2")}</p>
          <button className="w-55px h-30px mr-1 border-1 border-blue-1 rounded-5px bg-blue-1 text-white text-lg font-medium cursor-pointer
          active:border-blue-2 active:bg-blue-2"
            onClick={onClickConfirmRemoveImageHistoryButton}>{t("main:yes")}</button>
          <button className="w-55px h-30px ml-1 border-1 border-gray-5 rounded-5px bg-gray-6 text-gray-3 text-lg font-medium cursor-pointer
            active:border-white-1 active:bg-white-1"
            onClick={onClickCancelRemoveImageHistoryButton}>{t("main:cancel")}</button>
        </div>:""}
    </div>
  );
}

export default ImageHistoryRemoveAllButton;