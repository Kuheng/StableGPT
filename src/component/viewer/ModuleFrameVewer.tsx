import { ReactNode } from 'react';

type ModuleFrameViewerParams = {
  frameTitle: string,
  children: ReactNode,
  justify?: string,
  height?: string,
  padding?: string,
  paddingTop?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  paddingRight?: string,
}

function ModuleFrameViewer ({frameTitle, children, justify="start", height="auto", padding="auto", paddingTop="auto", paddingBottom="auto",
    paddingLeft="auto", paddingRight="auto"}: ModuleFrameViewerParams) {

  return (
    <div className="flex relative content-center mb-20px w-full h-700 border-1 border-black rounded-20px dark:bg-darkMode dark:border-white"
        style={{justifyContent: justify, height: height, padding: padding, paddingTop: paddingTop,
        paddingBottom: paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight}}>
      <p className="absolute -top-12px left-30px text-md bg-white dark:bg-darkMode dark:text-white">{frameTitle}</p>
      {children}
    </div>
  )
}

export default ModuleFrameViewer;