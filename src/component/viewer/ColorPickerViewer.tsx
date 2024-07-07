import { useColor } from 'react-color-palette';
import { ColorPicker } from 'react-color-palette';
import "react-color-palette/css";

import ColorPickerSubmitButton from '../button/ColorPickerSubmitButton';
import ColorPickerCloseButton from '../button/ColorPickerCloseButton';

function ColorPickerViewer () {
  const [color, setColor] = useColor("#FF0000");

  return (
    <>
      <div className="absolute w-auto -mt-48 ml-80 rounded-xl">
        <ColorPicker color={color} onChange={setColor} hideAlpha={true} hideInput={["rgb", "hsv"]} />
        <ColorPickerCloseButton />
        <ColorPickerSubmitButton color={color} />
      </div>
    </>
  );
}

export default ColorPickerViewer;