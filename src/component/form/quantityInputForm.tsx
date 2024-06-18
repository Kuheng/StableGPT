function quantityInputForm (quantity: number, t:any, onChange: Function) {
  return (
    <div className="text-start w-full h-auto">
        <p className="w-full h-auto text-lg">{t("main:quantity")}</p>
        <input type="number" value={quantity} onChange={e=>onChange("quantity", e.target.value)}
               className="w-full h-9 pl-1 border-b-2 border-gray-2 text-md outline-none" />
      </div>
  );
}

export default quantityInputForm;