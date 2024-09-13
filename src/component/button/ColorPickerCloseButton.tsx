import { useSetRecoilState } from 'recoil';

import { colorPickerState } from '../../states/colorPickerState';

import closeButton from './../../assets/image/crossIcon.png'

function ColorPickerCloseButton () {
  const setColorPicker = useSetRecoilState(colorPickerState);

  function onClickColorPickerClose () { setColorPicker(""); }

  return (
    <img src={closeButton} className="absolute w-6 h-6 -mt-330px ml-200px bg-white border-2 border-black cursor-pointer dark:bg-darkMode dark:border-darkMode-POINT"
         onClick={onClickColorPickerClose} alt="" />
  );
}

export default ColorPickerCloseButton;