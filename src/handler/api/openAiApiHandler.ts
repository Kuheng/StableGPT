class OpenAiApiHandler {
    private apiKey: string = '';
    private imageSize: string = "1024x1024";
    private imageModel: string = "dall-e-2";
    private imageNum: number = 1;
    //dall-e-2, dall-e-3 etc... checkout here(https://platform.openai.com/docs/api-reference/images/createEdit)
    //each api supports different model but dall-e-2 is always supported.

    constructor() {
        //Todo: Remove Value. 
        //It is just for testing the app. Must have to parse from somewhere
        this.setApiKey("");
    }

    setApiKey(key: string): void {
        this.apiKey = key;
    }

    setImageSize(newSize: string): void {
        this.imageSize = newSize;
    }

    setImageModel(modelName: string): void {
        this.imageModel = modelName;
    }

    setImageNum(imageNum: number): void {
        this.imageNum = imageNum;
    }

    async postTextToImage(prompt: string, num: number = this.imageNum): Promise<any> {
        console.log("OpenAiApiHandler::postTextToImage");
        const requestBody = {
            prompt: prompt,
            n: num,
            size: this.imageSize,
            model: this.imageModel
        };

        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            const data = await response.json();
            if (response.status !== 200) {
                throw data;
            } else {
                return data;
            }
        } catch(error) {
            throw error;
        }
    }

    async postImageVariation(image: Blob, num: number = 1): Promise<any> {
        console.log("OpenAiApiHandler::postImageVariation");
        const formData = new FormData();
        formData.append('image', image);
        formData.append('n', num.toString());
        formData.append('size', this.imageSize);

        try {
            const response = await fetch('https://api.openai.com/v1/images/variations', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.apiKey
                },
                body: formData
            });
            const data = await response.json();
            if (response.status !== 200) {
                throw data;
            } else {
                return data;
            }
        } catch(error) {
            throw error;
        }
    }

    async postImageEdit(image: Blob, prompt: string, mask: Blob | undefined = undefined, num: number = 1): Promise<any> {
        console.log("openAiApiHandler::postImageEdit");
        const formData = new FormData();
        formData.append('image', image);
        formData.append('prompt', prompt);
        formData.append('n', num.toString());
        formData.append('size', this.imageSize);
        if (mask !== undefined) {
            formData.append('mask', mask);
        }

        try {
            const response = await fetch('https://api.openai.com/v1/images/edits', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.apiKey
                },
                body: formData
            });
            const data = await response.json();
            if (response.status !== 200) {
                throw data;
            } else {
                return data;
            }
        } catch(error) {
            throw error;
        }
    }

    async postChatCompletions(messages: Array<{ role: string, content: Array<{ type: string, text: string }> }>): Promise<any> {
        const requestBody = {
            "model": "gpt-4",
            "messages": messages
        };
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            const data = await response.json();
            if (response.status !== 200) {
                throw data;
            } else {
                return data;
            }
        } catch(error) {
            throw error;
        }
    }

    async postTextChat(message: string): Promise<any> {
        return this.postChatCompletions([
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": message
                    }
                ]
            }
        ]);
    }
}

const openAiApiHandler = new OpenAiApiHandler();

export default openAiApiHandler;
