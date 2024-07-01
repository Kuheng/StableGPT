import { useTranslation } from 'react-i18next';

import ColorPickerViewer from './ColorPickerViewer';
import ImagePromptForm from '../form/ImagePromptForm';
import NegativePromptForm from '../form/NegativePromptForm';

function PromptViewer () {
  const { t } = useTranslation();

  return (
    <div className="w-calc(-20) h-full">
      <ColorPickerViewer />
      <span className="absolute w-auto h-auto mt-1 ml-36 text-sm text-gray-2">{t("main:promptAlertMessage")}</span>
      <ImagePromptForm />
      <NegativePromptForm />
    </div>
  );
}

export default PromptViewer;