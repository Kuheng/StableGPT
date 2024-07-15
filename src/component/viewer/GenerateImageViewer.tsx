import { generatedImageSelector } from "../../states/generatedImageState";
import { useRecoilValue } from "recoil"

function GenerateImageViewer () {
  const generatedImage = useRecoilValue(generatedImageSelector);

  console.log("GenerateImageViewer - ", generatedImage.base64);
  return (
    <img src={generatedImage.base64} className="w-11/12 h-full" alt="" />
  );
}

export default GenerateImageViewer;