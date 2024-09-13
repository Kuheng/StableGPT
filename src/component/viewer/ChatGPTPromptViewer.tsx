import OpenApiPromptForm from "../form/OpenApiPromptForm"
import OpenApiPromptSubmitButton from "../button/OpenApiPromptSubmitButton";

function ChatGPTPromptViewer () {
  return (
    <div className="absolute w-calc(-40px) h-70px right-20px bottom-20px border-2 border-black rounded-20px bg-white dark:bg-darkMode-POINT">
      <OpenApiPromptForm />
      <OpenApiPromptSubmitButton />
    </div>
  )
}

export default ChatGPTPromptViewer;