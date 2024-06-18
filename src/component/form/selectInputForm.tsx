function selectInputForm (item: string, label: string, value: string, mr: string, itemList: Array<string>, onChange: Function) {
  const interval: {[key: string]: string} = {
    auto: "mr-auto",
    0: "mr-0",
  };

  return (
    <div className={`text-start w-49% h-auto ${interval[mr]}`}>
      <p className="w-full h-auto text-lg">{label}</p>
      <select className="w-full h-9 border-b-2 border-gray-2 text-lg outline-none" value={value} onChange={e=>onChange(item, e.target.value)}>
        {itemList.map((format: string)=>
            {return(<option value={format}>{format}</option>)})}
      </select>
    </div>
  );
}

export default selectInputForm;