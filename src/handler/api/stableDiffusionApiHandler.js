class StableDiffusionApiHandler {
    baseUrl = "http://127.0.0.1:7860"
    width = 1280
    height = 720
    imageNum = 1;

    setImageSize({width, height}) {
        this.width = width;
        this.height = height;
    }

    setImageNum(imageNum) {
        this.imageNum = imageNum;
    }

    async postTextToImage(prompt, num=this.imageNum) {
        const requestBody = {
            "prompt": prompt,
            "negative_prompt": "",
            "styles": [
                "string"
            ],
            "seed": -1,
            "subseed": -1,
            "subseed_strength": 0,
            "seed_resize_from_h": -1,
            "seed_resize_from_w": -1,
            "sampler_name": "DPM++ 2M Karras",
            "batch_size": num,
            "n_iter": 1,
            "steps": 50,
            "cfg_scale": 7,
            "width": this.width,
            "height": this.height,
            "restore_faces": true,
            "tiling": false,
            "do_not_save_samples": false,
            "do_not_save_grid": false,
            "eta": 0,
            "denoising_strength": 0,
            "s_min_uncond": 0,
            "s_churn": 0,
            "s_tmax": 0,
            "s_tmin": 0,
            "s_noise": 0,
            "override_settings": {},
            "override_settings_restore_afterwards": true,
            "refiner_checkpoint": "_CHEYENNE_.safetensors",
            "refiner_switch_at": 0,
            "disable_extra_networks": false,
            "firstpass_image": "string",
            "comments": {},
            "enable_hr": false,
            "firstphase_width": 0,
            "firstphase_height": 0,
            "hr_scale": 2,
            "hr_upscaler": "string",
            "hr_second_pass_steps": 0,
            "hr_resize_x": 0,
            "hr_resize_y": 0,
            "hr_checkpoint_name": "_CHEYENNE_.safetensors",
            "hr_sampler_name": "string",
            "hr_prompt": "",
            "hr_negative_prompt": "",
            "force_task_id": "string",
            "sampler_index": "Euler",
            "script_name": "",
            "script_args": [],
            "send_images": true,
            "save_images": false,
            "alwayson_scripts": {},
            "infotext": "string"
        };

        return new Promise(async (resolve, reject) => {
            try {
                /* get sampler name to use*/
                const samplers = await this.getSamplers() || [];
                if (samplers.length === 0) {
                    reject("Error: Sampler doesn't exist in Stable Diffusion");
                }
                const samplerName = samplers[0].name;
                console.log("StableDiffusionApiHandler::postTextToImage - samplerName:'" + samplerName + "'");
                requestBody.sampler_name = samplerName;

                /* get model name to use */
                const models = await this.getModels() || [];
                if (models.length === 0) {
                    reject("StableDiffusionApiHandler::postTextToImage - Error: Model doesn't exist in Stable Diffusion");
                }
                const modelName = models[0].title.replace(/\s\[.*\]*/g, "");
                console.log("StableDiffusionApiHandler::postTextToImage - modelName:'" + modelName + "'");
                requestBody.hr_checkpoint_name = modelName;
                requestBody.refiner_checkpoint = modelName;
                fetch(this.baseUrl + "/sdapi/v1/txt2img", {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                }).then(response=>{
                    resolve(response.json());
                }).catch(error=>{
                    reject(error);
                })
            } catch (error) {
                reject(error);
            }
        });
    }

    async getModels() {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + "/sdapi/v1/sd-models", {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response=>{
                resolve(response.json());
            }).catch(error=>{
                reject(error);
            });
        });
    }

    async getSamplers() {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + "/sdapi/v1/samplers", {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response=>{
                resolve(response.json());
            }).catch(error=>{
                reject(error);
            });
        });
    }
}

const stableDiffusionApiHandler = new StableDiffusionApiHandler();

export default stableDiffusionApiHandler;