import SideMenu from './component/SideMenu';
import MainView from './component/MainView';

function App() {
  return (
    <div className="flex w-screen h-screen min-w-75vw">
      <SideMenu />
      <MainView />
      </div>
  );
}

export default App;
