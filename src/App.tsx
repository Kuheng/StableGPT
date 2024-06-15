import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ColorPicker, useColor } from 'react-color-palette';
import "react-color-palette/css";

import logo from './logo.svg';

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

  const onChange_inputData = (item:string, data:string) => {
    inputData[item] = data;
    setInputData(inputData);
    setRender(!render);
  };

  return (
    <div className="flex w-screen h-screen min-w-75vw">
      <div className="w-72 h-screen min-w-72 bg-gray-1">
        <div className="text-center w-full h-56 pt-3">
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-pointer"></button>
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-pointer"></button>
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-pointer"></button>
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-pointer"></button>
        </div>
        <div className=" text-startw-full h-auto">
          <div className="w-11/12 h-3 ml-3 border-t-2 border-t-black" />
          <div className="w-10/12 h-8 mt-7 ml-4 border-b-2 border-b-gray-2">
            <p className="w-auto h-auto text-md cursor-pointer select-none">dd</p>
            <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-pointer select-none" alt="" />
          </div>
          <div className="w-10/12 h-8 mt-7 ml-4 border-b-2 border-b-gray-2">
            <p className="w-auto h-auto text-md cursor-pointer select-none">dd</p>
            <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-pointer select-none" alt="" />
          </div>
          <div className="w-10/12 h-8 mt-7 ml-4 border-b-2 border-b-gray-2">
            <p className="w-auto h-auto text-md cursor-pointer select-none">dd</p>
            <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-pointer select-none" alt="" />
          </div>
        </div>
      </div>
      <div className="w-main h-calc(-20) min-w-75vw mt-1 ml-5 bg-white">
        <div className="flex items-center w-640 h-20 ml-auto">
          <div className="flex items-center w-560 h-12">
            <p className="text-center w-24 h-auto text-xl">{t("main:apiKey")}</p>
            <input type="text" value={inputData.apiKey} onChange={e=>onChange_inputData("apiKey", e.target.value)}
                  className="w-440 h-11 pl-1 border-b-2 border-b-black text-lg outline-none" placeholder={"* " + t("main:apiKeyInputPlaceholder")} />
          </div>
          <p className="w-auto h-auto text-xl cursor-pointer select-none" onClick={()=>onClick_toggleLocales()}>{t("main:languageChangeLabel")}</p>
        </div>
        <div className="text-centerw-full h-700">
          <img src={logo} className="w-11/12 h-full" alt="" />
        </div>
        <div className="flex w-full h-200 mt-28">
          <div className="w-200 h-200 mr-5">
            <img src={logo} className="w-200 h-200" alt="" />
            <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-pointer" alt="" />
          </div>
          <div className="w-200 h-200 mr-5">
            <img src={logo} className="w-200 h-200" alt="" />
            <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-pointer" alt="" />
          </div>
          <div className="w-200 h-200 mr-5">
            <img src={logo} className="w-200 h-200" alt="" />
            <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-pointer" alt="" />
          </div>
        </div>
        <div className="flex w-full h-auto min-w-1024 mt-1">
          <div className="w-calc(-20) h-full">
            {colorPickerState !== ""?
            <div className="absolute w-auto -mt-48 ml-80 rounded-xl">
              <ColorPicker color={color} onChange={setColor} hideAlpha={true} hideInput={["rgb", "hsv"]} />
              <button className="absolute w-6 h-6 -mt-330px ml-200px bg-white border-2 border-black" onClick={()=>onClick_togglePickerState("")}>X</button>
              <button className="w-full border-2 border-gray-2 bg-gray-2 rounded-lg text-lg" onClick={onClick_submitColor}>{t("main:colorPickerApply")}</button>
            </div>:""}
            <p className="w-auto h-auto text-lg">* {t("main:imagePrompt")}
              <span className="w-auto h-auto ml-2 text-sm text-gray-2">{t("main:promptAlertMessage")}</span>
              <img src={logo} className="absoulte w-10 h-10 -mt-10 ml-80 cursor-pointer" onClick={()=>onClick_togglePickerState("imagePrompt")} alt="" />
            </p>
            <textarea value={inputData.imagePrompt} onChange={e=>onChange_inputData("imagePrompt", e.target.value)}
                      className="w-calc(-20) h-70px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" />
            <p className="w-auto h-auto text-lg">{t("main:negativePrompt")}
              <img src={logo} className="absoulte w-10 h-10 -mt-10 ml-80 cursor-pointer" onClick={()=>onClick_togglePickerState("negativePrompt")} alt="" />
            </p>
            <textarea value={inputData.negativePrompt} onChange={e=>onChange_inputData("negativePrompt", e.target.value)}
                      className="w-calc(-20) h-70px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" />
          </div>
          <div className="text-center w-300 h-auto mx-3">
            <div className="w-full h-18 text-start">
              <p className="w-auto h-auto text-lg">{t("main:seedLabel")}</p>
              <input type="range" value={inputData.seed} onChange={e=>{onChange_inputData("seed", e.target.value)}} min={0} max={4294967294}
                      className="w-full h-auto" />
              <p className="w-full h-full text-center text-md font-bold">{inputData.seed}</p>
            </div>
            <div className="flex w-full h-auto">
              <div className="text-start w-49% h-auto mr-auto">
                <p className="w-full h-auto text-lg">{t("main:formatLabel")}</p>
                <select className="w-full h-9 border-b-2 border-gray-2 text-lg outline-none" value={inputData.format} onChange={e=>onChange_inputData("format", e.target.value)}>
                  <option value="none">none</option>
                  <option value="png" selected>png</option>
                  <option value="jpg">jpg</option>
                </select>
              </div>
              <div className="text-start w-49% h-auto">
                <p className="w-full h-auto text-lg">{t("main:aspectLabel")}</p>
                <select className="w-full h-9 border-b-2 border-gray-2  text-lg outline-none" value={inputData.aspect} onChange={e=>onChange_inputData("aspect", e.target.value)}>
                  <option value="none">none</option>
                  <option value="1:1" selected>1:1</option>
                  <option value="4:3">4:3</option>
                  <option value="16:9">16:9</option>
                  <option value="21:9">21:9</option>
                  <option value="3:4">3:4</option>
                  <option value="9:16">9:16</option>
                  <option value="9:21">9:21</option>
                </select>
              </div>
            </div>
            <div className="text-start w-full h-auto">
              <p className="w-full h-auto text-lg">{t("main:quantity")}</p>
              <input type="number" value={inputData.quantity} onChange={e=>onChange_inputData("quantity", e.target.value)}
                      className="w-full h-9 pl-1 border-b-2 border-gray-2 text-md outline-none" />
            </div>
          </div>
          <button className="w-300 h-auto border-2 border-gray-1 rounded-sm bg-primary-1 text-xl cursor-pointer select-none">{t("main:generateButton")}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
