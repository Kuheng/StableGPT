function generateSubmitButton (t: any, onClick: Function) {
  return (
    <button onClick={()=>onClick()}
            className="w-300 h-auto border-2 border-gray-1 rounded-sm bg-primary-1 text-xl cursor-pointer select-none">{t("main:generateButton")}</button>
  );
}

export default generateSubmitButton;