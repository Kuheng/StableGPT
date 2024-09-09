import { useRecoilValue } from 'recoil';
import { getGenerateLoadingState } from '../states/generateLoadingState';

import GenerateImageViewer from './viewer/GenerateImageViewer';
import ImageHistoryViewer from './viewer/ImageHistoryViewer';
import PromptModuleViewer from './viewer/PromptModuleViewer';

import LoadingSpinner from './LoadingSpinner';

function MainView () {
  const bIsGeneratedState = useRecoilValue(getGenerateLoadingState);

  return (
    <div className="w-50% h-calc(-20) px-15px bg-white">
      <GenerateImageViewer />
      <ImageHistoryViewer />
      <PromptModuleViewer />

      {(bIsGeneratedState === true)?
      <>
        <div className="fixed justify-center content-center top-0 left-0 w-50% h-full bg-modal z-20" />
        <LoadingSpinner>{''}</LoadingSpinner>
      </>:""}
    </div>
  );
}

export default MainView;