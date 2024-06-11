import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import logo from './logo.svg';

function App() {
  const { t, i18n } = useTranslation();

  const onClick_toggleLocales = useCallback(() => {
    (i18n.language === 'ko-KR')? i18n.changeLanguage('en-US'):i18n.changeLanguage('ko-KR');
  },[i18n]
  );

  return (
    <div className="flex w-screen h-screen min-w-75vw">
      <div className="w-72 h-screen min-w-72 bg-gray-1">
        <div className="text-center w-full h-56 pt-3">
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-p"></button>
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-p"></button>
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-p"></button>
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-p"></button>
        </div>
        <div className=" text-startw-full h-auto">
          <div className="w-11/12 h-3 ml-3 border-t-2 border-t-black" />
          <div className="w-10/12 h-8 mt-7 ml-4 border-b-2 border-b-gray-2">
            <p className="w-auto h-auto text-md cursor-p">dd</p>
            <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-p" alt="" />
          </div>
          <div className="w-10/12 h-8 mt-7 ml-4 border-b-2 border-b-gray-2">
            <p className="w-auto h-auto text-md cursor-p">dd</p>
            <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-p" alt="" />
          </div>
          <div className="w-10/12 h-8 mt-7 ml-4 border-b-2 border-b-gray-2">
            <p className="w-auto h-auto text-md cursor-p">dd</p>
            <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-p" alt="" />
          </div>
        </div>
      </div>
      <div className="w-main h-calc(-20) min-w-75vw mt-1 ml-5 bg-white">
        <div className="flex items-center w-640 h-20 ml-auto">
          <div className="flex items-center w-560 h-12">
            <p className="text-center w-24 h-auto text-xl">{t("main:apiKey")}</p>
            <input type="text" className="w-440 h-11 pl-1 border-b-2 border-b-black text-lg outline-none" placeholder={"* " + t("main:apiKeyInputPlaceholder")} />
          </div>
          <p className="w-auto h-auto text-xl cursor-pointer select-none" onClick={()=>onClick_toggleLocales()}>{t("main:languageChangeLabel")}</p>
        </div>
        <div className="text-centerw-full h-700">
          <img src={logo} className="w-11/12 h-full" alt="" />
        </div>
        <div className="flex w-full h-200 mt-36">
          <div className="w-200 h-200 mr-5">
            <img src={logo} className="w-200 h-200" alt="" />
            <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-p" alt="" />
          </div>
          <div className="w-200 h-200 mr-5">
            <img src={logo} className="w-200 h-200" alt="" />
            <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-p" alt="" />
          </div>
          <div className="w-200 h-200 mr-5">
            <img src={logo} className="w-200 h-200" alt="" />
            <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-p" alt="" />
          </div>
        </div>
        <div className="flex w-full h-auto min-w-1024 mt-3">
          <div className="w-calc(-20) h-full">
            <p className="w-auto h-auto text-lg">* {t("main:imagePrompt")}
              <span className="w-auto h-auto ml-10 text-sm text-gray-2">{t("main:promptAlertMessage")}</span></p>
            <textarea className="w-calc(-20) h-54px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" />
            <p className="w-auto h-auto text-lg">{t("main:negativePrompt")}</p>
            <textarea className="w-calc(-20) h-54px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" />
          </div>
          <div className="text-center w-300 h-auto mx-3">
            <div className="w-full h-14 text-start">
              <p className="w-auto h-auto text-lg">{t("main:seedLabel")}</p>
              <input type="range" value="" onChange={()=>{}} className="w-full h-auto" />
            </div>
            <div className="flex w-full h-auto">
              <div className="text-start w-49% h-auto mr-auto">
                <p className="w-full h-auto text-lg">{t("main:formatLabel")}</p>
                <select className="w-full h-9 text-lg outline-none">
                  <option value="none">none</option>
                  <option value="png" selected>png</option>
                  <option value="jpg">jpg</option>
                </select>
              </div>
              <div className="text-start w-49% h-auto">
                <p className="w-full h-auto text-lg">{t("main:aspectLabel")}</p>
                <select className="w-full h-9 text-lg outline-none">
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
          </div>
          <button className="w-300 h-auto border-2 border-gray-1 rounded-sm bg-primary-1 text-xl cursor-p">{t("main:generateButton")}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
