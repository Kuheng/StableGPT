import seedInputForm from "../form/seedInputForm";
import selectInputForm from "../form/selectInputForm";
import quantityInputForm from "../form/quantityInputForm";

function generateSettingViewer (inputData:any, t:any, onChange:Function) {
  const formatList = ["none", "png", "jpg"];
  const aspectList = ["none", "1:1", "4:3", "16:9", "21:9", "3:4", "9:16", "9:21"];

  return (
    <div className="text-center w-300 h-auto mx-3">
      {seedInputForm(inputData.seed, t, onChange)}
      <div className="flex w-full h-auto">
        {selectInputForm("format", t("main:formatLabel"), inputData.format, "auto", formatList, onChange)}
        {selectInputForm("aspect", t("main:aspectLabel"), inputData.aspect, "0", aspectList, onChange)}
      </div>
      {quantityInputForm(inputData.quantity, t, onChange)}
    </div>
  );
}

export default generateSettingViewer;