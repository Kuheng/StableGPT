import { useSetRecoilState } from 'recoil';

import { colorPickerState } from '../../manager/colorPickerStateManager';

function ColorPickerCloseButton () {
  const setColorPicker = useSetRecoilState(colorPickerState);

  function onClick () { setColorPicker(""); }

  return (
    <button className="absolute w-6 h-6 -mt-330px ml-200px bg-white border-2 border-black" onClick={onClick}>X</button>
  );
}

export default ColorPickerCloseButton;