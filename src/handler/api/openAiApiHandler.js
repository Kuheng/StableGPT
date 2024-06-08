class OpenAiApiHandler {
    apiKey = '';
    imageSize = "1024x1024";
    imageModel = "dall-e-2";
    imageNum = 1;
    //dall-e-2, dall-e-3 etc... checkout here(https://platform.openai.com/docs/api-reference/images/createEdit)
    //each api supports different model but dall-e-2 is always supported.

    constructor() {
        //Todo: Remove Value. 
        //It is just for testing the app. Must have to parse from somewhere
        this.setApiKey("");
    }

    setApiKey(key) {
        this.apiKey = key;
    }

    setImageSize(newSize) {
        this.imageSize = newSize;
    }

    setImageModel(modelName) {
        this.imageModel = modelName;
    }

    setImageNum(imageNum) {
        this.imageNum = imageNum;
    }

    async postTextToImage(prompt, num = this.imageNum) {
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
            const data = response.json();
            if (response.status !== 200) {
                throw data;
            } else {
                return data;
            }
        } catch(error) {
            throw error;
        }
    }

    async postImageVariation(image, num = 1) {
        console.log("OpenAiApiHandler::postImageVariation");
        const formData = new FormData();
        formData.append('image', image);
        formData.append('n', num);
        formData.append('size', this.imageSize);

        return new Promise((resolve, reject) => {
            fetch('https://api.openai.com/v1/images/variations', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.apiKey
                },
                body: formData
            }).then(response => {
                if (response.status !== 200) {
                    reject(response);
                } else {
                    const data = response.json();
                    resolve(data);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

    async postImageEdit(image, prompt, mask = undefined, num = 1) {
        console.log("openAiApiHandler::postImageEdit");
        const formData = new FormData();
        formData.append('image', image);
        formData.append('prompt', prompt);
        formData.append('n', num);
        formData.append('size', this.imageSize);
        if (mask !== undefined) {
            formData.append('mask', mask);
        }

        return new Promise((resolve, reject) => {
            fetch('https://api.openai.com/v1/images/edits', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.apiKey
                },
                body: formData
            }).then(response => {
                if (response.status !== 200) {
                    reject(response);
                } else {
                    const data = response.json();
                    resolve(data);
                }
            }).catch(error => {
                console.log("openAiApiHandler::postImageEdit - error", error);
                reject(error);
            });
        });
    }

    async postChatCompletions(messages) {
        const requestBody = {
            "model": "gpt-4o",
            "messages": messages
        };
        return new Promise((resolve, reject) => {
            fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            }).then(response => {
                if (response.status !== 200) {
                    reject(response);
                } else {
                    const data = response.json();
                    resolve(data);
                }
            }).catch(error => {
                console.log("openAiApiHandler::postImageEdit - error", error);
                reject(error);
            });
        });
    }

    async postTextChat(message) {
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