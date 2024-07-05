import SeedInputForm from "../form/SeedInputForm";
import FormatInputForm from "../form/FormatInputForm";
import ResolutionRatioInputForm from "../form/ResolutionRatioInputForm";
import GenerateQuantityInputForm from "../form/GenerateQuantityInputForm";

function SettingViewer () {
  return (
    <div className="text-center w-300 h-auto mx-3">
      <SeedInputForm />
      <div className="flex w-full h-auto">
        <FormatInputForm />
        <ResolutionRatioInputForm />
      </div>
      <GenerateQuantityInputForm />
    </div>
  );
}

export default SettingViewer;