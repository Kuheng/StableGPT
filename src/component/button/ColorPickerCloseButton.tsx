import { useSetRecoilState } from 'recoil';

import { colorPickerState } from '../../states/colorPickerState';

function ColorPickerCloseButton () {
  const setColorPicker = useSetRecoilState(colorPickerState);

  function onClickColorPickerClose () { setColorPicker(""); }

  return (
    <button className="absolute w-6 h-6 -mt-330px ml-200px bg-white border-2 border-black" onClick={onClickColorPickerClose}>X</button>
  );
}

export default ColorPickerCloseButton;