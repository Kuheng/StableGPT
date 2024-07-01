import logo from "./../../logo.svg"

function ImageHistoryButton () {
  return (
    <div className="w-200 h-200 mr-5">
      <img src={logo} className="w-200 h-200" alt="" />
      <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-pointer" alt="" />
    </div>
  );
}

export default ImageHistoryButton;