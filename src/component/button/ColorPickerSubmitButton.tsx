import { useTranslation } from 'react-i18next';
import { useRecoilValue, useRecoilState } from 'recoil';
import { IColor } from 'react-color-palette';

import { inputDataSelector, colorPickerState } from '../../state';

type propsTypes = {
  color: IColor
}

function ColorPickerSubmitButton ({color}: propsTypes) {
  const { t } = useTranslation();
  const [inputData, setInputData] = useRecoilState(inputDataSelector);
  const colorPicker = useRecoilValue(colorPickerState);

  const onClick_submitColor = () => {
    const value = inputData[colorPicker] + ((inputData[colorPicker].length === 0)?"":",") + color.hex;
    setInputData({item: colorPicker, value: value});
  };

  return (
    <button className="w-full border-2 border-gray-2 bg-gray-2 rounded-lg text-lg" onClick={()=>onClick_submitColor()}>{t("main:colorPickerApply")}</button>
  );
}

export default ColorPickerSubmitButton;