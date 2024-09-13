import { useSetRecoilState } from "recoil";

import { darkModeSelector } from "../../states/darkModeState";

import lightMode from "./../../assets/image/lightMode.png"
import darkMode from "./../../assets/image/darkMode.png"

function ToggleDarkModeButton () {
  const setDarkMode = useSetRecoilState(darkModeSelector);

  function onClickDarkModeSwitch () { setDarkMode(true) }

  return (
    <>
      <img src={lightMode} className="w-40px h-40px cursor-pointer rounded-50% block dark:hidden" onClick={onClickDarkModeSwitch} alt="" />
      <img src={darkMode} className="w-40px h-40px cursor-pointer rounded-50% hidden dark:block dark:bg-darkMode-POINT" onClick={onClickDarkModeSwitch} alt="" />
    </>
  );
}

export default ToggleDarkModeButton;