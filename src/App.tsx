import SideMenu from './component/SideMenu';
import TopNavigationBar from './component/TopNavigationBar';
import MainView from './component/MainView';
import ChatGPTView from './component/ChatGPTView';

function App() {
  if (localStorage.getItem("PROMPT_HISTORY") === null) localStorage.setItem("PROMPT_HISTORY", JSON.stringify([]));

  return (
    <div>
      <TopNavigationBar />
      <div className="flex w-full h-vh dark:bg-darkMode">
        <MainView />
        <ChatGPTView />
      </div>
    </div>
  );
}

export default App;
