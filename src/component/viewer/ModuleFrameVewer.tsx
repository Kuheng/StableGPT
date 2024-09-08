import { ReactNode, Children } from 'react';

import ViewerOptionButton from './../button/ViewOptionButton';

type ModuleFrameViewerParams = {
  frameTitle: string,
  optionTitle: string,
  children: ReactNode,
  viewState: boolean,
  onClick:()=>void,
  justify?: string,
  height?: string,
  padding?: string,
  paddingTop?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  paddingRight?: string,
}

function ModuleFrameViewer ({frameTitle, optionTitle, children, viewState, onClick, justify="start", height="auto", padding="auto", paddingTop="auto", paddingBottom="auto",
    paddingLeft="auto", paddingRight="auto"}: ModuleFrameViewerParams) {
  const child = Children.toArray(children);

  return (
    <div className="flex relative content-center mb-20px w-full h-700 border-1 border-black rounded-20px"
        style={{justifyContent: justify, height: height, padding: padding, paddingTop: paddingTop,
        paddingBottom: paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight}}>
      <p className="absolute -top-18px left-30px p-5px text-md bg-white">{frameTitle}</p>
      <ViewerOptionButton optionTitle={optionTitle} viewState={viewState} onClick={onClick}>
        {child[0]}
      </ViewerOptionButton>
      {child[1]}
    </div>
  )
}

export default ModuleFrameViewer;