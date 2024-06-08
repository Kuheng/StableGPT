import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex w-screen h-screen min-w-75vw">
      <div className="w-72 h-screen min-w-72 bg-gray-1">
        <div className="text-center w-full h-56 pt-3">
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-p"></button>
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-p"></button>
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-p"></button>
          <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-p"></button>
        </div>
        <div className=" text-startw-full h-auto">
          <div className="w-11/12 h-3 ml-3 border-t-2 border-t-black" />
          <div className="w-10/12 h-8 mt-7 ml-4 border-b-2 border-b-gray-2">
            <p className="w-auto h-auto text-md cursor-p">dd</p>
            <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-p" alt="" />
          </div>
          <div className="w-10/12 h-8 mt-7 ml-4 border-b-2 border-b-gray-2">
            <p className="w-auto h-auto text-md cursor-p">dd</p>
            <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-p" alt="" />
          </div>
          <div className="w-10/12 h-8 mt-7 ml-4 border-b-2 border-b-gray-2">
            <p className="w-auto h-auto text-md cursor-p">dd</p>
            <img src={logo} className="relative w-10 h-10 -top-7 left-56 cursor-p" alt="" />
          </div>
        </div>
      </div>
      <div className="w-main h-calc(-20) min-w-75vw mt-5 ml-5 bg-white">
        <div className="flex items-center w-620 h-12 ml-auto">
          <p className="text-center w-24 h-auto text-xl">API키</p>
          <input type="text" className="w-440 h-11 pl-1 border-b-2 border-b-black text-lg outline-none" placeholder="* API 키 입력 필수" />
        </div>
        <div className="text-centerw-full h-700">
          <img src={logo} className="w-11/12 h-full" alt="" />
        </div>
        <div className="flex w-full h-200 mt-36">
          <div className="w-200 h-200 mr-5">
            <img src={logo} className="w-200 h-200" alt="" />
            <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-p" alt="" />
          </div>
          <div className="w-200 h-200 mr-5">
            <img src={logo} className="w-200 h-200" alt="" />
            <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-p" alt="" />
          </div>
          <div className="w-200 h-200 mr-5">
            <img src={logo} className="w-200 h-200" alt="" />
            <img src={logo} className="relative w-14 h-14 -top-48 left-36 cursor-p" alt="" />
          </div>
        </div>
        <div className="flex w-full h-auto min-w-1024 mt-3">
          <div className="w-calc(-20) h-full">
            <p className="w-auto h-auto text-lg">제시어 프롬프트</p>
            <textarea className="w-calc(-20) h-54px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" placeholder="제시어의 구분은 ,로 구분합니다." />
            <p className="w-auto h-auto text-lg">제외 항목 프롬프트</p>
            <textarea className="w-calc(-20) h-54px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" placeholder="제시어의 구분은 ,로 구분합니다." />
          </div>
          <div className="text-center w-300 h-auto mx-3">
            <div className="w-full h-14 text-start">
              <p className="w-auto h-auto text-lg">시드</p>
              <input type="range" className="w-full h-auto" />
            </div>
            <div className="flex w-full h-auto">
              <div className="text-start w-49% h-auto mr-auto">
                <p className="w-full h-auto text-lg">확장자</p>
                <select className="w-full h-9 text-lg outline-none">
                  <option value="">test</option>
                  <option value="">test</option>
                  <option value="">test</option>
                </select>
              </div>
              <div className="text-start w-49% h-auto">
                <p className="w-full h-auto text-lg">사이즈</p>
                <select className="w-full h-9 text-lg outline-none">
                  <option value="">test</option>
                  <option value="">test</option>
                  <option value="">test</option>
                </select>
              </div>
            </div>
          </div>
          <button className="w-300 h-auto border-2 border-gray-1 rounded-sm bg-primary-1 cursor-p">실행</button>
        </div>
      </div>
    </div>
  );
}

export default App;
