function seedInputForm (seed: number, t: any, onChange: Function) {
  return (
    <div className="w-full h-18 text-start">
      <p className="w-auto h-auto text-lg">{t("main:seedLabel")}</p>
      <input type="range" value={seed} onChange={e=>{onChange("seed", e.target.value)}} min={0} max={4294967294}
             className="w-full h-auto" />
      <p className="w-full h-full text-center text-md font-bold">{seed}</p>
    </div>
  );
}

export default seedInputForm;