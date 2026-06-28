import axios from "axios";

const API_key = 'wxo622iosuwmqcmb0'
const BASE_URL = 'https://techhk.aoscdn.com'


export const enhanceimage = async (file)=>{
    try {

        const task_id = await uploadImg(file);
        console.log("Image uploaded successfully, Task ID:", task_id );

        const enahncedImgData = await fetchImg(task_id);
        console.log("Enhanced Image Data:", enahncedImgData );

        console.log(enahncedImgData);
        return enahncedImgData

         
    } catch (error) {
        console.log("Error while enhancing the image:", error.message);
        throw error;
    }
}

const uploadImg = async (file)=>{


    const formData = new FormData();
    formData.append('image_file', file)
    formData.append("sync", 0)
    formData.append("return_type", 1)

    const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers:{
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_key
        }
    })

    console.log("Upload Response:", data);

    if(!data?.data?.task_id){
        throw new Error("Failed to upload image! Task Id not found");
    }

    //code to upload image
    "/api/tasks/visual/scale"

    return data.data.task_id;

}

const fetchImg = async(task_id)=>{
    //code to fetch image from api
    "/api/tasks/visual/scale/{task_id}"

    let progress = 0

    while (progress<100) {
       const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${task_id}`, {
            headers:{
                "X-API-KEY": API_key
            }
        })

        console.log(data.data);

        progress = data.data.progress

        if (progress ==100) {
            return data.data.image
        }

        await new Promise((resolve)=>{
            setTimeout(() => {
                resolve();
            }, 1000);
        })

    }
    
}