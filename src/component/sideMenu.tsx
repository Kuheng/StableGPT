import apiFunctionButton from "./button/apiFunctionButton";
import promptHistoryButton from "./button/promptHistoryButton";

function sideMenu () {
  return (
    <div className="w-72 h-screen min-w-72 bg-gray-1">
      <div className="text-center w-full h-56 pt-3">
        {apiFunctionButton("기능명")}
        {apiFunctionButton("기능명")}
        {apiFunctionButton("기능명")}
        {apiFunctionButton("기능명")}
      </div>
      <div className=" text-startw-full h-auto">
        <div className="w-11/12 h-3 ml-3 border-t-2 border-t-black" />
        {promptHistoryButton("프롬프트 기록 1")}
        {promptHistoryButton("프롬프트 기록 2")}
        {promptHistoryButton("프롬프트 기록 3")}
      </div>
    </div>
  );
}

export default sideMenu;