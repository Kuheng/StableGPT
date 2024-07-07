type propsType = {
  functionLabel: string,
}

function ApiFunctionButton ({functionLabel}: propsType) {
  return (
    <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-pointer">{functionLabel}</button>
  );
}

export default ApiFunctionButton;