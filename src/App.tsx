import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useColor } from 'react-color-palette';
import "react-color-palette/css";

import openAiApiHandler from './handler/api/openAiApiHandler';
import stableDiffusionApiHandler from './handler/api/stableDiffusionApiHandler';

import sideMenu from './component/sideMenu';
import mainView from './component/mainView';

function App() {
  type inputDataType = {
    [index:string]:string|number,
    apiKey: string,
    imagePrompt: string,
    negativePrompt: string,
    seed: number,
    format: string,
    aspect: string,
    quantity: number,
  };

  const { t, i18n } = useTranslation();
  const [color, setColor] = useColor("#FF0000");
  const [colorPickerState, setColorPickerState] = useState("");
  const [inputData, setInputData] = useState<inputDataType>({
    apiKey: "",
    imagePrompt: "",
    negativePrompt: "",
    seed: 0,
    format: "png",
    aspect: "1:1",
    quantity: 1,
  });

  const [render, setRender] = useState(true)

  const onClick_toggleLocales = useCallback(() => {
    (i18n.language === 'ko-KR')? i18n.changeLanguage('en-US'):i18n.changeLanguage('ko-KR');
  },[i18n]
  );

  const onClick_togglePickerState = (item:string) => {
    setColorPickerState(item);
  };

  const onClick_submitColor = () => {
    onChange_inputData(colorPickerState, inputData[colorPickerState] + "," + color.hex);
  };

  const onClick_submitGeneration = () => {
    console.log(inputData);
  };

  const onChange_inputData = (item:string, data:string) => {
    inputData[item] = data;
    setInputData(inputData);
    setRender(!render);
  };

  return (
    <div className="flex w-screen h-screen min-w-75vw">
      {sideMenu()}
      {mainView(t, inputData, onChange_inputData, onClick_toggleLocales, colorPickerState, color, setColor, onClick_togglePickerState,
                onClick_submitColor, onClick_submitGeneration)}
    </div>
  );
}

export default App;
