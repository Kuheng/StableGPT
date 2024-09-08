import ToggleDarkModeButton from "./button/ToggleDarkModeButton";
import ToggleLocalesButton from "./button/ToggleLocalesButton";

import logo from "./../assets/image/stableGPTlogo.png"

function TopNavigationBar () {
  return (
    <div className="flex items-center w-full h-60px justify-between">
      <img src={logo} className="w-55px h-55px" alt="" />
      <div className="flex items-center w-130px h-full justify-around">
        <ToggleDarkModeButton />
        <ToggleLocalesButton />
      </div>
    </div>
  );
}

export default TopNavigationBar;