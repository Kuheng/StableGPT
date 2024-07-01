import ImageHistoryButton from "../button/ImageHistoryButton";

function ImageHistoryViewer () {
  return (
    <div className="flex w-full h-200 mt-28">
      <ImageHistoryButton />
      <ImageHistoryButton />
      <ImageHistoryButton />
    </div>
  );
}

export default ImageHistoryViewer;