import ChatGPTAIMessageViewer from "./ChatGPTAIMessageViewer";
import ChatGPTUserMessageViewer from "./ChatGPTUserMessageViewer";

function ChatGPTChatingLogViewer () {
  return (
    <div className="absolute w-calc(-20) h-auto max-h-calc(-150px) left-10px bottom-100px overflow-y-scroll">
      <ChatGPTAIMessageViewer />
      <ChatGPTUserMessageViewer />
    </div>
  )
}

export default ChatGPTChatingLogViewer;