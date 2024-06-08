import openAiApiHandler from "./api/openAiApiHandler";
import stableDiffusionApiHandler from "./api/stableDiffusionApiHandler";
import referenceImageManager from "../manager/referenceImageManager";
import maskImageManager from "../manager/maskImageManager";

class GenerateImageHandler {
    openAi = new OpenAiController();
    stableDiffusion = new StableDiffusionController();
}

class OpenAiController {
    async generate(prompt) {
        const referenceImages = referenceImageManager.getReferenceImages() || [];
        const maskImage = maskImageManager.getMaskImage();
        if (referenceImages.length === 0) {
            return await openAiApiHandler.postTextToImage(prompt);
        } else if(maskImage === undefined) {
            return await openAiApiHandler.postImageVariation(referenceImages[0]);
        } else {
            return await openAiApiHandler.postImageEdit(referenceImages[0], prompt, maskImage);
        }
    }
}

class StableDiffusionController {
    generate(prompt) {
        return stableDiffusionApiHandler.postTextToImage(prompt);
    }
}

const generateImageHandler = new GenerateImageHandler();

export default generateImageHandler;