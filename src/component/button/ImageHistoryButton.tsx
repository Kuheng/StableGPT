import { useSetRecoilState } from "recoil";

import { changeGenerateImageViewer, removeGenerateImageHistory } from "../../states/generatedImageState";

import closeIcon from "./../../assets/image/crossIcon.png"

type propsType = {
  children: string,
  index: number,
}

function ImageHistoryButton ({children, index}: propsType) {
  const changeImageViewer = useSetRecoilState(changeGenerateImageViewer);
  const deleteImageHistory = useSetRecoilState(removeGenerateImageHistory);

  function onClickChangeImage () { changeImageViewer(children); };
  function onClickDeleteImageButton () { deleteImageHistory(index); };

  return (
    <div className="w-200 h-200 mr-5">
      <img src={children} className="w-200 h-200" onClick={onClickChangeImage} alt="" />
      <img src={closeIcon} className="relative w-10 h-10 -top-48 left-40 cursor-pointer" onClick={onClickDeleteImageButton} alt="" />
    </div>
  );
}

export default ImageHistoryButton;