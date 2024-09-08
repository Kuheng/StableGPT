import SeedInputForm from "../form/SeedInputForm";
import GenerateQuantityInputForm from "../form/GenerateQuantityInputForm";

function SettingViewer () {
  return (
    <div className="text-center w-300 h-auto mx-3">
      <SeedInputForm />
      <GenerateQuantityInputForm />
    </div>
  );
}

export default SettingViewer;