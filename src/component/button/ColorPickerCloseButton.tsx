import { useSetRecoilState } from 'recoil';

import { colorPickerState } from '../../state';

function ColorPickerCloseButton () {
  const setColorPicker = useSetRecoilState(colorPickerState);

  return (
    <button className="absolute w-6 h-6 -mt-330px ml-200px bg-white border-2 border-black" onClick={()=>setColorPicker("")}>X</button>
  );
}

export default ColorPickerCloseButton;