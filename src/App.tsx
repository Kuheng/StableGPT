import SideMenu from './component/SideMenu';
import MainView from './component/MainView';

function App() {
  if (localStorage.getItem("PROMPT_HISTORY") === null) localStorage.setItem("PROMPT_HISTORY", JSON.stringify([]));

  return (
    <div className="flex w-screen h-screen min-w-75vw">
      <SideMenu />
      <MainView />
      </div>
  );
}

export default App;
