import { useTranslation } from 'react-i18next';
import { useRecoilValue, useRecoilState } from 'recoil';
import { IColor } from 'react-color-palette';

import { generateImageParameterSelector } from '../../manager/generateImageParameterManager';
import { colorPickerState } from '../../manager/colorPickerStateManager';

type propsTypes = {
  color: IColor
}

function ColorPickerSubmitButton ({color}: propsTypes) {
  const { t } = useTranslation();
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);
  const colorPicker = useRecoilValue(colorPickerState);

  function onClick () {
    const value = generateImageParameter[colorPicker] + ((generateImageParameter[colorPicker].length === 0)?"":",") + color.hex;
    setGenerateImageParameter({item: colorPicker, value: value});
  };

  return (
    <button className="w-full border-2 border-gray-2 bg-gray-2 rounded-lg text-lg" onClick={onClick}>{t("main:colorPickerApply")}</button>
  );
}

export default ColorPickerSubmitButton;