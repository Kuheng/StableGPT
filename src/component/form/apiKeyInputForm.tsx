function apiKeyInputForm (t:any, apiKey:string, onChange: Function) {
  return (
    <div className="flex items-center w-560 h-12">
      <p className="text-center w-24 h-auto text-xl">{t("main:apiKey")}</p>
      <input type="text" value={apiKey} onChange={e=>onChange("apiKey", e.target.value)}
             className="w-440 h-11 pl-1 border-b-2 border-b-black text-lg outline-none" placeholder={"* " + t("main:apiKeyInputPlaceholder")} />
    </div>
  );
}

export default apiKeyInputForm;