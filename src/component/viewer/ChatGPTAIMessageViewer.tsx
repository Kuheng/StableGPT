import chatGPTLogo from "./../../assets/image/chatGPTlogo.png"

function ChatGPTAIMessageViewer () {
  return (
    <div className="relative w-75% h-auto ">
      <img src={chatGPTLogo} className="w-80px h-80px p-10px border-1 border-black rounded-50% dark:bg-darkMode-POINT dark:border-darkMode-POINT" alt="" />
      <div className="absolute w-55px h-6 border-24 top-50px left-80px border-t-gray-9 border-x-transparent border-b-transparent rounded-10px dark:border-t-gray" />
      <div className="relative w-75% h-auto -top-40px left-100px p-15px rounded-20px bg-gray-9 dark:bg-gray">
        <p className="text-black text-xl dark:text-white">테스트용 문구입니다.</p>
      </div>
    </div>
  );
}

export default ChatGPTAIMessageViewer;