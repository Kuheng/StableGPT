import promptColorPickerViewer from './promptColorPickerViewer';
import promptInputForm from '../form/promptInputForm';

function generatePromptViewer (colorPickerState: any, color: any, setColor: any, t: any, inputData: any,
                               onClick_togglePickerState: Function, onClick_submitColor: Function, onChange_inputData: Function) {
  return (
    <div className="w-calc(-20) h-full">
      {promptColorPickerViewer(colorPickerState, color, setColor, t, onClick_togglePickerState, onClick_submitColor)}
      <span className="absolute w-auto h-auto mt-1 ml-32 text-sm text-gray-2">{t("main:promptAlertMessage")}</span>
      {promptInputForm(t, inputData, "image", onClick_togglePickerState, onChange_inputData)}
      {promptInputForm(t, inputData, "negative", onClick_togglePickerState, onChange_inputData)}
    </div>
  );
}

export default generatePromptViewer;