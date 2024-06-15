import dataManager from "./dataManager";

class MaskImageManager {
    setMaskImage(imageFile: File): void {
        dataManager.setData("MaskImage", imageFile);
    }
    
    getMaskImage(): File {
        return dataManager.getData("MaskImage");
    }
}

const maskImageManager = new MaskImageManager();
export default maskImageManager;
