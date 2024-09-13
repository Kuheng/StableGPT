import optionIcon from "./../../assets/image/optionIcon.png"
import crossIcon from "./../../assets/image/crossIcon.png"

type ViewerOptionButtonParams = {
    children: any,
    optionTitle: string,
    viewState: boolean,
    onClick:()=>void,
  }

function ViewerOptionButton ({children, optionTitle, viewState, onClick}: ViewerOptionButtonParams) {
    return (
    <>
      {viewState?
          <img src={optionIcon} className="absolute w-30px h-30px top-5px right-5px rounded-xl opacity-100 bg-white cursor-pointer z-10 dark:bg-darkMode-POINT"
               onClick={onClick} alt="" />
         :<img src={optionIcon} className="absolute w-30px h-30px top-5px right-5px rounded-xl opacity-50 bg-white hover:opacity-100 cursor-pointer z-10
                                         dark:bg-darkMode dark:hover:bg-darkMode-POINT"
               onClick={onClick} alt="" />}
      {viewState?<div className="absolute w-200px h-auto top-40px right-5px border-1 border-gray-4 rounded-5px bg-white z-10
                               dark:bg-darkMode dark:border-darkMode-POINT">
        <p className="text-lg w-auto h-auto pt-1 pl-1 border-b-1 border-black dark:border-gray-4 dark:text-darkMode-POINT">{optionTitle}</p>
        <img src={crossIcon} className="absolute w-30px h-30px top-0 right-0 cursor-pointer" onClick={onClick} alt="" />
        <div className="w-full h-auto mt-2 px-5px">{children}</div>
      </div>:''}
    </>);
};

export default ViewerOptionButton;