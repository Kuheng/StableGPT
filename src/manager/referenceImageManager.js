import dataManager from "./dataManager";

class ReferenceImageManager {
    dataKey = "ReferenceImageFiles";

    setReferenceImages(imageFiles) {
        dataManager.setData(this.dataKey, imageFiles);
    }

    getReferenceImages() {
        return dataManager.getData(this.dataKey);
    }
}

const referenceImageManager = new ReferenceImageManager();
export default referenceImageManager;