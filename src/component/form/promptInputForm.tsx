import logo from "./../../logo.svg"

function promptInputForm (t:any, inputData:any, type:string, onClick:Function, onChange:Function) {
  return (
    <>
      <p className="w-auto h-auto text-">{t("main:"+type+"Prompt")}
        <img src={logo} className="absoulte w-10 h-10 -mt-8 ml-80 cursor-pointer" onClick={()=>onClick(type+"Prompt")} alt="" />
      </p>
      <textarea value={inputData[type+"Prompt"]} onChange={e=>onChange(type+"Prompt", e.target.value)}
                className="w-calc(-20) h-70px border-2 border-gray-1 rounded-md p-2 text-lg outline-none resize-none" />
    </>
  );
}

export default promptInputForm