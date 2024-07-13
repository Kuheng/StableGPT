import logo from "./../../logo.svg"
import closeIcon from "./../../assets/image/crossIcon.png"

function ImageHistoryButton () {
  return (
    <div className="w-200 h-200 mr-5">
      <img src={logo} className="w-200 h-200" alt="" />
      <img src={closeIcon} className="relative w-10 h-10 -top-48 left-40 bg-white cursor-pointer" alt="" />
    </div>
  );
}

export default ImageHistoryButton;