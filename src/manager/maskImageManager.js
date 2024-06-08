import dataManager from "./dataManager";

class MaskImageManager {
    setMaskImage(imageFile) {
        dataManager.setData("MaskImage", imageFile);
    }
    
    getMaskImage() {
        return dataManager.getData("MaskImage");
    }
}

const maskImageManager = new MaskImageManager();
export default maskImageManager;