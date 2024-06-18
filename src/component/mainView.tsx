import apiKeyInputForm from './form/apiKeyInputForm';
import toggleLocalesButton from './button/toggleLocalesButton';
import generateImageViewer from './viewer/generateImageViewer';
import generateImageHistoryViewer from './viewer/generateImageHistoryViewer';
import generatePromptViewer from './viewer/generateSubmitViewer';

function mainView (t: any, inputData: any, onChange_inputData: Function, onClick_toggleLocales: Function, colorPickerState: any, color: any, setColor: any,
                   onClick_togglePickerState: Function, onClick_submitColor: Function, onClick_submitGeneration: Function) {
  return (
    <div className="w-main h-calc(-20) min-w-75vw mt-1 ml-5 bg-white">
      <div className="flex items-center w-640 h-20 ml-auto">
        {apiKeyInputForm(t, inputData.apiKey, onChange_inputData)}
        {toggleLocalesButton (onClick_toggleLocales)}
      </div>
      <div className="text-centerw-full h-700">
        {generateImageViewer()}
      </div>
      {generateImageHistoryViewer()}
      {generatePromptViewer(colorPickerState, color, setColor, onClick_togglePickerState, onClick_submitColor, t, inputData, onChange_inputData, onClick_submitGeneration)}
    </div>
  );
}

export default mainView;