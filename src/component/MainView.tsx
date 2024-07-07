import ApiKeyInputForm from './form/ApiKeyInputForm';
import ToggleLocalesButton from './button/ToggleLocalesButton';
import GenerateImageViewer from './viewer/GenerateImageViewer';
import ImageHistoryViewer from './viewer/ImageHistoryViewer';
import PromptViewer from './viewer/PromptViewer';
import SettingViewer from './viewer/SettingViewer';
import GenerateSubmitButton from './button/GenerateSubmitButton';

function MainView () {
  return (
    <div className="w-main h-calc(-20) min-w-75vw mt-1 ml-5 bg-white">
      <div className="flex items-center w-640 h-20 ml-auto">
        <ApiKeyInputForm />
        <ToggleLocalesButton />
      </div>
      <div className="text-centerw-full h-700">
        <GenerateImageViewer />
      </div>
      <ImageHistoryViewer />
      <div className="flex w-full h-auto min-w-1024 mt-1">
        <PromptViewer />
        <SettingViewer />
        <GenerateSubmitButton />
      </div>
    </div>
  );
}

export default MainView;