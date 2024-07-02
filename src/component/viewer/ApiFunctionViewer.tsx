import ApiFunctionButton from "../button/ApiFunctionButton";

function ApiFunctionViewer () {
  const testFunctionList = ["testF1", "testF2", "testF3", "testF4"];

  return (
    <>
      {testFunctionList.map(functionList=>{ return (<ApiFunctionButton>{functionList}</ApiFunctionButton>); })}
    </>
  );
}

export default ApiFunctionViewer;