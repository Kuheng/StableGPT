import dataManager from "./dataManager";

class ReferenceImageManager {
    private dataKey: string = "ReferenceImageFiles";

    setReferenceImages(imageFiles: File[]): void {
        dataManager.setData(this.dataKey, imageFiles);
    }

    getReferenceImages(): File[] {
        return dataManager.getData(this.dataKey);
    }
}

const referenceImageManager = new ReferenceImageManager();
export default referenceImageManager;
