import ApiFunctionViewer from "./viewer/ApiFunctionViewer";
import PromptHistoryViewer from "./viewer/PromptHistoryViewer";

function SideMenu () {
  return (
    <div className="w-72 h-screen min-w-72 bg-gray-1">
      <div className="text-center w-full h-56 pt-3">
        <ApiFunctionViewer />
      </div>
      <div className="w-11/12 h-3 ml-3 border-t-2 border-t-black" />
      <div className="text-startw-full h-auto">
        <PromptHistoryViewer />
      </div>
    </div>
  );
}

export default SideMenu;