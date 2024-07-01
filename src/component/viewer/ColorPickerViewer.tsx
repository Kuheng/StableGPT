import { useRecoilValue } from 'recoil';
import { useColor } from 'react-color-palette';
import { ColorPicker } from 'react-color-palette';
import "react-color-palette/css";

import { colorPickerState } from '../../state';

import ColorPickerSubmitButton from '../button/ColorPickerSubmitButton';
import ColorPickerCloseButton from '../button/ColorPickerCloseButton';

function ColorPickerViewer () {
  const colorPicker = useRecoilValue(colorPickerState);
  const [color, setColor] = useColor("#FF0000");

  return (
    <>
      {colorPicker !== ""?
      <div className="absolute w-auto -mt-48 ml-80 rounded-xl">
        <ColorPicker color={color} onChange={setColor} hideAlpha={true} hideInput={["rgb", "hsv"]} />
        <ColorPickerCloseButton />
        <ColorPickerSubmitButton color={color} />
      </div>:""}
    </>
  );
}

export default ColorPickerViewer;