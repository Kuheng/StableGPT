import ApiFunctionButton from "./button/ApiFunctionButton";
import PromptHistoryButton from "./button/PromptHistoryButton";

function SideMenu () {

  const testFunctionList = ["testF1", "testF2", "testF3", "testF4"];
  const testPromptHistoryList = ["testPrompt1", "testPrompt2", "testPrompt3"];

  return (
    <div className="w-72 h-screen min-w-72 bg-gray-1">
      <div className="text-center w-full h-56 pt-3">
        {testFunctionList.map(functionList=>{ return (<ApiFunctionButton>{functionList}</ApiFunctionButton>); })}
      </div>
      <div className="w-11/12 h-3 ml-3 border-t-2 border-t-black" />
      <div className=" text-startw-full h-auto">
        {testPromptHistoryList.map(promptHistoryList=>{ return (<PromptHistoryButton>{promptHistoryList}</PromptHistoryButton>); })}
      </div>
    </div>
  );
}

export default SideMenu;