interface ImageSize {
    width: number;
    height: number;
}

interface RequestBody {
    prompt: string;
    negative_prompt: string;
    styles: string[];
    seed: number;
    subseed: number;
    subseed_strength: number;
    seed_resize_from_h: number;
    seed_resize_from_w: number;
    sampler_name: string;
    batch_size: number;
    n_iter: number;
    steps: number;
    cfg_scale: number;
    width: number;
    height: number;
    restore_faces: boolean;
    tiling: boolean;
    do_not_save_samples: boolean;
    do_not_save_grid: boolean;
    eta: number;
    denoising_strength: number;
    s_min_uncond: number;
    s_churn: number;
    s_tmax: number;
    s_tmin: number;
    s_noise: number;
    override_settings: Record<string, any>;
    override_settings_restore_afterwards: boolean;
    refiner_checkpoint: string;
    refiner_switch_at: number;
    disable_extra_networks: boolean;
    firstpass_image: string;
    comments: Record<string, any>;
    enable_hr: boolean;
    firstphase_width: number;
    firstphase_height: number;
    hr_scale: number;
    hr_upscaler: string;
    hr_second_pass_steps: number;
    hr_resize_x: number;
    hr_resize_y: number;
    hr_checkpoint_name: string;
    hr_sampler_name: string;
    hr_prompt: string;
    hr_negative_prompt: string;
    force_task_id: string;
    sampler_index: string;
    script_name: string;
    script_args: any[];
    send_images: boolean;
    save_images: boolean;
    alwayson_scripts: Record<string, any>;
    infotext: string;
}

class StableDiffusionApiHandler {
    private baseUrl: string = "http://127.0.0.1:7860";
    private width: number = 512;
    private height: number = 512;
    private imageNum: number = 1;

    setImageSize({ width, height }: ImageSize): void {
        this.width = width;
        this.height = height;
    }

    setImageNum(imageNum: number): void {
        this.imageNum = imageNum;
    }

    async postTextToImage(prompt: string, num: number = this.imageNum): Promise<any> {
        const requestBody: RequestBody = {
            prompt: prompt,
            negative_prompt: "",
            styles: ["string"],
            seed: -1,
            subseed: -1,
            subseed_strength: 0,
            seed_resize_from_h: -1,
            seed_resize_from_w: -1,
            sampler_name: "DPM++ 2M Karras",
            batch_size: num,
            n_iter: 1,
            steps: 20,
            cfg_scale: 7,
            width: this.width,
            height: this.height,
            restore_faces: true,
            tiling: false,
            do_not_save_samples: false,
            do_not_save_grid: false,
            eta: 0,
            denoising_strength: 0,
            s_min_uncond: 0,
            s_churn: 0,
            s_tmax: 0,
            s_tmin: 0,
            s_noise: 0,
            override_settings: {},
            override_settings_restore_afterwards: true,
            refiner_checkpoint: "v1-5-pruned-emaonly.safetensors",
            refiner_switch_at: 0,
            disable_extra_networks: false,
            firstpass_image: "string",
            comments: {},
            enable_hr: false,
            firstphase_width: 0,
            firstphase_height: 0,
            hr_scale: 2,
            hr_upscaler: "string",
            hr_second_pass_steps: 0,
            hr_resize_x: 0,
            hr_resize_y: 0,
            hr_checkpoint_name: "v1-5-pruned-emaonly.safetensors",
            hr_sampler_name: "string",
            hr_prompt: "",
            hr_negative_prompt: "",
            force_task_id: "string",
            sampler_index: "Euler",
            script_name: "",
            script_args: [],
            send_images: true,
            save_images: false,
            alwayson_scripts: {},
            infotext: "string"
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
                }).then(response => {
                    resolve(response.json());
                }).catch(error => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    async getModels(): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + "/sdapi/v1/sd-models", {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                resolve(response.json());
            }).catch(error => {
                reject(error);
            });
        });
    }

    async getSamplers(): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + "/sdapi/v1/samplers", {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                resolve(response.json());
            }).catch(error => {
                reject(error);
            });
        });
    }
}

const stableDiffusionApiHandler = new StableDiffusionApiHandler();

export default stableDiffusionApiHandler;