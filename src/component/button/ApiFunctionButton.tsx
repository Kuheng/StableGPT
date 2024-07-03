import { ReactNode } from "react";

type propsType = {
  children: ReactNode,
}

function ApiFunctionButton ({children}: propsType) {
  return (
    <button className="w-24 h-20 mt-3 mr-3 border-2 border-gray rounded-md cursor-pointer">{children}</button>
  );
}

export default ApiFunctionButton;