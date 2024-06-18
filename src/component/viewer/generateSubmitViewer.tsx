import generatePromptViewer from './generatePromptViewer';
import generateSettingViewer from './generateSettingViewer';
import generateSubmitButton from '../button/generateSubmitButton';

function generateSubmitViewer (colorPickerState: any, color: any, setColor: any, onClick_togglePickerState: Function, onClick_submitColor: Function, t: any,
                               inputData: any, onChange_inputData: Function, onClick_submitGeneration: Function) {
  return (
    <div className="flex w-full h-auto min-w-1024 mt-1">
      {generatePromptViewer(colorPickerState, color, setColor, t, inputData, onClick_togglePickerState, onClick_submitColor, onChange_inputData)}
      {generateSettingViewer(inputData, t, onChange_inputData)}
      {generateSubmitButton(t, onClick_submitGeneration)}
    </div>
  );
}

export default generateSubmitViewer;