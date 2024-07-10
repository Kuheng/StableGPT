import { useRecoilValue } from 'recoil';

import { getGenerateState } from '../states/generateImageState';

import ApiKeyInputForm from './form/ApiKeyInputForm';
import ToggleLocalesButton from './button/ToggleLocalesButton';
import GenerateImageViewer from './viewer/GenerateImageViewer';
import ImageHistoryViewer from './viewer/ImageHistoryViewer';
import PromptViewer from './viewer/PromptViewer';
import SettingViewer from './viewer/SettingViewer';
import GenerateSubmitButton from './button/GenerateSubmitButton';
import LoadingSpinner from './LoadingSpinner';

function MainView () {
  const generateState = useRecoilValue(getGenerateState);

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
      {(generateState.loadingState === true)?
      <>
        <div className="fixed top-0 left-0 w-full h-full bg-modal" />
        <LoadingSpinner>{''}</LoadingSpinner>
      </>:""}
    </div>
  );
}

export default MainView;