import generateImageHistoryButton from "../button/generateImageHistoryButton";

function generateImageHistoryViewer () {
  return (
    <div className="flex w-full h-200 mt-28">
      {generateImageHistoryButton()}
      {generateImageHistoryButton()}
      {generateImageHistoryButton()}
    </div>
  );
}

export default generateImageHistoryViewer;