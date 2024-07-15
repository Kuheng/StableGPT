import { useTranslation } from 'react-i18next';
import { useRecoilValue, useRecoilState } from 'recoil';
import { IColor } from 'react-color-palette';

import { generateImageParameterSelector } from '../../states/generateImageParameterState';
import { colorPickerState } from '../../states/colorPickerState';

type propsType = {
  color: IColor
}

function ColorPickerSubmitButton ({color}: propsType) {
  const { t } = useTranslation();
  const [generateImageParameter, setGenerateImageParameter] = useRecoilState(generateImageParameterSelector);
  const colorPicker = useRecoilValue(colorPickerState);

  function onClickSubmitColor () {
    const value = generateImageParameter[colorPicker] + ((generateImageParameter[colorPicker].length === 0)?"":",") + color.hex;
    setGenerateImageParameter({key: colorPicker, value: value});
  };

  return (
    <button className="w-full border-2 border-gray-2 bg-gray-2 rounded-lg text-lg" onClick={onClickSubmitColor}>{t("main:colorPickerApply")}</button>
  );
}

export default ColorPickerSubmitButton;