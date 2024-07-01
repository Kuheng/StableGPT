import SeedInputForm from "../form/SeedInputForm";
import FormatInputForm from "../form/FormatInputForm";
import AspectInputForm from "../form/AspectInputForm";
import QuantityInputForm from "../form/QuantityInputForm";

function SettingViewer () {
  return (
    <div className="text-center w-300 h-auto mx-3">
      <SeedInputForm />
      <div className="flex w-full h-auto">
        <FormatInputForm />
        <AspectInputForm />
      </div>
      <QuantityInputForm />
    </div>
  );
}

export default SettingViewer;